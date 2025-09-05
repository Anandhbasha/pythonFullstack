import newProd from "../Model/schema.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const read = async(req,res)=>{
    try {
        const allprod = await newProd.find()
        return res.status(200).json(allprod)
    } catch (error) {
        return res.status(401).json(error)
    }
}

export const add = async(req,res)=>{
    try {
        const {userName,userMobile,userPassword} = req.body
        const existing = await newProd.findOne({userMobile})
        if(existing){
            return res.status(406).json({message:"user already exist"})
        }
        const insert = await newProd({userName,userMobile,userPassword}).save()
        return res.status(202).json({message:"data inserted succesfully",insert})
    } catch (error) {
        return res.status(405).json({message:"Unable to insert the data"})
    }
}

export const update = async(req,res)=>{
    try {
        const {userMobile} = req.params
        const{userPassword} = req.body
        const existing = await newProd.findOneAndUpdate({userMobile:userMobile},{$set:{userPassword}})
        if(!existing){
            return res.status(406).json({message:"user doesn't exist"})
        }
        return res.status(209).json(` userPassword  is updated to ${userPassword}`)
    } catch (error) {
       return  res.status(409).json(error)
    }
}
export const deleteValue = async(req,res)=>{
    const {userMobile} = req.params
    const deleteUse = await newProd.findOneAndDelete({userMobile})
    if(!deleteUse){
        return  res.status(409).json("data not found")
    }
    return  res.status(210).json({message:"User deleted succesfully",userMobile})
}



export const registerNew = async(req,res)=>{
    try {
        const {userEmail,userPassword,userMobile} = req.body
        const exist = await newProd.findOne({userEmail})
        if(exist){
            return res.status(411).json({message:"user Already exist"})
        }
        const Salt = await bcrypt.genSalt(15)
        const hassedPassword = await bcrypt.hash(userPassword,Salt)
        const addNew = await newProd({userEmail:userEmail,userPassword:hassedPassword,userMobile:userMobile}).save()
        return res.status(205).json({message:"Added succesfully",data:addNew})
    } catch (error) {
        return res.status(408).json(error)
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {userEmail,userPassword} = req.body
        const exist = await newProd.findOne({userEmail})
        if(!exist){
            return res.status(411).json({message:"user Not exist"})
        }
        const match = await bcrypt.compare(userPassword,exist.userPassword)
        if(!match){
            return res.status(410).json({message:"Password Not match"})
        }
        const token = jwt.sign({userEmail},"abcedf",{expiresIn:"5m"})
        return res.status(215).json({token,data:userEmail})
    } catch (error) {
        return res.status(425).json(error)
    }
}

export const verifytoken = (req,res,next)=>{
    try {
        const authUser = req.headers['authorization']
        if(!authUser){
            return res.status(425).json("Access denied")
        }
        const token = authUser.split(" ")[1]
        const decode = jwt.verify(token,"abcedf")
        req.user = decode
        next()

    } catch (error) {
        res.status(450).json(error)
    }
}
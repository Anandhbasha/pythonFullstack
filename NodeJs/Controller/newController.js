import newProd from "../Model/schema.js"

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



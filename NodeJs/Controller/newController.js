export const read = (req,res)=>{
    res.send("Node is working")
}

export const add = (req,res)=>{
    const {userName,password}=req.body
    res.json(`the userName is: ${userName} pass is :${password}`)
}
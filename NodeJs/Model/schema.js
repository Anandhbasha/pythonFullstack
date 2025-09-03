import mongoose from 'mongoose'

const prodSchema = new mongoose.Schema({
    userName:String,
    userMobile:Number,
    userPassword:String
})

const newProd = mongoose.model('newProds',prodSchema,'register')

export default newProd
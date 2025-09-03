import mongoose from 'mongoose'

const Database =(url)=>{
    try {
        mongoose.connect(url)
        const db = mongoose.connection
        db.once('open',()=>{
            console.log("Db is conncted");        
        })
    } catch (error) {
        console.log(error);        
    }
}
export default Database
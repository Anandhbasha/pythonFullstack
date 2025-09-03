import express from 'express'
import router from './Router/route.js'
import Database from './Database/Database.js'

const app = express()

app.use(express.json())
Database('mongodb://127.0.0.1:27017/Newone')

const PORT = 9542

app.use('/basic',router)

app.listen(PORT,()=>{
    console.log(`server is working http://localhost:${PORT}`);    
})
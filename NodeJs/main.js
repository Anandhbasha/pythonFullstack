import express from 'express'
import router from './Router/route.js'

const app = express()

app.use(express.json())

const PORT = 9542

app.use('/basic',router)

app.listen(PORT,()=>{
    console.log(`server is working http://localhost:${PORT}`);    
})
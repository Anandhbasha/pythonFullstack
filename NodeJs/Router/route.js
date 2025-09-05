import express from 'express'
import { add,read,deleteValue ,update, registerNew, loginUser, verifytoken} from '../Controller/newController.js'

const router = express.Router()

router.get('/',verifytoken,read)
router.post('/insert',add)
router.put('/update/:userMobile',update)
router.delete('/delete/:userMobile',deleteValue)
router.post('/register',registerNew)
router.post('/login',loginUser)

export default router
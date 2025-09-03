import express from 'express'
import { add,read,deleteValue ,update} from '../Controller/newController.js'

const router = express.Router()

router.get('/',read)
router.post('/insert',add)
router.put('/update/:userMobile',update)
router.delete('/delete/:userMobile',deleteValue)

export default router
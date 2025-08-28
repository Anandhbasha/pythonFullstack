import express from 'express'
import { add, read } from '../Controller/newController.js'

const router = express.Router()

router.get('/',read)
router.post('/insert',add)

export default router
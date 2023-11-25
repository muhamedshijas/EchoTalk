import express from 'express'
import { getAllUsers, loginUser, registerUser } from '../Controllers/UserController.js'
import { protect } from '../Middlewares/authMiddleWare.js'
const router= express.Router()

router.route('/').post(registerUser).get(protect,getAllUsers)
router.post('/login',loginUser)



export default router
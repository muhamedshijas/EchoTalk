import express from 'express'
import { loginUser, registerUser } from '../Controllers/UserController.js'
const router= express.Router()

router.route('/').post(registerUser)
router.post('/login',loginUser)


export default router
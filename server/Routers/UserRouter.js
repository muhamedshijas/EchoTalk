import express from 'express'
import { UserSignUp, checkUserLoggedIn, getAllUsers, userLogin, userLogout } from '../Controllers/UserController.js'
const router= express.Router()

router.post('/signup',UserSignUp)
router.get('/check',checkUserLoggedIn)
router.post('/login',userLogin)
router.get('/logout',userLogout)
router.get('/allusers',getAllUsers)
export default router
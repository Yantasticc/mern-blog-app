import express from 'express'
import { createUser, loginUser } from '../controllers/userController.js'

const userRouter = express.Router();

// CREATE NEW USER
userRouter.post('/register', createUser)

// LOGIN USER
userRouter.post('/login', loginUser)

export default userRouter;
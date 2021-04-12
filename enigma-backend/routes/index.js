import express from 'express'
//controllers
import users from '../collections/user.js'
//middleware
import { encode } from '../middleware/jtw.js'

const router = expres.Router();

router
    .post('/login/:userId', encode, (req,res,next) => {})

export default router
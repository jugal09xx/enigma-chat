import express from 'express'
//middleware
import { encode } from '../middlewares/jwt.js'

const router = express.Router();

router
    .post('/login/:userId', encode, (req,res,next) => {
        return res
            .status(200)
            .json({
                success: true,
                authorization: req.authToken,
            })
    })
    .get('/login/:userId', encode, (req,res,next) => {
        return res
            .status(200)
            .json({
                success: true,
                authorization: req.authToken,
            })
    })

export default router
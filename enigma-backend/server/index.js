import http from 'http'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

//routes
import indexRouter from './router/index.js'
import userRouter from './router/user.js'
import chatRoomRouter from './router/chatRoom.js'
import deleteRouter from './router/delete.js'

//middlewares
import {decode} from './middleware/jwt.js'

const app = express()

const port = process.env.PORT || '9000'
app.set('port', port)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/room', decode, chatRoomRouter)
app.use('/delete', deleteRouter)

app.use('*', (req,res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist',
    })
})

const server = http.createServer(app)
server.listen(port)
server.on('listening', () => {
    console.log(`server listening on port ${port}`)
})
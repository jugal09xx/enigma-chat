//dependencies
import http from 'http'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import * as io from 'socket.io'

//socket config
import WebSockets from './utils/WebSocket.js'

//routes
import indexRouter from './routes/index.js'
import userRouter from './routes/user.js'
import chatRoomRouter from './routes/chatRoom.js'
import deleteRouter from './routes/delete.js'

//middlewares
import {decode} from './middlewares/jwt.js'

//server config
const app = express()

const port = process.env.PORT || '9000'
app.set('port', port)

//mongo
import './config/mongo.js'

//express config
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//routes

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

//create server
const server = http.createServer(app)
const socketio = new io.Server(server)
//create socket connection
global.io = socketio.listen(server)
global.io.on('connection', WebSockets.connection)
server.listen(port)
server.on('listening', () => {
    console.log(`server listening on port ${port}`)
})
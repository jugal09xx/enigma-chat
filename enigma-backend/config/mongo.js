import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongoPw = process.env.MONGO_PW

const CONN_URL = `mongodb+srv://jugal09:${mongoPw}@cluster0.85adv.mongodb.net/enigma-chat?retryWrites=true&w=majority`

mongoose.connect(CONN_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log('Database connected!')
})

mongoose.connection.on('reconnected', () => {
    console.log('Database has reconnected!')
})

mongoose.connection.on('error', error => {
    console.log('Databse has an error', error)
    mongoose.disconnect()
})

mongoose.connection.on('disconnected', () => {
    console.log('Database has disconnected!')
})
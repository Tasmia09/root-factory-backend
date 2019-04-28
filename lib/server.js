import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

//routes
import factoryRoute from './routes/factory'

const server = express()

server.use(cors({ origin: '*' }))
server.use(bodyParser.json({ limit: '1mb' }))

server.use('/api/factory', factoryRoute)

const port = 5069;
const DB_URL = "mongodb://localhost:27017/root-factory-db"
mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.on('open', function(){
    console.log("Mongoose default connection is open to ", DB_URL)
});


server.listen(port, function() {
    // console.log('db url is: ', process.env.DB_URL)
    console.log(`server running on port ${port}`)
});
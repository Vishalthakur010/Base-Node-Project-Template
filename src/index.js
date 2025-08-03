const express = require('express')
const amqplib = require('amqplib')
const {EmailService} = require('./services')

async function connectQueue(){
    try{
        const connection = await amqplib.connect('amqp://localhost')
        const channel = await connection.createChannel()
        await channel.assertQueue('noti-queue')

        channel.consume('noti-queue', (data)=>{
            console.log(`${Buffer.from(data.content)}`)
            const object = JSON.parse(`${Buffer.from(data.content)}`)
            EmailService.sendMail('Indigo Airlines', object.recepientEmail, object.subject, object.text)
            channel.ack(data)
        })
    }
    catch(error){
        console.log(error)
    }
}

const {serverConfig, Logger} = require('./config')
const apiRoutes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, ()=>{
    console.log(`Successfully started the server at port : ${serverConfig.PORT}`)
    connectQueue()
    console.log('Queue is up')
})
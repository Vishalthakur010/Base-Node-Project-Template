const express = require('express')
const mailsender = require('./config/email-config')

const {serverConfig, Logger} = require('./config')
const apiRoutes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, async ()=>{
    console.log(`Successfully started the server at port : ${serverConfig.PORT}`)
    // Logger.info("Successfully started the server", {})
    try {
        const response = await mailsender.sendMail({
            from : serverConfig.GMAIL_EMAIL,
            to : 'vishalthakur970820@gmail.com',
            subject : 'Is the service working',
            text : 'Yes the service is working'
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})
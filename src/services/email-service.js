const AppError = require('../utils/errors/app-error')
const { StatusCodes } = require('http-status-codes')

const { TicketRepository } = require('../repositories')
const { MAILER } = require('../config')

const ticketRepo = new TicketRepository()

async function sendMail(mailFrom, mailTo, subject, text) {
    try {
        const response = await MAILER.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: text
        })
        return response
    } catch (error) {
        throw new AppError('Cannot send email', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function createTicket(data) {
    try {
        const response = await ticketRepo.create(data)
        return response
    } catch (error) {
        console.log(error)
        throw new AppError('Cannot create ticket', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getPendingEmails() {
    try {
        const response = await ticketRepo.getPendingTickets()
        return response
    } catch (error) {
        console.log(error)
        throw new AppError('Cannot fetch data of all pending emails', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    sendMail,
    createTicket,
    getPendingEmails
}
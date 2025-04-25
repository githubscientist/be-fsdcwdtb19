const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = require('../utils/config');

const sendEmail = async (to, subject, text) => {
    try {
        // Create a transporter object using SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your SMTP server
            port: 587, // Replace with your SMTP port (587 for TLS, 465 for SSL - abbreviated as Secure Socket Layer)
            secure: false, // true for 465, false for other ports
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        // Set up email data
        const mailOptions = {
            from: EMAIL_USER, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            // html: '<b>Hello world?</b>' // html body
        }

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
    } catch (error) {
        console.log('Error sending email:', error);
    }
}

module.exports = {
    sendEmail
}
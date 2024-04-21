import express from 'express';
import path from 'path';
import { SMTPServer, type SMTPServerSession } from 'smtp-server';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';
import type { EmailType } from './types'
import bodyParser from 'body-parser';

const app = express();
const api = express.Router();
const port = process.env.PORT || 80;
const mailPort = process.env.MAIL_PORT || 25
const serverHostname = process.env.HOSTNAME || 'amazon.hannaskairipa.com';

// Create an SMTP server
const mail = new SMTPServer({
    // Options
    secure: false,
    onData(stream: Readable, session: SMTPServerSession, callback: () => void) {
        let mailData = '';
        stream.on('data', (chunk: Buffer) => {
            mailData += chunk.toString('utf8');
        });
        stream.on('end', () => {
            // 'mailData' contains the email content
            console.log('Received email:', mailData);

            console.log(mailData);

            // Process email (e.g., send using nodemailer)
            // sendEmail(mailData);

            // Call the callback to acknowledge receipt of the email
            callback();
        });
    }
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

api.post('/sendMail', (req, res) => {
    console.log(req);
    const { to, subject, message }: EmailType = req.body;
    sendEmail(subject, message, to);
    res.send('Email sent successfully');
});

mail.listen(mailPort, () => {
    console.log('SMTP server started on port ' + mailPort);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const sendEmail = (subject: string, message: string, to: string) => {
    const transporter = nodemailer.createTransport({
        host: serverHostname,
        port: mailPort,
        secure: false,
        ignoreTLS: true
    } as nodemailer.TransportOptions);

    // Define email options
    const mailOptions = {
        from: `no-reply@${serverHostname}`,
        to: to || 'no-reply@amazon.hannaskairipa.com',
        subject: subject || 'No Subject',
        text: message || 'No message provided'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info: any) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.post('/send', (req, res) => {
    const output = `
        <p>You have new info </p>
        <h3>Name : ${req.body.name} </h3>
    `;

    let transporter = nodemailer.createTransport({
        host: 'sg2plcpnl0102.prod.sin2.secureserver.net',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'test@parasvohra.com', // generated ethereal user
            pass: 'Parasvohra@966'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Node mailer" <test@parasvohra.com>', // sender address
        to: 'pursharth01@gmail.com, arogundadekolade@yahoo.com ', // list of receivers
        subject: 'Hello ', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    console.log(req.body.name);
})

//app.listen(8080,'23.229.183.33', () => console.log("Server Started"));

app.listen(8000,()=> console.log("server started"));


const nodemailer = require('nodemailer')

send = (message) =>
{
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'carserviceror@gmail.com',
            pass: 'ewq$%^321'
        }
    })
    
    var mail_options = {
        from: 'carserviceror@gmail.com',
        to: 'tehanovanton@gmail.com',
        subject: 'Nodemailer testing',
        text: message
    }

    transport.sendMail(mail_options, (err, info) => {
        if (err) {
            console.log(err)
        }        
        else {
            console.log('Email sent: ' + info.response)
        }
    })
      
}

module.exports = send
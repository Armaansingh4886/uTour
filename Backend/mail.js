import nodemailer from 'nodemailer';


var transport = nodemailer.createTransport({
 
    service:"gmail",
    port: 2525,
    auth: {
      user: "armaansingh40132018@gmail.com",
      pass: "irzr eslh qmeu zcao"
    }
  });
  
﻿transport.verify(function(error, success) {
    if (error) {
          console.log(error);
    } else {
          console.log('Server is ready to take our messages');
    }
  });

  var mailOptions = {
    from: '"Example Team" <armaansingh4013@gmail.com>',
    to: 'armaansingh4013@gmail.com',
    subject: 'Verify Your uTour account',
    text: 'Hey there, it’s mail to verify your registerd email on uTour ',
    html: '<b>Hey there! </b><br> An account is registered with this email on uTour. <a href="http://localhost:3000/verifyemail">Click Here</a> to verify your email'
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});


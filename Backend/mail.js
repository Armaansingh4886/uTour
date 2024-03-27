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
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer  <a href="http://localhost:3000/verifyemail">Click Here</a>'
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});


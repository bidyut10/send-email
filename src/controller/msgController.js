const connection = require("../database/db");
const nodemailer = require('nodemailer');



const msgPost = async function (req, res) {
  try {
    
    const { message, email } = req.body;

    //Req Body is empty or not
    if (Object.keys(req.body).length == 0) {
      return res.status(400).send({
        status: false,
        error: "Fill Up Your Details",
      });
    }
    //emailId
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      return res.status(400).send({
        status: false,
        message: "Email should be valid email address",
      });
    }

    let testAccount = await nodemailer.createTestAccount();
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: {
        user: 'bidyut34268@gmail.com',
        pass: 'CEC92BDA83285E265EA62A8578F2B76552BB'
      }
    });

    // Save user input to MySQL
    const sql = 'INSERT INTO messages (message, email) VALUES (?, ?)';
    connection.query(sql, [message, email], (err, result) => {
      if (err) throw err;
      console.log('Message saved to database!');

      // Send email using nodemailer
      const mailOptions = {
        from: 'bidyut34268@gmail.com',
        to: email,
        subject: 'New message from my website',
        text: message
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent to ' + email + ': ' + info.response);
      });

      res.send('Message sent!');
    })
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { msgPost };

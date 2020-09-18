const express = require("express");
var router = express.Router();

var nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  let my_email = process.env.EMAIL;
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: my_email,
      pass: process.env.APP_PASS,
    },
  });

  var { first, last, email, subject, phone, message } = req.body;
  var mailOptions = {
    from: email,
    to: my_email,
    subject: subject,
    html: `<pre>${message}</pre><br/><br/>Name: ${first} ${last} <br/>Email: ${email} <br/>Phone: ${phone}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      res.json({ status: "error" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ status: "success" });
    }
  });

  transporter.close();
});

module.exports = router;

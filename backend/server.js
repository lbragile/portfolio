require("dotenv").config();
const express = require("express");
const app = express();

var cors = require("cors");

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" })); // allow json formating in post
app.use(cors());

var nodemailer = require("nodemailer");

app.post("/", function (req, res) {
  let my_email = process.env.EMAIL;
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: my_email,
      pass: process.env.APP_PASS,
    },
  });

  var { firstname, lastname, email, subject, phone, message } = req.body;
  var mailOptions = {
    from: req.body.email,
    to: my_email,
    subject: subject,
    html:
      message +
      "\r\n\r\n Name: " +
      firstname +
      " " +
      lastname +
      "\r\n Email: " +
      email +
      "\r\n Phone: " +
      phone,
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

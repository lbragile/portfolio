const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const express = require("express");
const app = express();

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" })); // allow json formating in post

var nodemailer = require("nodemailer");
require("dotenv").config();

app.post("/", function (req, res) {
  let my_email = "lbragile.masc@gmail.com";
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: my_email,
      pass: process.env.password,
    },
  });

  var mailOptions = {
    from: req.body.email,
    to: my_email,
    subject: req.body.subject,
    text:
      req.body.message +
      "\r\n\r\n Name: " +
      req.body.first_name +
      " " +
      req.body.last_name +
      "\r\n Phone: " +
      req.body.phone_number,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ status: "error" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ status: "success" });
    }
  });

  transporter.close();
});

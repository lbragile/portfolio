const express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/:email", async (req, res) => {
  var response = await axios.get(
    "https://isitarealemail.com/api/email/validate?email=" + req.params.email,
    {
      crossDomain: true,
      headers: {
        Authorization: "Bearer " + process.env.IS_IT_REAL_EMAIL_API_KEY,
      },
    }
  );

  let email_status = await response.data.status;
  var isValid = email_status === "valid" || email_status === "unknown";
  res.json({ isValid });
});

module.exports = router;

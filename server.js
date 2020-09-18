require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));

app.use(express.json({ limit: "1mb" })); // allow json formating in post
app.use(cors());

app.use("/contact", require("./routes/contactRoutes"));
app.use("/realEmail", require("./routes/realEmailRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(__dirname + "client/build/index.html");
  });
}

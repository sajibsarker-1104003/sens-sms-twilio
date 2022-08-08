const express = require("express");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const app = express();
const port = 3000;

function sendSMS() {
  client.messages
    .create({
      body: "Hello",
      to: "+8801318390600",
      from: "+19062561478",
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
}

app.get("/", (req, res) => {
  sendSMS();
  res.send(`helloooo0o`);
});

app.listen(port, () => {
  console.log(`Project is listening at http://localhost:${port}`);
});

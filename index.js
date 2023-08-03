const express = require('express')
const app = express()
const path = require('path')
const https = require('https')
const fs = require('fs')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname+'/about.html'))
});

app.get("/discord", function (req, res) {
  res.redirect("https://www.discord.gg/teaclient")
});

app.get("/docs", function (req, res) {
  res.redirect("https://www.docs.teaclient.net");
});


app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + "/page/404.html"));
});


const SSLserver = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "ssl", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "ssl", "cert.pem")),
  },
  app
);
  SSLserver.listen(3000, () => console.log("Online at https:localhost:3000"));
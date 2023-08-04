const express = require('express')
const app = express()
const path = require('path')
const https = require('https')
const fs = require('fs')
const config = require('./config.json')



if (config['PORT'] === 1/1000){
  const port = config['PORT']
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname+ config['Page-Paths']['About-Page']))
});

app.get("/discord", function (req, res) {
  res.redirect("https://www.discord.gg/teaclient")
});

app.get("/docs", function (req, res) {
  res.redirect(config['Discord-Invite-Link']);
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

const port = process.env.SERVER_PORT
if (config['Enable-HTTPS'] === true) {
  SSLserver.listen(port, () => console.log(`online at ${port}`))
} else {
  app.listen(port, () => console.log(`online at ${port} With HTTPS Disabled`))

}
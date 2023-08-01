const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname+'/about.html'))
});

app.get("/discord", function (req, res) {
  res.redirect("https://www.discord.gg/teaclient")
});

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + "/page/404.html"));
});


app.listen(3000)
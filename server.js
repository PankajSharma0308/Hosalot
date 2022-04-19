const http = require('http')
const fs = require('fs')
const path = require('path')

const express = require("express");
const app = express();


const server = http.createServer((req, res) => {
  app.use(express.static("public"));
  app.use('/public', express.static(path.join(__dirname, "public")));
  app.use('/css', express.static('public/stylesheets'));
  app.use('/scripts', express.static('public/javascripts'));
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)
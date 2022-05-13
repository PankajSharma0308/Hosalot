const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('public',express.static(path.join(__dirname, '/public')));

/////////////////
router.use(bodyParser.urlencoded({ extended: false }));

app.use('public',express.static(path.join(__dirname, '/public/css')));
app.use('public',express.static(path.join(__dirname, '/public/js')));
app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/public',express.static(path.join(__dirname, '/public/css/images')));


app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/index1.html'));
});

app.listen(process.env.PORT || 3100)
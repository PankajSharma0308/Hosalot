const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql2 = require("mysql2");
const session = require("express-session");
const http = require('http')
const fs = require('fs')
const res = require('express/lib/response');
const alert = require('alert');
const { allowedNodeEnvironmentFlags } = require('process');


var con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "pankajsharma123",
  database: "hostel"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public',express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname)));
/////////////////
router.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next) => {
	console.log(req.path);
	next();
})

app.get('/login', (req, res) => {
	// REDIRECT goes here
	
	res.sendFile(__dirname+"/index1.html");
	console.log("redirect");
  })

app.post('/ins',function(request,response){
	let username = request.body.username;
	let password = request.body.password;
	let email = request.body.email;

	//console.log(username+password+email);
	// Ensure the input fields exists and are not empty
	if (username && password && email) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('INSERT INTO login_student(stud_id,stud_email,stud_pass) VALUES (?,?,MD5(?))', [username ,email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) {
				console.log(error);
				return;
			};
			
			console.log("this");
			response.redirect('index1.html');
			response.end();


    });
	} else {

		response.send('Wrong Input!');
		response.end();
	}
});

app.post('/auth', function(request, response) {
	// Capture the input fields
  
	let email = request.body.email;
	let password = request.body.password;
	//console.log(username+password);
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('SELECT * FROM login_student WHERE stud_email = ? AND stud_pass = MD5(?)', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
			
				request.session.loggedin = true;
				request.session.email = email = results[0].stud_email;
				request.session.stud_id = stud_id = results[0].stud_id;
       			console.log(email+password+stud_id);
				// Redirect to home pa
				

				response.render(__dirname+"/index.html");
				//response.end();
				
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			

    });
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


app.post('/permission', function(request, response) {
	// Capture the input fields
	let p_stud_id = request.body.per_stud_id;
	let p_absent_reason = request.body.per_absent_reason;
	//console.log(username+password);
	// Ensure the input fields exists and are not empty
	console.log(p_stud_id+" "+p_absent_reason);
	if (p_absent_reason && p_stud_id) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('INSERT INTO permission (p_absent_reason, stud_id) VALUES (?,?)', [p_absent_reason, p_stud_id], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) {
				console.log(error);
				return;
			};
		
			alert("Successful!");

			console.log("Record Permission Inserted!");
			response.render(__dirname+"/index.html");
			response.end();


    });
	} else {

		response.send('Wrong Input!');
		response.end();
	}
});



app.post('/about', function(request, response) {
	// Capture the input fields


	response.render(__dirname+"/about.html");
	response.end();	
});


app.get('/auth', function(req, res){
    res.json({ text:req.session.email, text2:req.session.stud_id});
	
});

app.get('/about', function(req, res){
    res.json({ text:req.session.email, text2:req.session.stud_id});
	
});




app.listen(3000);



console.log('Running at Port 3000');
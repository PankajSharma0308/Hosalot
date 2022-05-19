const express = require('express'),
    path = require('path'),
    mysql = require('mysql2'),
    myConnection = require('express-myconnection');

const app = express();

const bookingRoutes = require('./routes/booking');

app.set('port', process.env.PORT || 3005);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'pankajsharma123',
    database: 'hostel'
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use('/', bookingRoutes);
//app.use('/public',express.static(path.join(__dirname, '/')));
//app.use(express.static(path.join(__dirname,'public')))
app.use('/public', express.static(path.join(__dirname, "public")));
  app.use('/css', express.static('public/stylesheets'));
console.log(__dirname+'/views');
// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});


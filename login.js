const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
    host : 'localhost',
    user :  'root',
    password : '',
    database : 'nodelogin' 
});

const app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,  'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
    let username = request.body.username;
    let password = request.body.password;
    

})
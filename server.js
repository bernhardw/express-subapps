// Dependencies
// ============
var express = require('express');
var http = require('http');
var path = require('path');


// Express
// =======
var app = express();


// Config
// ======
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Middleware
// ==========
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}


// Routes
// ======
// GET: /
app.get('/', function (req, res) {
    res.render('index');
});


// Sub apps
// ========
// Admin
var admin = require('./apps/admin/app.js');
app.use('/admin', admin);

// API
var api = require('./apps/api/app.js');
app.use('/api', api);


// Server
// ======
http.createServer(app).listen(1337, function(){
    console.log('Express server listening on port ' + 1337);
});
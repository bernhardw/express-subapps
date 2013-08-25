// Dependecies
// ===========
var express = require('express');


// Express
// =======
var app = module.exports = express();


// Config
// ======
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');

// Routes
// ======
// GET: /admin
app.get('/', function (req, res) {
    res.render('home');
});
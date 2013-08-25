// Dependecies
// ===========
var express = require('express');


// Express
// =======
var app = module.exports = express();


// Routes
// ======
// GET: /api
app.get('/', function (req, res) {
    res.json({
        title: 'express-subapps',
        headline: 'API (sub app)',
        content: '<p>Success!</p><p><a href="/">Base</a> | <a href="/admin">Admin</a> | <a href="/api" class="active">API</a></p>'
    });
});
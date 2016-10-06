// Set listening port
var port = process.env.PORT || 3000;

// Import express module and create app object
var express = require('express');
var app = express();

// Set route
var router = express.Router();
router.get('/', function (req, resp) {
    var software = req.headers['user-agent'];
    software = software.slice(software.indexOf('(') + 1, software.indexOf(')'))
    resp.json({
        ipaddress: req.ip,
        language: req.acceptsLanguages()[0],
        software: software
    });
});

app.use('/', router);
app.listen(port);
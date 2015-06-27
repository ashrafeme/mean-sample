/*
Author: Ashraf Ezzat

*/
var express = require("express");
var bodyParser = require('body-parser');


var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./auth'));

app.use('/api/posts',require("./controllers/api/posts"));
app.use('/',require("./controllers/static"))
app.use('/api/sessions',require("./controllers/api/sessions"))
app.use('/api/users',require("./controllers/api/users"))

var server = app.listen(process.env.PORT,process.env.IP,function(){
    console.log('server listening on',process.env.PORT);
});

require("./websockets").connect(server);
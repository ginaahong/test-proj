var express = require('express');
// load express libraries
var app = express();
// create an instance of express

app.get('/', function(req,res){
    res.send('hello world');
})

// created server, server is listening at port 1336
app.listen('1336', function(req,res){
    console.log('server listening at port no. 1336');
})

// how to run this
// node index.js
// run localhost:1336/ in browser
// if nothing, says 'look cannot get/'
//    occur b/c not defined get method in index.js

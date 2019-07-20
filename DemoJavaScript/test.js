var express = require('express');  
var app = express();  
var userRouter = require('userRouter');  
userRouter(app);
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});
var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || 3000, ()=>{
    console.log("Servidor listo en http://127.0.0.1:" + server.address().port);
})
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    console.log("Server started!!");
    res.json({ message: "Welcome to Sample Node application" });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
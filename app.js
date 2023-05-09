var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function (req, res) {
    console.log("Server started!!");
    parameter = process.env.NODE_PARAMETER;
    console.log("parameter", parameter);
    res.json(
        { 
          message: "Welcome to Sample Node application",
          body: parameter,
          end: "record end"
        }
      );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
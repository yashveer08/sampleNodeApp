var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function (req, res) {
    console.log("Server started!!");
    const parameter = process.env.NODE_PARAMETER;
    const vari = process.env.Param;
    console.log("parameter", parameter);
    console.log("parameter 2 is here", vari);
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
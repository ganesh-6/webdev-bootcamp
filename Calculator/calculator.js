
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

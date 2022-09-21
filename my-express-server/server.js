
const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("Hello!");
});

app.get("/contact", function(req, res) {
    res.send("Contact ME at : 8999608701");
});

app.get("/about", function(req, res){
  res.send("About ME");
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});

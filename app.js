
//Building the server
//1.npm and express

const express = require("express");

const app = express();

app.get("/", function(req,res) {

  res.sendFile(__dirname + "/index.html");
  

})

app.listen(3000,function(){

  console.log("server is running on Port 3000");
});

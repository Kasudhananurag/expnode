const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("Hello");
});

app.get("/about",function(req,res){
  res.send("Trying to learn node, this is just  a small part");
});

app.get("/contact",function(req,res){
  res.send("contact me here at my phone number 989898989 and or @ contact@gmail.com");
});

app.get("/hobbies",function(req,res){
  res.send("i love watching you and taling to you");
});

app.listen(3000,function(){console.log("Server is running on the port 3000")});

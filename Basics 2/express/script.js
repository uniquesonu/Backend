const express = require("express");
const app = express()

app.use(function(req,res,next){
    console.log("Hello from middleware ");
    next();
})
app.use(function(req,res,next){
    console.log("Hello from middleware 2");
    next();
})

app.get("/",function(req,res){
    res.send("Hello hello  world")
})

app.get("/profile",function(req,res){
    res.send("This is the profile page.")
})

app.listen(3000);
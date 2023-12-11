const express = require('express');
const app = express();

app.set("view engine", "ejs")

// middleware

app.use(express.static('./public'))

app.use(function(req, res, next) {
    // console.log(req);
    console.log("middleware working...")
    next(); 
});


app.get('/', function(req,res){
    res.send('Hello world');
})

app.get('/profile',function(req,res){
    res.send('Hello from profile!')
})

// dynamic routing
app.get('/profile/:username',function(req, res){
    res.send(`Hello from ${req.params.username}`)
})

// ejs
app.get('/home',function(req,res){
    res.render('index');
})

app.get('/contact',function(req,res){
    res.render('contact' , {name: "Sonu"})
})

app.get('/user',function(req,res){
    throw Error("I don't know")
})

app.get('/error',function(req, res,next){
    throw Error("Something went wrong!!")
})

// error handling
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error',{error: "err"})
  })

// console.log("Server Started...")

app.listen(3000)
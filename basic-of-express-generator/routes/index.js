var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.banned = true;
  res.render('index', { title: 'Express' });
});

router.get('/checkban',function(req,res){
  if(req.session.banned===true){
    res.send("You are banned")
  }else{
    res.send("Not banned")
  }
})

router.get('/removeban', function(req,res){
  req.session.destroy(function(err){
    console.log(err);
    res.send("ban removed")
  })
})

router.get('/cookie', function(req,res){
  res.cookie("age", 25)
  res.send("cookies created")
})
router.get('/readCookie',function(req,res){
  console.log(req.cookies);
  res.send("check in console")
})
router.get('/deleteCookie', function(req,res){
  res.clearCookie("age");
  res.send("clear ho gyi");

})

router.get('/create',async function(req,res){
  const createdUser = await userModel.create({
    username: "vaib215",
    name: "Vaibhav",
    age: 21,
  })
  res.send(createdUser)
})
router.get('/allusers',async function(req,res){
  let allUsers = await userModel.find();
  res.send(allUsers);
})

router.get('/findoneuser', async function(req,res){
  let oneUser = await userModel.findOne({username: "vaib215"})
  res.send(oneUser);
})

router.get('/delete', async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({
    username: "vaib215",
  })
  res.send(deletedUser);
})



module.exports = router;

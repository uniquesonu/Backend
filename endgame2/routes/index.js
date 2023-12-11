var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/create",async function(req,res){
  let userData = await userModel.create({
    username: "sanjay",
    nickname: "sanju",
    description: "I am a guy of 22 year",
    categories: ["lover", "reading books", "modern guy",],
    
    })
    res.send(userData);
})

router.get("/find",async function(req,res){
  var regex = new RegExp("soNu",'i');
  /*
  Terms in regExp
  ^ => starting from the given words
  $ => ending with the given words

  this is helps us to finding the exact things that we want in the databases.
  */
  // let user = await userModel.find()

  // finding all the catergories that cantains reading books
  // let categories = await userModel.find({categories: {$all: ["reading books"]}})

  // search the data with the constrains of specific date frame
  var date1 = new Date("2023-12-11");
  var date2 = new Date("2023-12-12");

  //search the data in category exists
  let catExists = await userModel.find({categories: {$exists: true}})

  let dataByDate = await userModel.find({ dateCreated: { $gte: date1, $lte: date2}});

  // res.send(categories);
  // res.send(user);
  res.send(dataByDate);
})

// router.get('/failed', function(req,res){
//   req.flash("age",20);
//   req.flash("name", "sonu")
//   res.send("bangaya");
// })

// router.get('/checkit',function(req,res){
//   console.log(req.flash('age'), req.flash('name'));
//   res.send("terminal dekho");
// })

module.exports = router;

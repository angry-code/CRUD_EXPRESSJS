var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const app = require('../app');
const db = require("../models/index"); // models path depend on your structure
const emps = db.emps;
let ejs = require('ejs');
///////////////////////////////////////

/////////////////////////////////////



router.get('/register', function(req, res, next) {
//res.register('acc_register',{'Title'})
  res.send('acc_register');
});

 router.post('/register', function(req, res, next) {
  console.log('Im in register')
  
  emps.create({fname : req.body.fname , lname : req.body.lname , DeptID  : req.body.Dept}).then(dd=>{
    console.log("hhhhhh",dd);
    console.log('user created successfully')
    console.log(req.body)
  });

  console.log("1 record")
  res.render('acc_register');
});

//update

router.get('/update', function(req, res, next) {
  res.render('acc_update');
});

router.post('/update', function(req, res, next) {
  console.log('Im in update')
  console.log(req.body)
  res.render('acc_update');
  emps.update({  fname : req.body.fname , lname : req.body.lname , DeptID :req.body.Dept },{where :{id: req.body.id} })
  .then(dd=>{
    console.log("Eoor >>> ",dd);
    console.log('user updated successfully')
  });
  console.log("Eoor >>> ");
  console.log("1 record updated")
})


//delete
router.get('/delete', function(req, res, next) {
  res.render('acc_delete');
})
router.post('/delete', function(req, res, next) {
  console.log('Im in DELETE')
   emps.destroy({where : {fname : req.body.fname }}).then(dd=>{
    console.log("dfafwwwww00",dd)
    console.log("delted")
  })
  console.log("1 record dLETED")

});

//===============================================

//=========================  

 router.get('/home',(req,res)=>{
    console.log("HOME")
 emps.findAll({raw: true}).then(dd=>{
  console.log(dd)
  res.render('acc_home', {data: dd});
})
.catch(err=>{
  res.status(500).send({
    message:
    err.message || "ererer"
  })
})
})

////home1
router.get('/home1',(req,res)=>{
  console.log("HOME")
emps.findAll({raw: true}).then(dd=>{
console.log(dd)
res.render('acc_home1', {data: dd});
})
.catch(err=>{
res.status(500).send({
  message:
  err.message || "ererer"
})
})
})

///delete row1

router.get('delete1',(req,res)=>{
  let fname=[];
  fname.push(String(req.params['fname']))
  console.log(fname)
  emps.destroy({where : {fname : req.params['fname'] }}).then(dd=>{
    console.log("dfafwwwww00",dd)
    console.log("delted row")
  })  
})

/////delete1
router.get('/delete1', function(req, res, next) {
  res.render('acc_delete1');
})
router.post('/delete', function(req, res, next) {
  console.log('Im in DELETE')
   emps.destroy({where : {fname : req.body.fname }}).then(dd=>{
    console.log("dfafwwwww00",dd)
    console.log("delted")
  })
  console.log("1 record dLETED")

});

 module.exports = router; 
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const app = require('../app');
//const db = require("../models/index"); // models path depend on your structure
//const users = db.users;



router.get('/register', function(req, res, next) {
  res.render('v1_register');
});

 router.post('/register', function(req, res, next) {
  console.log('Im in register')
  console.log(req.body)
  
  users.create({fname : req.body.fname , lname : req.body.lname}).then(dd=>{
    console.log("hhhhhh",dd);
    console.log('user created successfully')
    console.log(req.body)
  });

  console.log("1 record")
  res.render('v1_register');
});

//update

router.get('/update', function(req, res, next) {
  res.render('v1_update');
});
/*router.get('/update', function(req, res, next) {
  //var sql2 = `SELECT * FROM users limit 1`;
  con.query(sql2,(err,result,fields)=>{
    if(err){
      console.log("error222",sql2)
    }
    console.log(result);
    res.render('update' , result[0]);
  });
})*/
router.post('/update', function(req, res, next) {
  console.log('Im in update')
  console.log(req.body)
  res.render('v1_update');
  //var sql2 = "UPDATE users SET Fname ="+req.body.Fname+" WHERE ID =1";
  users.update({  fname : req.body.fname , lname : req.body.lname },{where :{id:1} })
  .then(dd=>{
    console.log("Eoor >>> ",dd);
    console.log('user updated successfully')
  });
  console.log("Eoor >>> ");
  console.log("1 record updated")
})
//delete
router.get('/delete', function(req, res, next) {
  res.render('v1_delete');
})
router.post('/delete', function(req, res, next) {
  console.log('Im in DELETE')
  //console.log(req.body)
  //var sql3 = "DELETE FROM userdetail WHERE ID ="+req.body.ID+"";
   users.destroy({where : {fname : req.body.fname }}).then(dd=>{
    console.log("dfafwwwww00",dd)
    console.log("delted")
  })
  console.log("1 record dLETED")

});


 module.exports = router;
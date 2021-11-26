var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const app = require('../app');


//Connection to mysql

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"mydb"
})
con.connect(function(err){
  if(err) throw err;
  console.log("connected_index");
})

  // Create Database
  /*con.query("Create Database mydb",(err,result)=>{
    if(err) throw err;
    console.log("Database created")
  })*/

//table 2
 /*var sql1 = "CREATE TABLE userdetail (Fname VARCHAR(200) , Lname VARCHAR(20))";
  con.query(sql1 ,(err,result)=>{
    if(err) throw err;
    console.log("table created")
  })*/
  //alter table add new column
/*var emp = "ALTER TABLE userdetail ADD COLUMN (ID INT)";
con.query(emp,(err,result)=>{
  if(err) throw err;
  console.log("table updated")*/
 /*var emp = "DROP TABLE userdetail";
  con.query(emp,(err,result)=>{
  if(err) throw err;
  console.log("table deleted")
})*/
/*var sql1 = "CREATE TABLE userdetail (ID INT,Fname VARCHAR(200) , Lname VARCHAR(20))";
  con.query(sql1 ,(err,result)=>{
    if(err) throw err;
    console.log("table created")
})*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

 router.post('/register', function(req, res, next) {
  console.log('Im in register')
  console.log(req.body)
  res.render('register');
  var sql1 = "INSERT INTO  userdetail(ID,Fname,Lname) VALUES('"+req.body.ID+"','"+req.body.Fname+"','"+req.body.Lname+"');";
  console.log("Eoor >>> ", sql1);
  con.query(sql1,(err,reqbody)=>{
  if(err){
    console.log(err)
  }
  console.log("1 record")
})
});

//update
router.get('/update', function(req, res, next) {
  var sql2 = `SELECT * FROM userdetail limit 1`;
  con.query(sql2,(err,result,fields)=>{
    if(err){
      console.log("error222",sql2)
    }
    console.log(result);
    res.render('update' , result[0]);
  });
})
router.post('/update', function(req, res, next) {
  console.log('Im in update')
  console.log(req.body)
  res.render('update');
  var sql2 = "UPDATE userdetail SET Fname ="+req.body.Fname+" WHERE ID =1";
  console.log("Eoor >>> ", sql2);
  con.query(sql2,(err,reqbody)=>{
  if(err){
    console.log(err)
  }
  console.log("1 record updated")
})
});

//delete
router.get('/delete', function(req, res, next) {
  var sql3 = `SELECT * FROM userdetail limit 1 `;
  con.query(sql3,(err,result,fields)=>{
    if(err){
      console.log("error222",sql3)
    }
    //console.log(result);
    res.render('delete' , result);
  });
})
router.post('/delete', function(req, res, next) {
  console.log('Im in DELETE')
  //console.log(req.body)
  var sql3 = "DELETE FROM userdetail WHERE ID ="+req.body.ID+"";
  console.log("Eoor >>> ", sql3);
  con.query(sql3,(err,reqbody)=>{
  if(err){
    console.log(err)
  }
  console.log("1 record dLETED")
})
});
 
module.exports = router;

/*doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content*/
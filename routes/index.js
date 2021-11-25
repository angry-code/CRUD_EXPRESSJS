var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const app = require('../app');
const db = require("../models/index"); // models path depend on your structure
const users = db.users;
let ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(  { title: 'Express' });

});


module.exports = router;

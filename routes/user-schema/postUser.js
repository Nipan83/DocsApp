var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');
var User = require('../../models/user');


router.post('/', function(req, res, next) {
    console.log(req.body.age);
    var len=req.body.phone.length;
    
      
    if(len!=10 && len!=0 ){ return res.render('index', {message:"Invalid Phone Number!"});}
    if((req.body.age>130 || req.body.age<0) && req.body.age){ return res.render('index', {message:"Invalid Age!"});}
    
  User.create({
    
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    age : req.body.age,
    gender : req.body.gender,
    phone : req.body.phone,
    dob : req.body.dob,
    comments : req.body.comments
    
  },
  function (err, user) {
    console.log(user);
    if(err){
    res.render('index', {message:"All fields are required!"});
  }
        

    //res.status(200).json({message: "successfully registered!" });
    User.find({}).exec(function(error, users){
        if(error){
          console.log("error")
          res.render('index', {errors: error });
        }else{                      
            //res.json({users: users});      
            res.render('result', {message:'successfully registered!', users: users });

        }
    });
    

  }); 
  
  
});




module.exports = router;
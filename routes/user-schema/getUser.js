var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var config = require('../../config');
var bcrypt = require('bcryptjs');
var User = require('../../models/user');



router.get('/', function(req, res, next) {


    User.find({}).exec(function(error, users){
        if(error){
            res.send("error");
        }else{                      
            //res.json({users: users});      
            res.render('result', { users: users });

        }
    }); 
});

module.exports = router;
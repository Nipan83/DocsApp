var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required:true

  },
  dob:{
    type: String,
    required:true

  },
  gender:{
    type:String,
    required:true
  },
  phone:{
    type: Number,
    required:true
  },
  comments:{
    type: String,
    required:true
  }

    
});

var User = module.exports = mongoose.model('user', userSchema);

//Get user
module.exports.getUser = function(callback, limit) {
    User.find(callback).limit(limit);
}

//Post user
module.exports.postUser = function(data, callback) {
    User.create(data, callback);
}


//login user
module.exports.loginUser = function(id, callback) {
    User.findOne({ "email": id }, callback);
}

//find user
module.exports.findUser = function(id, callback) {
    User.findOne({ "username": id }, callback);
}

//update user
module.exports.updateUser = function(id, callback) {
    User.update({ "_id": id }, callback);
}
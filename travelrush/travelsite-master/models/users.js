var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:String,
    email:String,
    username:String,
    contact:String,
    password:String
});

module.exports = mongoose.model('user',schema);

var User = mongoose.model('user', schema);

module.exports = User;

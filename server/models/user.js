const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message:'{value} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access:{
            type:String,
            require: true
        },
        token: {
            type:String,
            require: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then(() => {
      return token;
  });
};

var User = mongoose.model('User', UserSchema);



//var newUser = new User({
//    email: 'olgac@live.com'
//});
//
//newUser.save().then((doc) => {
//    console.log(JSON.stringify(doc, undefined, 2));
//}, (e) => {
//    console.log(e);
//});

module.exports = {User};
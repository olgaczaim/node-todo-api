const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
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
var mongoose = require('mongoose');

//user
//email - require - trim -type string - set min length 1

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
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
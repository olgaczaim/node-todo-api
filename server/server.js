const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

//first create a modal
//var Todo = mongoose.model('Todo', {
//   text: {
//       type: String,
//       required: true,
//       minlength: 1,
//       trim: true
//   } ,
//    completed: {
//       type: Boolean,
//        default: false
//    },
//    completedAt: {
//       type: Date,
//        default: null
//    }
//});

//var newTodo = new Todo({
//    text: 'Cook dinner'
//});

//var newTodo = new Todo({
//    text: '  Edit this video  '
//});
//
//
//newTodo.save().then((doc) => {
//    console.log(JSON.stringify(doc, undefined, 2))
//    //console.log('saved todo', doc)
//}, (e) => {
//    console.log(e);
//});

//mongoose.connection.close();


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

var newUser = new User({
    email: 'olgac@live.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
   console.log(e);
});
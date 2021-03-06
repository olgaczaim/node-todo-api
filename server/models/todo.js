var mongoose = require('mongoose');


//first create a modal
var Todo = mongoose.model('Todo', {
   text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
   } ,
    completed: {
       type: Boolean,
        default: false
    },
    completedAt: {
       type: Date,
        default: null
    },
    _creator: {
       type: mongoose.Schema.Types.ObjectId,
       required: true
    }

});

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

module.exports = {Todo};
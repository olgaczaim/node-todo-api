const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


//removes everything
//Todo.deleteMany({}).then((result) => {
//    console.log(result);
//});

//Todo.findByIdAndDelete('5c5ff06d9ee6f05f0b7925c7').then((todo) => {
//    console.log(todo);
//});

Todo.findOneAndDelete({_id: '5c5ff06d9ee6f05f0b7925c7'}).then((todo) => {
    console.log(todo);
});

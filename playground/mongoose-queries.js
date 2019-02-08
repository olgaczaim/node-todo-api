const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c5d71312d8fea04f02cbdd3';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
};

Todo.find({
    _id: id
}).then((todos) => {
    console.log('todos' , todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('todo' , todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('ID not found');
    }
    //console.log('todo by id' , todo);
    console.log(JSON.stringify(todo, undefined, 2))
}).catch((e) => console.log(e));
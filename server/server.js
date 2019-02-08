const express = require('express');
var bodyParser = require('body-parser');

var{mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req ,res) => {
    //console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//httpstatuses.com

app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = {app};
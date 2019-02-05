//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unabla to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    //all
    //db.collection('Todos').find().toArray().then((docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch todos', err)
    //});

    //db.collection('Todos').find({complated: false}).toArray().then((docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch todos', err)
    //});

    //db.collection('Todos').find({
    //    _id: new ObjectID('5c594a2adaf18e118871d04f')
    //}).toArray().then((docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch todos', err)
    //});

    //db.collection('Todos').find().count().then((count) => {
    //    console.log(`Todos count: ${count}`);
    //}, (err) => {
    //    console.log('Unable to fetch todos', err)
    //});

    db.collection('Users').find({name: 'Olgac'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });


    client.close();
});
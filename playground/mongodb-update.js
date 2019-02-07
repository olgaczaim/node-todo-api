//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unabla to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

   //db.collection('Todos').findOneAndUpdate({
   //    _id: new ObjectID('5c5949918fc06d17641fee8d')
   //}, {
   //    $set:{
   //        complated: false
   //    }
   //}, {
   //    returnOriginal: false
   //}).then((result) => {
   //    console.log(result);
   //});

    db.collection('Users').findOneAndReplace({
        _id: new ObjectID('5c59670c80dc80160c7a3433')
    }, {
        $set:{
            name: 'Samuel'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result)
    });

    client.close();
});

//delete one ile findanddelete arasındaki fark araştır
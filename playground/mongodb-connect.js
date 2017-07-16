const MongoClient = require('mongodb').MongoClient;

//var user = {name: 'dima', age: 25};
//var{name} = user;
//console.log(name);// it will give us a 'dima'; it calls object destructorin

//const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); // using 'new ' we've created a new instance of ObjectID; 
//console.log(obj); // we will get a new unique id


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
   return  console.log('You are fucked');
   } else {
    console.log('You are fukc a girl in the ass');
   }
    
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    
//    db.collection('Todos').insertOne({
//       text:'Something to do',
//        completed: false
//    }, (err, result) => {
//        if(err) {
//            return console.log('Unable to inser todo', err);
//        } else {
//            console.log(JSON.stringify(result.ops, undefined, 2));
//        }
//    
//    });
    
//    db.collection('Todos').insertOne({
//       name:'Dima',
//        age: 31,
//        location: 'Kiev'
//    }, (err, result) => {
//        if(err) {
//            return console.log('Unable to inser todo', err);
//        } else {
//            console.log(result.ops[0]._id.getTimestamp());
//        }
//    
//    });
//    
//    db.close();
});
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
   return  console.log('You are fucked');
   } else {
    console.log('You are fukc a girl in the ass');
   }
    //deleteMany
//    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//       console.log(result); 
//    });
    //deleteOne
//    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//       console.log(result); 
//    });
    //findOneAndDelete
   db.collection('Todos').findOneAndDelete({_id: new ObjectID('596bb3125967771708eff527')}).then((result) => {
       console.log(result); 
    });
   
//    db.close();
});


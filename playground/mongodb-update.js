const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
   return  console.log('You are fucked');
   } else {
    console.log('You are fukc a girl in the ass');
   }
    
    db.collection('Todos').update({name: 'Dim'},{
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
       console.log(result); 
    });
   
    
//    db.close();
});


//db.items.update( { item_id: "I001" },{ $inc: { qty: 10 }});

db.collection('Todos').findOneAndUpdate({age: 31},{
        $set: {
            name: 'Roma'
        }
    },{
        returnOriginal: false
    }).then((result) => {
       console.log(result); 
    });
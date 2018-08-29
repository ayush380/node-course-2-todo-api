// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return  console.log("unable to connect");
  }
  console.log("connected to mongodb server");
// db.collection('Todos').deleteOne({text:'blah blah blah'}).then((request)=>{
//   console.log(request);
// })
  db.collection('Users').findOneAndUpdate({
    '_id':new ObjectID
    ("5b576e7ef517678da0af8c42")
    },{
      $set:{
        name:"Ayush Srivastava"
      },
      $inc:{
        age:-1
      }
    },{
      returnOriginal:false
    }).then((result)=>{
    console.log(result);
  })


  //i
// db.close();
});

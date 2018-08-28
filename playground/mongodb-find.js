// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return  console.log("unable to connect");
  }
  console.log("connected to mongodb server");
  // db.collection('Todos').find({
  //   _id: new ObjectID('5aea1c7a386f403a1018f5e9')})
  //   .toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to connect', err);
  // });
  // db.collection('Todos').find()
  //   .count().then((count)=>{
  //   console.log(`Todos: ${count}`);
  //   // console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to connect', err);
  // });
db.collection('Users').find({name:'sdfg'}).count().then((xyz)=>{
  console.log(xyz);
})
  //i
// db.close();
});

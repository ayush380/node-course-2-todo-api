// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

// var obj =new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return  console.log("unable to connect");
  }
  console.log("connected to mongodb server");

  // db.collection('Todos').insertOne({
  //   text:"something to do",
  //   completed:false
  // },(err,res)=>{
  //   if(err){
  //     return console.log("unable to insert",err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // })
  // db.collection('Users').insertOne({
  //   name:"Ayush Srivastava",
  //   age:21,
  //   location:"Noida"
  // },(err,res)=>{
  //   if(err){
  //     return console.log("unable to insert into Users");
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // })
  // db.close();
});

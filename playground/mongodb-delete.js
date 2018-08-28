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
db.collection('Users').deleteMany({name:'Ayush Srivastava'}).then((response)=>{
  console.log("FIRST QUERY\n\n");
  console.log(JSON.stringify(response,undefined,2));
  console.log("\n\n\n");
})
db.collection('Users').deleteOne({id:'123'}).then((response)=>{
  console.log("SECOND QUERY\n\n");
  console.log(JSON.stringify(response,undefined,2));
  console.log("\n\n\n");
})


  //i
// db.close();
});

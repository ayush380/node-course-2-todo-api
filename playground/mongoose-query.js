const {ObjectID} =require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo.js');

var id="5b8aca7fff9a7e3680e44cca11"

if(!ObjectID.isValid(id)){
  console.log('Invalid ID');
  return
}
Todo.find({
  _id:id
}).then((todos)=>{
  console.log(todos);
},(e)=>{
  console.log('error');
});

Todo.findOne({
  _id:id
}).then((todos)=>{
  console.log(todos);
},(e)=>{
  console.log('error');
})

Todo.findById(id).then((todos)=>{
  if(!todos){
    console.log('id not found');
  }
  console.log(todos);
},(e)=>{
  console.log('error',e);
}).catch((e)=>console.log(e));

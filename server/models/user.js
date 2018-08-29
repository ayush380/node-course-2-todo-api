const mongoose= require('mongoose');

var Users=mongoose.model('Users',{
  email:{
    type:String,
    requried:true,
    minlength:4,
    trim:true
  }
})
module.exports={Users};

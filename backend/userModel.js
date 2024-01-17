const mongoose=require('mongoose');

const usrschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
},{
    timestamps:true,
});

module.exports=mongoose.model('user',usrschema);
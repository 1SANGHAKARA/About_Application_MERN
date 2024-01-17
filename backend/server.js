const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const mongoose=require('mongoose');
const router=require('./userroutes');
mongoose
.connect("mongodb://127.0.0.1:27017/merndb")
.then(()=>{
    console.log("connected ")
})
.catch((error)=>{
    console.log("error")
})
app.use(express.json());
app.use(router);

const port=5000;





app.listen(port,()=>{
    console.log(`your server is running on ${port}`);
})
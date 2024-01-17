const router=require('express').Router();

// const user=require('./userModel');
const mongoose=require('mongoose');
const user=require('./userModel');

router.post('/', async (req,res)=>{

    console.log(req.body);
    // console.log(req.body.name)
    // console.log(req.body.email)
    // console.log(req.body.age)
  const {name,email,age}=req.body;

    try 
    {
    var userdata= await user.create({
            name:name,
            email:email,
            age:age,
        });
        res.status(201).json(userdata);
        
    } catch (error) {
        console.log(error);
        res.status(401).send("error found");
        
    }
})

router.get('/', async (req,res)=>{
    try {
        const show= await user.find();
        res.status(200).json(show);
        
    } catch (error) {
        console.log("error found ")
        
    }
    });

    // find by id

router.get("/:id",async (req,res)=>{
    const {id}=req.params;
    try {
        const single=await user.findById({_id:id});
        res.status(200).json(single);
    } catch (error) {
        console.log('error');
    }
})

// delete

router.delete('/:id',async (req,res)=>{
    const {id}=req.params;
    try {
        const deluser=await user.findByIdAndDelete({_id:id});
        res.status(200).json(deluser);
    } catch (error) {
        console.log("error");
        
    }
})

// update 

router.patch('/:id',async (req,res)=>{
    const {id}=req.params;
    console.log("got body",req.body);
    console.log("get id" , id);
    const {name,email,age}=req.body;
    try { 
        const updateduser= await user.findByIdAndUpdate(id,req.body,{
            new:true,
        })
        res.status(200).json(updateduser);
        
    } catch (error) {
        console.log('foud');
    }
})

module.exports=router;
// import { useState } from "react"
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const {id}=useParams();
  console.log(id)
  const Navigate=useNavigate();

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [age,setage]=useState(0)

const singleuser= async (id)=>{

  const response= await fetch(`http://localhost:5000/${id}`);
  const result= await response.json();
  console.log(result);
  setname(result.name)
  setemail(result.email)
  setage(result.age)

}
const handleupdate= async (e)=>{
  e.preventDefault();
  const updateduser={name,email,age};
  // console.log(adduser);

  const response= await fetch(`http://localhost:5000/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(updateduser),
  })

  const result = await response.json();
  console.log(result);
  if(!response.ok)
  {
    console.log(result.console.error);
  }
  else{
    console.log(result);
    Navigate('/read')
  }

}

useEffect(() => {
  singleuser(id);
  
}, []);

  return (
    <div>
       <div className='container my-2'>
      <h2 className='text-center'>Edit the data</h2>
      <form onSubmit={handleupdate} >
  
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control" value={age} onChange={(e)=>setage(e.target.value)}  />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            

    </div>



    </div>
  )
}

export default Update
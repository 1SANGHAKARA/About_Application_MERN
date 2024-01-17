import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [age,setage]=useState()
  console.log(name ,email,age);
  const Navigate=useNavigate();

  const handler= async (e)=>{
    e.preventDefault();
    const adduser={name,email,age};
    console.log(adduser);

    const response= await fetch("http://localhost:5000",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(adduser),
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
  return (
    <div className='container my-2'>
      <h2 className='text-center'>Enter the data</h2>
      <form onSubmit={handler}>
  
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)} placeholder='enter your name ' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter your email ' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control" value={age} onChange={(e)=>setage(e.target.value)}  placeholder='enter your age ' />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            

    </div>
  )
}
export default Create
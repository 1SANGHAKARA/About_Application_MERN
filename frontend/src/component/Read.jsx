import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Read.css'

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function getData() {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();
   
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      console.log(response.ok);
      setData(result);
      setError("");
    }
  }
async function deleted(id){

 const response = await fetch(`http://localhost:5000/${id}`,{
  method:'DELETE'
 })
 const result= await response.json();
 if(response.ok)
{
  setTimeout(() => {
    getData();
  }, 1000);
}
else{
  console.log('error alaa')
}
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger"> {error} </div>}
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-subtitle mb-2 text-muted">Name: {ele.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Email : {ele.email}</h6>
                <p class="card-text">Age: {ele.age}</p>
                <div className="parent">
                <Link className="link bg-sky-200k" to={`/${ele._id}`} >edit </Link>


<a  href='#' class="card-link" className="link" onClick={() => deleted(ele._id)}>
 Delete
</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
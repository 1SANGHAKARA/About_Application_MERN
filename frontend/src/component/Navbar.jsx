import React from 'react'

export const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">MERN </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Create post</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">all post</a>
          </li>
       
        </ul>
      </div>
    </div>
  </nav>
  )
}



import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
    return (
        <div>
            <>
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid">
         <NavLink className="navbar-brand" to="/">Ducat</NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   <li className="nav-item" id="all"><NavLink className="nav-link" to="/" >All</NavLink></li>
 <li className="nav-item" id="business"><NavLink className="nav-link" to="/business">BUSSINESS</NavLink></li>
  <li className="nav-item" id="health"><NavLink className="nav-link" to="/health">HEALTH</NavLink></li>
  <li className="nav-item" id="sports"><NavLink className="nav-link" to="/sports" >SPORTS</NavLink></li>
 <li className="nav-item" id="technology"><NavLink className="nav-link" to="/technology">TECHNOLOGY</NavLink></li>
    <li className="nav-item" id="entertainment"><NavLink className="nav-link" to="/entertainment">ENTERTAINMENT</NavLink></li>
 <li className="nav-item" id="science"><NavLink className="nav-link" to="/science">SCIENCE</NavLink></li>
   </ul>
    <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
          </div>
                    </div>
                </nav>
            </>
        </div>
    )
}
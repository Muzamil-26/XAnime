
import React,{useState} from "react";
import image from "../assets/logo.png";
import "./navbar.css";
import secons from '../assets/icons8-menu-50.png'
// import App from '../App';
// import props from 'react';
import { NavLink } from "react-router-dom";
import { accordionActionsClasses } from "@mui/material";

function Navbar({searchanime,setsearchanime,getanimesearch,getsearch}) {

    const actionn=(e)=>{
        console.log(e);
    
        getsearch;
      }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light box-shawdow">
  <div className="container-fluid">
  <NavLink className="navbar-brand" to="/"><img src={image} alt="Logo" className="image"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src={secons} alt="" className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/genre" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genres
          </NavLink>
          <ul className="dropdown-menu droppp" aria-labelledby="navbarDropdown" onClick={(e)=>{{actionn(e.target.innerHTML.toLowerCase())}}}>
            <li><NavLink className="dropdown-item" to="/genre/action">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/genre/adventure">Adventure</NavLink></li>
            <li><NavLink className="dropdown-item" to="/genre/comedy">Comedy</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact" aria-disabled="true">Contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex" onSubmit={getanimesearch}>
        <input className="form-control me-2" type="search" placeholder="Search for an Anime..." aria-label="Search" value={searchanime} onChange={(e)=>{setsearchanime(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;

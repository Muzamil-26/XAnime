import React from 'react'
import './footer.css'
import image from '../assets/logo.png'

function Footer() {
  return (  
    <footer className='footer'>
      <div className='left'>
       <a href="http://localhost:5173"> <img src={image} alt="Logo" className='image'/></a>
      </div>
      <div className="right">
       Copyright © Anime.to .All Right Reserved.
      </div>
    </footer>

  );
}

export default Footer

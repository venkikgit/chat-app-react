import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{width:'100%',height:'12vh',background:'#00a884'}}>
        <div className="title" style={{padding:'18px 40px'}}>
              <Link style={{textDecoration:'none',color:'#fff'}} to='/'><h4>Buzz Chat</h4></Link> 
        </div>
    </div>
  )
}

export default NavBar;
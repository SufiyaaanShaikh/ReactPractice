import React, { useState } from 'react';
import './Header.css';
import logo from "./images/Explore.svg"

function Header({ headerInfo, children }) {
  let [menuStatus, setMenuStatus] = useState(false);



  return (
    <div className='header'>
      {/* <div className="title">{headerInfo.title}</div> */}
      <div className="title"><img src={logo} alt="logo" /></div>
      {children}
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <a href='#' className="a">{headerInfo.menu1}</a>
        <a href='#' className="a">{headerInfo.menu2}</a>
        <a href='#' className="a">{headerInfo.menu3}</a>
        <a href='#' className="a">{headerInfo.menu4}</a>
        <a href='#' className="a">{headerInfo.menu5}</a>
        <a href='#' className="a">{headerInfo.menu6}</a>
      </div>
      <button onClick={() => setMenuStatus(!menuStatus)} className='callDost'>
        {
          menuStatus ?
            <span>&times;</span>
            :
            <span>&#9776;</span>
        }
      </button>
    </div>
  )
}

export default Header
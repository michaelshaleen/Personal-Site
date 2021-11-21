import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Nav.css';
import Massage from '../Massage/Massage';
import Coach from '../Coach/Coach';
import Software from '../Software/Software';
import Home from '../Home/Home';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if(window.innerWidth <= 960 ){
  //     setButton(false);
  //   }else{
  //     setButton(true);
  //   }
  // };


  // useEffect(() => {
  //   showButton()

  // }, [])
  // ;

  // window.addEventListener('resize', showButton);

  return(
    <>
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
        {/* <i class='fa fa-space-shuttle' ></i> */}
          <p className="navName" >
            Michael by Shaleen  
          </p>
          {/* <i class='fa fa-space-shuttle' ></i> */}
        </Link>
        <span className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </span>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className="nav-item">
            <Link to="/coach" className="nav-links" onClick={closeMobileMenu}>
              Coach
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/massage" className="nav-links" onClick={closeMobileMenu}>
              Massage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/software" className="nav-links" onClick={closeMobileMenu}>
              Software
            </Link>
          <li className="nav-item">
            <Link to="/hire" className="nav-links" onClick={closeMobileMenu}>
              Hire Me
            </Link>
          </li>
          </li>
        </ul>
        {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
      </div>
    </nav>
    </>
  )
}

export default Nav;
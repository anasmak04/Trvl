import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./header.css";
import Section from "../vedioSection/SectionVedio"
function Header () {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
        return (
            <div>
        <Router>
          <header>
                <nav className='navbar'>
                    <div className="logo">
                        <h1>TRVL </h1>
                    </div>    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'><Link to="/" onClick={handleClick}  className='nav-link ' >home</Link></li>
                        <li className='nav-item'><Link to="/" onClick={handleClick}  className='nav-link' >services</Link></li>
                        <li className='nav-item'><Link to="/" onClick={handleClick}  className='nav-link' href="">products</Link></li>
                        <li className='nav-item'><Link to="/" onClick={handleClick}  className='nav-link  btn' href="">sign up</Link></li>
                    </ul>

                    <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

                </nav>  

             
            </header> 

            <Routes>
                    <Route path='/' element={< home/>}></Route>
                    <Route path='/services' element={< services/>}></Route>
                    <Route path='/products' element={< products/>}></Route>
                    <Route path='/signup' element={< signup/>}></Route>
                </Routes> 
          </Router>
          <Section />
            </div>
        );
    
}

export default Header;
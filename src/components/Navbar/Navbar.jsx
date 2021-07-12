import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" onClick={closeMobileMenu} className="navbar-logo" >
                        STARWARS <i className="fab fa-typo3" ></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-bars" : "fas fa-times"}></i>
                    </div>
                    <ul className={click ? "nav-menu" : "nav-menu active"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" >
                                People
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="products" className="nav-links" >
                                Starships
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="products" className="nav-links" >
                                Starships
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="sign-up" className="nav-links-mobile" >
                                Planets
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

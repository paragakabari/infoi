import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/New folder/logo.png';


function Header() {
    const [isNavOpen, setNavOpen] = useState(false);

    // Function to toggle the navbar
    const toggleNavbar = () => {
        setNavOpen(prevState => !prevState);
    };
    return (
        <div>

            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-md-3">
                            <div className="social-links">
                                <ul>
                                    <li><a><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a><i className="fab fa-twitter"></i></a></li>
                                    <li><a><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a><i className="fab fa-instagram"></i></a></li>
                                    <li><a><i className="fab fa-youtube"></i></a></li>
                                    <li><a><i className="fab fa-vimeo-v"></i></a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="brand-name text-center">
                                <Link to={"/"}><img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-md-4"></div> */}
                    </div>
                </div>
            </div>
            <div className="kavya-navbar" id="sticky-top">
                <div className="container">
                    <nav className="nav-menu-wrapper">
                        <span className="navbar-toggle" id="navbar-toggle" onClick={toggleNavbar}>
                            <i className="fas fa-bars"></i>
                        </span>
                        <div className="sticky-logo">
                            <a >
                                {/* <p>Kavya</p> */}
                            </a>
                        </div>
                        <ul className={`nav-menu ml-auto mr-auto ${isNavOpen ? 'open' : ''}`} id="nav-menu-toggle">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Categories <span className="arrow-icon">
                                    <span className="left-bar"></span>
                                    <span className="right-bar"></span>
                                </span>
                                </a>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item"><Link to={"/media"}>Finance</Link></li>
                                    <li className="drop-menu-item"><Link to={"/ai"}>Gaming</Link></li>
                                    <li className="drop-menu-item"><Link to={"/travel"}>Animation</Link></li>
                                    <li className="drop-menu-item"><Link to={"/Car"}>HealthCare</Link></li>
                                    <li className="drop-menu-item"><Link to={"/hybridcards"}>AutoMobile</Link></li>
                                    <li className="drop-menu-item"><Link to={"/beverages"}>E-Learning</Link></li>
                                    <li className="drop-menu-item"><Link to={"/coldplay"}>Music</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link to={"/terms-condition"} className="nav-link">Terms & Condition</Link></li>
                            <li className="nav-item"><Link to={"/privacy-policy"} className="nav-link">Privacy Policy</Link></li>
                            <li className="nav-item"><Link to={"/about"} className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to={"/contect"} className="nav-link">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
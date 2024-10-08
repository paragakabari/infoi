import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/New folder/logo.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {  // Change this value based on when you want to show the button
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // This adds a smooth scrolling effect
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="footer-copyright">
                            <p>
                                &copy;2024 Info i Hub. All rights reserved. Theme designed by <a>Info i Hub</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="stop" className={`scroll-to-top ${isVisible ? 'visible' : 'p-0'}`}>
                {isVisible && (
                    <span onClick={scrollToTop}>
                        <i className="fas fa-arrow-up"></i>
                    </span>
                )}
            </div>
        </>
    );
};

export default Footer;

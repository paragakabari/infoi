import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

export const HOC = (Component) => {
    function NewCom(props) {
        const [loading, setLoading] = useState(true); // State to manage loading

        useEffect(() => {
            // Set loading to false after 2 seconds
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000); 

            return () => clearTimeout(timer); // Clean up the timer on unmount
        }, []);

        if (loading) {
            return <Loader />; // Show Loader while loading
        }

        return (
            <>
                <Header />
                <Component {...props} />
                <Footer />
            </>
        );
    }
    return NewCom;
};

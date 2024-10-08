import React from 'react'
// import loading from '../../assets/images/New folder/loading.png';


function Loader() {
    return (
        <>
            {/* -- Preloader -- */}
            <div className="preloader-wrapper">
                <div className="preloader">
                    <div className="preloader-circle" id="status">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* -- Preloader end -- */}
        </>
    )
}

export default Loader
import React from "react";
import { NavLink } from "react-router-dom";
import imag from "../src/images/homeImage.svg";
const Home =() =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center flex-column">
                
            <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h2 className="homeIntro">Enhance your career with <strong className="brand-name">Confidentt</strong> in the Pharmaceutical World</h2>
                        <h3 className="my-3">
                            The organisation that has been creating the future of thousands of Youngsters!
                        </h3>
                        <div className="mt-3">
                            <NavLink to="/services" className="btn-get-started">Our Services</NavLink>
                        
        
                            <NavLink to="/recruiters" className="btn-get-started recru-btn">Recruiters</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-5 order-lg-2 header-img">
                        <img src={imag} className="img-fluid animated" alt="home image"/>
                        
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                
            </section>
        </>
    );
};

export default Home;
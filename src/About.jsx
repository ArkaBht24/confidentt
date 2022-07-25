import React from "react";
import { NavLink } from "react-router-dom";
import imag from "../src/images/aboutImage.svg";
const About =() =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center flex-column">
            <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <br/ >
                        <h2 className="who-are-we"><strong>Who are we?</strong></h2>
                        <h5 className="my-3" id="aboutbody">
                            It was December 2000, <strong className="brand-name">Confidentt</strong> had voyged its way.
                            Since then, <strong className="brand-name">success</strong> is the term, which is concomitant
                            with the name of this organisation.
                            
                            We are now a renowned player in the EASTERN INDIA for providing man power in the <strong className="brand-name">Pharmaceutical Sales.</strong><br/>
                            <br/>
                            Candidates from <strong className="brand-name">Confidentt</strong> are now working in top 
                            <strong className="brand-name"> Indian</strong> and <strong className="brand-name">Multi-national 
                            Pharmaceutical Companies </strong>throught Eastern Zone. <br/>
                            <br/> Our <strong className="training">Medical Representative Training Department </strong> has been recognised as one of the best institutions in Eastern Zone and 
                            it is managed by professionally successful trainers. But for the need of hours we have started providing candidates, 
                            specially B Pharm and M Pharm candidates for Pharmaceutical Manufacturing Plants in West Bengal and other states as well.
                        </h5>
                        <div className="mt-3">
                            <NavLink to="/contact" className="btn-get-started">Contact Us </NavLink>
                            <NavLink to="/recruiters" className="btn-get-started recru-btn">Recruiters</NavLink>

                            <br/>
                        </div>
                    </div>
                    <div className="col-lg-6 order-3 order-lg-2 header-img">
                        <img src={imag} className="img-fluid animated" alt="about image"/>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default About;
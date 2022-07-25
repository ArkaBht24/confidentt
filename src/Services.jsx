import React from "react";
import { NavLink } from "react-router-dom";
import imag from "../src/images/serviceImage.svg";
const Services =() =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center flex-column">
            <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h2><strong>What we do?</strong></h2>
                        <h5 className="my-3" id="servicebody">
                            <ul>
                                <li> Provide Pharma Sales Training and Grooming to the fresh graduates. <strong>All Graduates of below the age of 27
                                    is eligible. Course duration - 2 months.</strong>
                                </li>
                                <br/>
                                <li> Provide Job Assistance (Pharma Sales) to the trained candidates and experienced candidates.</li>
                                <br/>
                                <li> Provide Job Assistance (Pharma Sales) to the higher levels like <strong>Area Manager, Regional Manager
                                    </strong> and <strong>Zonal Manager.</strong></li>
                                    <br/>
                                <li> Provide Scientific Product Training to the different companies.</li>
                                <br/>
                                <li> Provide candidates to PMT Department.</li>
                                <br/>
                                <li> Provide Jobs in Pharma Manufacturing Plants in the department of QA, QC, Production Packaging,
                                    Formulation and Development, Drug regulatory affairs, etc.
                                </li>
                                <br/>
                                <li> Organise <strong>internship</strong> for the students of B.Pharm colleges</li>
                                <br/>
                            </ul>
                        </h5>
                        <div className="mt-3">
                            <a href="https://forms.gle/sESRc3mDBPPUfXue8" target="_blank" className="apply">Apply now </a>
                            <NavLink to="/about" className="abt"> About Us </NavLink>
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

export default Services;
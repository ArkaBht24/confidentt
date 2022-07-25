import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Recruiters from "./Recruiters";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
const App =() =>{
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/home" element = {<Home/>} />
                <Route exact path="/about" element = {<About/>} />
                <Route exact path="/services" element = {<Services/>} />
                <Route exact path="/Recruiters" element = {<Recruiters/>} />
                <Route exact path="/contact" element = {<Contact/>} />
                <Route exact path="/gallery" element = {<Gallery/>} />
                <Route exact path="/" element = {<Navigate to ="/home" />} />
            </Routes>
            <br />
            <br />
            <br />
            <Footer />
            
        </>
    );
};

export default App;
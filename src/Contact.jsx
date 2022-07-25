import React from "react";
import { NavLink } from "react-router-dom";
import imag from "../src/images/contactImage.svg";
const Contact =() =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center flex-column">
            <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1 className="reach"><strong>Reach Out To Us</strong></h1>
                        <br/>
                        <div className="row">
                        <div className="col-md-1 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
</svg>
                        </div>
                        <div className="col-md-4 col-md">
                            <h3 >Call us at</h3>
                        </div>
                        <div className="col-md-7 col-md und">
                            <h3 id="und" className="highlight">+91 9830258119</h3>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-5 col-md">
                            
                        </div>
                        <div className="col-md-5 col-md und">
                            <h3  id="und" className="highlight">+91 8777867760</h3>
                        </div>
                        
                        </div>
                        <br/>
                        <div className="row">
                        <div className="col-md-1 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
                        </div>
                        <div className="col-md-4 col-md">
                        <a href= "mailto:confidentt05@gmail.com" className="fblink highlight" target="blank"> <h3 h3 className="highlight fbtext">Click here to write us an email</h3> </a>
                        </div>
                        <div className="col-md-5 col-md und">
                        <a href= "mailto:confidentt05@gmail.com" className="fblink highlight" target="blank"><h3 id="und" className="highlight fbtext">confidentt05@gmail.com</h3></a>
                        </div>
                        </div>
                        <br/>



                        <div className="row">
                        <div className="col-md-1 col-md">
                       <a className="fblink" href="http://wa.me/919830258119" target ="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg></a>
                        </div>
                        <div className="col-md-4 col-md">
                        <a href="http://wa.me/919830258119" className="fblink" target ="blank"><h3 className="highlight fbtext">Ping us on WhatsApp by clicking here</h3></a>
                        </div>
                        <div className="col-md-5 col-md und">
                        <a href="http://wa.me/919830258119" className="fblink" target ="blank"> <h3 id="und" className="highlight fbtext">+91 9830258119</h3>
                            </a>
                        </div>
                        </div>
                        <br/>


                        <div className="row">
                        <div className="col-md-1 col-md">
                        <a href="https://www.facebook.com/confidenttpharma/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></a>


                        </div>
                        <div className="col-md-10 col-md">
                            <a className="fblink" target="_blank" href="https://www.facebook.com/confidenttpharma/"><h3 className="fbtext">Click here to connect with us on Facebook</h3></a>
                        </div>
                        
                        </div>
                        <div className="mt-3">
                            <NavLink to="/services" className="btn-get-started">Services</NavLink>
                            <NavLink to="/home" className="btn-get-started recru-btn">Home</NavLink>
                        </div>
                    </div>
                    
                    

                    
                    <div className="col-lg-6 order-5 order-lg-2 header-img">
                        <img src={imag} className="img-fluid animated" alt="contacct image"/>
                    </div>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
            </section>
        </>
    );
};

export default Contact;
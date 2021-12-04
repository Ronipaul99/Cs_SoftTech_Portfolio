import React from 'react';
//import '../css/main.css'
function contactus(props) {
    return (
        <div>
            <section className="banner inner-banner contact-banner">
                <div className="container">
                    <div className="banner-content">
                    <h2>Request <br/>
                        a Quote</h2>
                        <div className="banner-cta-block">
                        <h2>Tell us about you and your 
                            project to start the conversation!</h2>
                    </div>
                    </div>
                    <div className="contact-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="group">      
                                    <input type="text" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Name*</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="group">      
                                    <input type="text" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Company*</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="group">      
                                    <input type="text" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Email*</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="group">      
                                    <input type="text" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Mobile*</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="group">      
                                    <textarea ></textarea>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Message*</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button className="button-primary">Schedule a Time</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-address">
                <div class="address-container">
                    <div class="">
                        <h2>Find us</h2>
                        <div class="address-block-container">
                            <div class="block-item">
                                <a href="">+91 146546589564</a>
                                <a href="">contact@creationsoul.com</a>
                                <address>address<br/>
                                    xxxxx xxxxxxxxxxxxx</address>
                            </div>
                            <div class="block-item">
                                <p>Sign up for our Newsletter</p>
                                <form action="">
                                <div class="input-group">
                                    <input type="email" placeholder="Enter email address"/>
                                    <button class="button"><i class="bi bi-arrow-right"></i></button>
                                </div>
                                </form>
                            </div>
                            <div class="block-item">
                                <p>Get in Touch</p>
                                <div class="social">
                                    <a href="#"><span class="icon-facebook"></span></a>
                                    <a href="#"><span class="icon-twitter"></span></a>
                                    <a href="#"><span class="icon-linkedin"></span></a>
                                    <a href="#"><span class="icon-you-tube"></span></a>
                                    <a href="#"><span class="icon-instagram"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default contactus;
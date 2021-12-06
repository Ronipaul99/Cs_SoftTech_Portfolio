import React from 'react';
import { Link } from 'react-router-dom';
import Client from './Home/Client';
import Industryexperiance from './Home/Industryexperiance';
import Ourservices from './Home/Ourservices';

function aboutus(props) {
    return (
        <div>
            <section className="banner inner-banner">
                <div className="container">
                    <div className="banner-content">
                    <h2>About Us</h2>
                        <div className="banner-cta-block">
                        <h2>Are you interested to learn more about our development services?</h2>
                            <a href="#" className="button-primary">Book an Appoinment</a> 
                    </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="app-breadcrumb">
                <Link to="/"><i className="bi bi-arrow-left"></i></Link>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Abous Us</li>
                    </ol>
                </nav>
                </div>
            </section>

            <section className="service-details">
                <div  iv className="container">
                <h3 className="title">Choose from leading shipping and payment providers to find your best fit solutions, without penalties</h3>
                <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                    Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <Ourservices/>
            <Client/>
            <Industryexperiance/>
        </div>
    );
}

export default aboutus;
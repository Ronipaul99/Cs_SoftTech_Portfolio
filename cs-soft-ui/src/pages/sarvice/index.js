import React from 'react';
import { Link } from 'react-router-dom';
import Requestaquote from '../Home/Requestaquote';
import Whychoose from '../Home/Whychoose';
import Banner from './banner';
import CaseStudies from './CaseStudies';

function Service(props) {
    return (
        <div>
            <Banner/>
            <section className="section client">
                <div className="container">
                    <div className="sort-info">
                        <h4>25mSed a dolor id est porttitor euismod. Proin elementum ipsum eget mi blandit euismod. Fusce facilisis tortor leo, nec bibendum lectus maximus eut.</h4>
                    </div>
                </div>
            </section>
            <section className="section service-block">
                <div className="service-block-right">
                    <div className="title-block">
                        <h1>Our <br/>
                            Services</h1>
                            <Link to="inner-services" className="button-primary">Schedule Time to Talk</Link>
                    </div>
                    <div className="services-list">
                        
                        <ol>
                            <li><Link to="inner-services">Web design & Development <i className="bi bi-arrow-right"></i></Link></li>
                            <li><Link to="inner-services">E-commerce Application <i className="bi bi-arrow-right"></i></Link></li>
                            <li><Link to="inner-services">Mobile App Developemnt <i className="bi bi-arrow-right"></i></Link></li>
                            <li><Link to="inner-services">Testing & QA <i className="bi bi-arrow-right"></i></Link></li>
                            <li><Link to="inner-services">Design & Branding <i className="bi bi-arrow-right"></i></Link></li>
                            <li><Link to="inner-services">Data Services <i className="bi bi-arrow-right"></i></Link></li>
                        </ol>
                    </div>
                </div>
            </section>
            <CaseStudies/>
            {/* <Whychoose/> */}
            <Requestaquote/>
        </div>
    );
}

export default Service;
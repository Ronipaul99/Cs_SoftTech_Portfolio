import React from 'react';
import Requestaquote from './Home/Requestaquote';

function caseStudies(props) {
    return (
        <div>
            <section className="banner inner-banner">
                <div className="container">
                    <div className="banner-content">
                    <h2>E-commerce 
                        Application</h2>
                        <div className="banner-cta-block">
                        <h2>Are you interested to learn more about our development services?</h2>
                            <a href="#" className="button-primary">Book an Appoinment</a> 
                    </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="app-breadcrumb">
                <a href="#"><i className="bi bi-arrow-left"></i></a>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="case-study.html">Case study</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Demo duck</li>
                    </ol>
                </nav>
                </div>
            </section>

            <section className="service-details section">
                <div  iv className="container">
                    <div className="row align-items-center">
                    <div className="col-md-3 p-0">
                        <div className="demo-logo">
                        <img src="./demo-logo.png" alt="demo-logo.png"/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8 p-0">
                        <h3 className="title pt-0">Cras a quam porttitor, laoreet ipsum tempas a quam porttitor, laoreetpor</h3>
                        <p>Curabitur fermentum, purus eu pharetra aliquet, eros justo dignissim tortor, nec tincidunt risus velit consequat nisi. Nulla laoreet turpis vel diam egestas, quis venenatis nisl euismod. Mauris enim purus, molestie gravida
                        </p>
                    </div>
                    </div>
                </div>
            </section>
 
            <section className="section case-studies">
                <div className="container">
                    <div className="section">
                        <div className="row align-items-center case-studies-block">
                        <div className="col-md-5">
                            <div className="case-studies-block-header">
                                <h3>Objectives</h3>
                                <ul className="circle-list-item">
                                <li>Morbi nisi purus, euismod eu porttitor interdum, iaculis at velit. Proin posuere metus id</li>
                                <li>Donec porttitor aliquet sapien in lobortis. Pellentesque nulla leo</li>
                                <li>Proin luctus felis porta arcu lobortis faucibus. Vivamus sed ele</li>
                                <li>Nullam finibus ligula at ante semper feugiat. Donec libero leo erra sollicitudin urna</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="case-studies-block-image">
                                <img src="./imgs2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="section">
                        <div className="light-graybg">
                        <img src="./technology-stack.jpg" alt=""/>
                        <div className="logos-item">
                            <h3>Technology Stack</h3>
                            <img src="./html.svg" alt=""/>
                            <img src="./css3.svg" alt=""/>
                            <img src="./drupal.svg" alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section protype">
                <div className="container">
                    <div className="left-part">
                        <h3>Prototyping</h3>
                        <p>Vestibulum malesuada pulvinar metus at faucibus. Morbi vel augue sed lacus laoreet hendrerit. Etiam maximus porta nibh at commodo. Pellentesque molestie laoreet metus ut euismod. Donec sed turpis lacus. Vivamus non commodo dolor. In blandit ac lacus in dapibus. Duis non dui leo.</p>
                        <p>Aliquam ac felis ultrices, tristique nibh vitae, vehicula risus. Curabitur dignissim odio eget neque rhoncus, quis faucibus tellus finibus. Cras magna nisl, venenatis e</p>          
                    </div>
                    <div className="right-part">
                        <img src="./img-protype.png" className="big" alt=""/>
                        <img src="./img-protype.png" className="small" alt=""/>
                    </div>
                </div>
            </section>
            <section className="section solutions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <img src="./solutions1.png" alt=""/>
                        </div>
                        <div className="col-md-6 solutions-block">
                        <h3>The Solutions</h3>
                        <p>Vestibulum malesuada pulvinar metus at faucibus. Morbi vel augue sed lacus laoreet hendrerit. Etiam maximus porta nibh at commodo. Pellentesque molestie laoreet metus ut euismod. Donec sed turpis lacus. Vivamus non commodo dolor. In blandit ac lacus in dapibus. Duis non dui leo.</p>
                        <p>Aliquam ac felis ultrices, tristique nibh vitae, vehicula risus. Curabitur dignissim odio eget neque rhoncus, quis faucibus tellus finibus. Cras magna nisl, venenatis e</p>
                        <img src="./solutions2.png" alt=""/>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="button-primary">Book an Appoinment</a> 
                    </div>
                </div>
            </section>
            <Requestaquote/>
        </div>
    );
}

export default caseStudies;
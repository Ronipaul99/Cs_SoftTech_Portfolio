import React from 'react';
import Slider from "react-slick";
function Industryexperiance(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:true,
        button:true
      };
    return (
        <section className="section experience">
            <div className="container">
                <div className="section-header">
                    <h2>Industry Experience</h2>
                    <p>
                        Through these articles, we also share our latest thinking, ideas,
                        and perspectives
                    </p>
                </div>
                <div className="owl-carousel owl-theme experience-slider">
                    <Slider {...settings}>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-digital-marketing"></span>
                            <h5>Digital & Marketing</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-e-commerce"></span>
                            <h5>Retail & E-Commerce</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-logistics-transportation"></span>
                            <h5>Logistics & Transportation</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-automotive"></span>
                            <h5>Automotive</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-e-learning"></span>
                            <h5>Educaton & E-Learning</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-digital-marketing"></span>
                            <h5>Digital & Marketing</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-e-commerce"></span>
                            <h5>Retail & E-Commerce</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-logistics-transportation"></span>
                            <h5>Logistics & Transportation</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-automotive"></span>
                            <h5>Automotive</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-e-learning"></span>
                            <h5>Educaton & E-Learning</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-digital-marketing"></span>
                            <h5>Digital & Marketing</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-e-commerce"></span>
                            <h5>Retail & E-Commerce</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-logistics-transportation"></span>
                            <h5>Logistics & Transportation</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-automotive"></span>
                            <h5>Automotive</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="experience-item">
                            <span className="icon-e-learning"></span>
                            <h5>Educaton & E-Learning</h5>
                        </div>
                    </div>
                </Slider>
                </div>
                <div className="pt-5">
                    <a href="#" className="button-primary btn-fill">View All</a>
                </div>
            </div>
            </section>
    );
}

export default Industryexperiance;
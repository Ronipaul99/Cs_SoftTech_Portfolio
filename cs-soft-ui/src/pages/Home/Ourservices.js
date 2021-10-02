import React from 'react';
import Slider from "react-slick";
function Ourservices(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:true,
        button:true
      };
    return (
        <section className="section service">
            <div className="container">
                <h2>
                    We use custom teams to help agencies and businesses scale their
                    development
                </h2>
                <div className="owl-carousel owl-theme services-slider">
                <Slider {...settings}>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-web-development"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Web Development</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-web-design"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Web Design</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-ui-ux"><span className="path1"></span><span className="path2"></span></span>
                            <h5>App UI UX</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-qa"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Testing & QA</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-data-services"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Data Services</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-web-development"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Web Development</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-web-design"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Web Design</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-ui-ux"><span className="path1"></span><span className="path2"></span></span>
                            <h5>App UI UX</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-qa"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Testing & QA</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-data-services"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Data Services</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-web-development"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Web Development</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-web-design"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Web Design</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-ui-ux"><span className="path1"></span><span className="path2"></span></span>
                            <h5>App UI UX</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-qa"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Testing & QA</h5>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-item">
                            <span className="icon-data-services"><span className="path1"></span><span className="path2"></span></span>
                            <h5>Data Services</h5>
                        </div>
                    </div>
                </Slider>
                </div>
                <div className="pt-5">
                    <a href="#" className="button-outline">View All Services</a>
                </div>
            </div>
        </section>
    );
}

export default Ourservices;
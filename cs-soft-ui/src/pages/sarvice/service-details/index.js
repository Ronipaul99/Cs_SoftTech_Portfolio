import React from 'react';
import Requestaquote from '../../Home/Requestaquote';
import CaseStudies from '../CaseStudies';
import DetailsBanner from './DetailsBanner';

function ServiceDetails(props) {
    return (
        <div>
            <DetailsBanner/>
            <section className="service-details">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                        <div className="service-details__img">
                            <img src="./01.jpg" alt="" loading="lazy" />
                        </div>
                        <div className="service-details__icon-box">
                            <span className="icon-graphic-design"></span>
                        </div>
                        <h3 className="service-details__title">UI/UX design</h3>
                        <p className="service-details__text-1">
                            Need something changed or is there something not quite working
                            the way you envisaged? Is your van a little old and tired and
                            need refreshing?<br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown<br />
                            printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        <h3 className="service-details__title">Planning and work strategy</h3>
                        <p className="service-details__text-1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <img loading="lazy" src="./02.jpg" alt="" />
                            </div>
                            <div className="col-md-6">
                            <ul className="list-unstyled service-details__list m-0">
                                <li>
                                <div className="icon">
                                    <i className="bi bi-check2 text-primary"></i>
                                </div>
                                <div className="text">
                                    <h5>Research beyond the business plan not work here</h5>
                                </div>
                                </li>
                                <li>
                                <div className="icon">
                                    <i className="bi bi-check2 text-primary"></i>
                                </div>
                                <div className="text">
                                    <h5>Marketing options and rates lipsum simply</h5>
                                </div>
                                </li>
                                <li>
                                <div className="icon">
                                    <i className="bi bi-check2 text-primary"></i>
                                </div>
                                <div className="text">
                                    <h5>The ability to turnaround consulting work on it</h5>
                                </div>
                                </li>
                                <li>
                                <div className="icon">
                                    <i className="bi bi-check2 text-primary"></i>
                                </div>
                                <div className="text">
                                    <h5>Customer engagement matters not at all</h5>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <p>
                            Need something changed or is there something not quite working
                            the way you envisaged? Is your van a little old and tired and
                            need refreshing? Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        <p>
                            Need something changed or is there something not quite working
                            the way you envisaged? Is your van a little old and tired and
                            need refreshing? Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        <p>
                            Need something changed or is there something not quite working
                            the way you envisaged? Is your van a little old and tired and
                            need refreshing? Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__sidebar">
                        <div className="service-details__sidebar-category">
                            <h3 className="service-details__sidebar-title">All Services</h3>

                            <div className="menu-service-menu-container">
                            <ul
                                className="service-details__sidebar-category-list list-unstyled"
                            >
                                <li>
                                <a href="#">Website design</a>
                                </li>
                                <li>
                                <a href="#">Web development</a>
                                </li>
                                <li>
                                <a href="#">Web application</a>
                                </li>
                                <li>
                                <a href="#" aria-current="page">UI/UX design</a>
                                </li>
                                <li>
                                <a href="#">Content writing</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="service-details__need-help">
                            <div
                            className="service-details__need-help-bg"
                            style={{BackgroundImage : `url("./theme/img/ser-dtl-need-help-bg.jpg")`}}
                                
                            ></div>
                            <h3 className="service-details__need-help-title">Need Help?</h3>
                            <p className="service-details__need-help-text">
                            Prefer speaking with a human to filling out a form? call
                            corporate office and we will connect you with a team member
                            who can help.
                            </p>
                            <div className="service-details__need-help-phone">
                            <div className="service-details__need-help-phone-icon">
                                <i className="bi bi-telephone-outbound"></i>
                            </div>
                            <div className="service-details__need-help-phone-number">
                                <h4><a href="tel:666888000">666 888 000</a></h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <CaseStudies/>
            <Requestaquote/>
        </div>
    );
}

export default ServiceDetails;
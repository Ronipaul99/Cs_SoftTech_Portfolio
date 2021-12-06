import React from 'react';
import Banner from './Banner';
import Client from './Client';
import Feedback from './Feedback';
import Industryexperiance from './Industryexperiance';
import Ourservices from './Ourservices';
import Requestaquote from './Requestaquote';
import Whychoose from './Whychoose';

function Home() {
    return (
        <div>
            <Banner/>
            <Client/>
            <Ourservices/>
            <Whychoose/>
            <section className="section schedule">
                <div className="container">
                    <div className="schedule-block">
                        <div className="item">
                            <span className="icon-access"></span>
                            <h5>
                                Accelerating<br />
                                first-to-market access
                            </h5>
                        </div>
                        <div className="item">
                            <span className="icon-access"></span>
                            <h5>
                                Accelerating<br />
                                first-to-market access
                            </h5>
                        </div>
                        <div>
                            <a href="#" className="button-primary bg-reverse">Schedule Time to Talk</a>
                        </div>
                    </div>
                </div>
            </section>
            <Industryexperiance/>
                      <section className="section grey-bg case-studies">
                          <div className="container">
                              <div className="case-studies-header">
                                  <h5>Case Studies</h5>
                                  <h2>
                                      Through these articles, we also share our latest thinking, ideas,
                                      and perspectives
                                  </h2>
                              </div>
                              <div className="row align-items-center case-studies-block">
                                  <div className="col-md-5">
                                      <div className="case-studies-block-header">
                                          <h3>
                                              Mobile Product Strategy, UX and Service Design for a
                                              Multinational Fortune 50 Media Company
                                          </h3>
                                          <p>
                                              Define, design, prototype and test a new mobile device and
                                              service that will disrupt an already-crowded market
                                          </p>
                                          <a href="#">Read more <i className="bi bi-arrow-right-circle-fill"></i></a>
                                      </div>
                                  </div>
                                  <div className="col-md-1"></div>
                                  <div className="col-md-6">
                                      <div className="case-studies-block-image">
                                          <img src="./business-concept.jpg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="section case-studies">
                      <div className="container">
                          <div className="row align-items-center case-studies-block">
                              <div className="col-md-6">
                                  <div className="case-studies-block-image">
                                      <img src="./website-development.jpg" alt="" />
                                  </div>
                              </div>
                              <div className="col-md-1"></div>
                              <div className="col-md-5">
                                  <div className="case-studies-block-header">
                                      <h3>
                                          The Formula to Increase Sales Qualified Leads on Your Enterprise
                                          Website
                                      </h3>
                                      <p>
                                          DDefine, design, prototype and test a new mobile device and
                                          service that will disrupt an already-crowded market
                                      </p>
                                      <a href="#">Read more <i className="bi bi-arrow-right-circle-fill"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <Requestaquote/>
            <Feedback/>
        </div>
    );
}

export default Home;
import React from 'react';

function Whychoose(props) {
    return (
        <div>
            <section className="section why-choose">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="why-choose-conatiner">
                                        <svg>
                                            <circle cx="170" cy="170" r="170"></circle>
                                        </svg>
                                        <div className="why-choose-img">
                                            <img src="./img1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-7">
                                    <h2>Why choose Creationsoul</h2>
                                    <p>Some of the worlds best companies have chosen to work with</p>
                                    <div className="why-choose-item">
                                        <div className="why-choose-item-block">
                                            <h2>10</h2>
                                            <p>
                                                Years of <br />
                                                Digital Services
                                            </p>
                                        </div>
                                        <div className="why-choose-item-block">
                                            <h2>40</h2>
                                            <p>
                                                Employees<br />
                                                Strangths
                                            </p>
                                        </div>
                                        <div className="why-choose-item-block">
                                            <h2>500</h2>
                                            <p>
                                                Built over 500<br />
                                                websites
                                            </p>
                                        </div>
                                        <div className="why-choose-item-block">
                                            <h2>05</h2>
                                            <p>
                                                Office<br />
                                                Locations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </section>
        </div>
    );
}

export default Whychoose;
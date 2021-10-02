import React from 'react';
import Slider from "react-slick";
function Feedback(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        button:true
      };
    return (
        <div>   
            <section className="section container testimonials">
                      <h2>Our Clients says</h2>
                      <div className="owl-carousel owl-theme testimonials-slider">
                      <Slider {...settings}>
                          <div className="item">
                              <div className="testimonials-block">
                                  <div className="icon-quote"></div>
                                  <p className="testimonials-block-text">
                                      I love helping to cultivate a culture that sets people up to
                                      succeed, gives people the space to work through challenges, and
                                      values the diverse perspectives everyone brings to the work."
                                  </p>
                                  <div className="testimonials-block-client-info">
                                      Mukesh Jain / Mediateck / Kolkata
                                  </div>
                                  <div className="testimonials-block-client-image">
                                      <img src="./client.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="testimonials-block">
                                  <div className="icon-quote"></div>
                                  <p className="testimonials-block-text">
                                      I love helping to cultivate a culture that sets people up to
                                      succeed, gives people the space to work through challenges, and
                                      values the diverse perspectives everyone brings to the work."
                                  </p>
                                  <div className="testimonials-block-client-info">
                                      Mukesh Jain / Mediateck / Kolkata
                                  </div>
                                  <div className="testimonials-block-client-image">
                                      <img src="./client.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="testimonials-block">
                                  <div className="icon-quote"></div>
                                  <p className="testimonials-block-text">
                                      I love helping to cultivate a culture that sets people up to
                                      succeed, gives people the space to work through challenges, and
                                      values the diverse perspectives everyone brings to the work."
                                  </p>
                                  <div className="testimonials-block-client-info">
                                      Mukesh Jain / Mediateck / Kolkata
                                  </div>
                                  <div className="testimonials-block-client-image">
                                      <img src="./client.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="testimonials-block">
                                  <div className="icon-quote"></div>
                                  <p className="testimonials-block-text">
                                      I love helping to cultivate a culture that sets people up to
                                      succeed, gives people the space to work through challenges, and
                                      values the diverse perspectives everyone brings to the work."
                                  </p>
                                  <div className="testimonials-block-client-info">
                                      Mukesh Jain / Mediateck / Kolkata
                                  </div>
                                  <div className="testimonials-block-client-image">
                                      <img src="./client.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="testimonials-block">
                                  <div className="icon-quote"></div>
                                  <p className="testimonials-block-text">
                                      I love helping to cultivate a culture that sets people up to
                                      succeed, gives people the space to work through challenges, and
                                      values the diverse perspectives everyone brings to the work."
                                  </p>
                                  <div className="testimonials-block-client-info">
                                      Mukesh Jain / Mediateck / Kolkata
                                  </div>
                                  <div className="testimonials-block-client-image">
                                      <img src="./client.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                        </Slider>
                      </div>
                  </section>
                  
            
        </div>
    );
}

export default Feedback;
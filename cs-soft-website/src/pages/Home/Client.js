import React from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";
// import './owl.css';  
function Client(props) {
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
            <section className="section client">
                <div className="container">
                    <h5>Some of our valuable clients</h5>
                        <Slider {...settings}>
                                <div className="item"><img src="./hexa.jpg" alt="" /></div>
                                <div className="item"><img src="./aven.jpg" alt="" /></div>
                                <div className="item"> <img src="./light-ai.jpg" alt="" /></div>
                                <div className="item"><img src="./amara.jpg" alt="" /></div>
                                <div className="item"><img src="./lorem.jpg" alt="" /></div>
                        </Slider>
                        <div className="client-logo">
                        {/* <div className="owl-carousel owl-theme client-slider row">
                            <div className="item"><img src="./hexa.jpg" alt="" /></div>
                            <div className="item"><img src="./aven.jpg" alt="" /></div>
                            <div className="item"> <img src="./light-ai.jpg" alt="" /></div>
                            <div className="item"><img src="./amara.jpg" alt="" /></div>
                            <div className="item"><img src="./lorem.jpg" alt="" /></div>
                        </div> */}
                    </div>
                    <div className="sort-info">
                        <h3>Phasellus ipsum sapien, fermentum eu nibh</h3>
                        <p>
                            Sed a dolor id est porttitor euismod. Proin elementum ipsum eget mi
                            blandit euismod. Fusce facilisis tortor leo, nec bibendum lectus
                            maximus eu. Nulla facilisi. Phasellus ipsum sapien, fermentum eu
                            nibh ac, tempus volutpat velit. Vestibulum rhoncus sit amet ipsum
                            sed facilisis. Sed vehicula risus a tincidunt blandit. Sed a dolor
                            id est porttitor euismod. Proin elementum ipsum eget mi blandit
                            euismod. Fusce facilisis tortor leo, nec bibendum lectus maximus eu.
                            Nulla facilisi. Phasellus ipsum sapien, fermentum eu nibh ac, tempus
                            volutpat velit. Vestibulum rhoncus sit amet ipsum sed facilisis. Sed
                            vehicula risus a tincidunt blandit.
                        </p>
                    </div>
                </div>
            </section>

    );
}

export default Client;
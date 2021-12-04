import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block-container">
                    <div className="footer-block">
                        <h4>About</h4>
                        <div className="footer-link toggle-menu">
                            <a href="#">Work</a>
                            <a href="#">Services</a>
                            <a href="#">Process</a>
                            <a href="#">About</a>
                            <a href="#">Team</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                            <a href="#">Latest News</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h4>Our Services</h4>
                        <div className="toggle-menu">
                            <a href="#">Web Design & Development</a>
                            <a href="#">Mobile Application Development</a>
                            <a href="#">Digital Marketing</a>
                            <a href="#">Work</a>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h4>Help & Resources</h4>
                        <div className="toggle-menu">
                            <a href="#">Support centre</a>
                            <a href="#">Guides</a>
                            <a href="#">FAQ</a>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h4>Contact Us</h4>
                        <div className="toggle-menu">
                        <address>2055 Gateway Place - Ste 500 Delhi, India</address>
                        <a href="mailto:info@creationsoul.com">info@creationsoul.com</a>
                        <a href="tel:+91 (xxx) xxxxxxx">+91 (xxx) xxxxxxx</a>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <img src="./logo.png" alt="" />
                    <div className="get-touch">
                        <div>Get in touch</div>
                        <div className="social">
                            <a href="#"><span className="icon-facebook"></span></a>
                            <a href="#"><span className="icon-twitter"></span></a>
                            <a href="#"><span className="icon-linkedin"></span></a>
                            <a href="#"><span className="icon-you-tube"></span></a>
                            <a href="#"><span className="icon-instagram"></span></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <div>© 2021 Creationsoul. All Rights Reserved</div>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import React from 'react';

function Banner(props) {
    return (
        <div>
            <section className="banner">
              <div className="container">
                  <div className="banner-content">
                      <h2>One Company. Many Divisions.</h2>
                      <p>
                          End-to-end digital marketing division focused on driving more users,
                          leads and sales.
                      </p>
                      <a href="#" className="button-primary">Lets Talk</a>
                  </div>
              </div>
            </section>
        </div>
    );
}

export default Banner;
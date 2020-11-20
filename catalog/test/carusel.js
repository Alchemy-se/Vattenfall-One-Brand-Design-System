import React, { Fragment } from 'react';

const Carusel = () => {
  return (


    <div>
      <div style={{ marginLeft: '100px' }}id="test"/>


      <div id="vf-carousel-container">

        <div id="1" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">1 news title goes here news title goes</div>
            <div className="vf-carousel-subtitle">Here you can see your electricity price and sign electricity contracts sign electricity contractssign
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div id="2" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header"> 2</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div id="3" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header"> 3</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div id="4" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">4</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div id="5" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">5</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div id="6" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">6</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div id="7" className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">7</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>


      </div>

        <div className="vf-carousel-indicator-container" />

        <div className="vf-carousel-arrows">
          <span className="vf-icon-arrow-left arrow" id="left-arrow" />
          <span className="vf-icon-arrow-right arrow" id="right-arrow" />
        </div>
      </div>



  )
};

export default Carusel;

import React, { Fragment } from 'react';

const Carusel = () => {
  return (
    <div>
      <div id="vf-carousel-container">

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          {/*<div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here 1</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow">Button label</a>
          </div>*/}
        </div>

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          {/*<div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here 2</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow">Button label</a>
          </div>*/}
        </div>

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          {/*<div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here 3</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow">Button label</a>
          </div>*/}
        </div>

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          {/*<div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here 4</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow">Button label</a>
          </div>*/}
        </div>
      </div>

      <div className="vf-carousel-dots" />

      <div className="vf-carousel-arrows">
        <div id="left-arrow">left</div>
       <div id="right-arrow">right</div>
      </div>

    </div>

  );
};

export default Carusel;

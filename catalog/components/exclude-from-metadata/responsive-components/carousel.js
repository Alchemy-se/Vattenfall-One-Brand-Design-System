import React, { Fragment } from 'react';

const CarouselComponent = () => {
  return (
    <div style={{paddingTop: '1px'}} className="vf-carousel-outer-container">
      <h2 style={{fontSize: "3.25rem"}}>Carousel component</h2>
      <div id="vf-carousel-container">

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header"> News title goes here news title goes</div>
            <div className="vf-carousel-subtitle">Cum sociis natoque penatibus et magnis dis parturient. Donec sed odio
              operae, eu vulputate felis rhoncus. Nec dubitamus multa iter quae et nos invenerat. Quisque ut dolor
              gravida, placerat libero vel, euismod. Tu quoque, Brute, fili mi, nihil timor populi, nihil!
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div  className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header"> News title goes here</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header"> News title goes here</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div  className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here</div>
            <div className="vf-carousel-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
              quam sit amet nisi dapibus.
            </div>
            <a href="#" className="vf-link-with-arrow vf-carousel-cta">Button label</a>
          </div>
        </div>

        <div  className="vf-carousel-card-container">
          <img className="vf-carousel-image" src="/img/carousel-placeholder.jpg" alt="carousel image" />
          <div className="vf-carousel-body-container">
            <div className="vf-carousel-header">News title goes here</div>
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

export default CarouselComponent;

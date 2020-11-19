import React, { Fragment } from 'react';

const HeroComponent = ({sectionClass, titleOne, titleTwo, video, button, logo, intro}) => {
  return (
    <section 
      className={sectionClass ? sectionClass : "vf-hero"}
      style={{backgroundImage: 'url(/img/example-startpage/hero-bg-beach.jpg)', border: 'none'}}
    >
      <div className="vf-hero__content">
        <h1 className="vf-hero__headline" style={{color: '#ffffff'}}>
          {titleOne} 
          {titleTwo && 
            <Fragment>
              <br className="vf-u--sm-hidden" />
              {titleTwo}
            </Fragment>
          }
        </h1>
        {button && 
        <div className="vf-hero-button-container">
          <button type="button" className="vf-btn vf-btn--lg vf-btn--primary">Button label</button>
        </div>
        }
        {video && 
        <a href="#">
          <img src="/img/example-startpage/play.svg" width="14" style={{marginRight: '8px'}} />
          Button label
        </a>
        }
        {logo && 
          <img src='/img/vf-logo-vertical.svg' className='vf-hero__vf_logo_vertical'/>
        }
      </div>
      {intro && 
        <div className="vf-hero vf-hero__text-intro-buttons">
          <p className="vf-hero__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros ac dolor iaculis feugiat. Fusce blandit neque neque. Quisque commodo mauris quam, a pharetra justo volutpat at. Maecenas bibendum posuere placerat. Curabitur mollis turpis et turpis tempus, vitae rhoncus urna vulputate.
          </p>
          <div className="vf-hero__two-buttons">
            <button type="button" className="vf-btn vf-btn--lg vf-btn--primary">Button label</button>
            <button type="button" className="vf-btn  vf-btn--lg vf-btn--outline-secondary">Button label</button>
          </div>
        </div>
      }
    </section>
  );
};

export default HeroComponent;
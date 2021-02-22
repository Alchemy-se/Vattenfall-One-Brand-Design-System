import React from 'react'
import NewsletterBox from './lib/newsletterBox'
import styles from './welcome.scss'

const Welcome = () => {
  return (
    <React.Fragment>
      <div>
        <div className={styles.startPageHero}>
          <div className={`${styles.signUpContainer}`}>
            <NewsletterBox />
          </div>
          <div className={styles.videoContainer}>
            <video autoPlay loop muted>
              <source
                src='/img/example-startpage/hero-video-loop.mp4'
                type='video/mp4'
              />
            </video>
          </div>
          <h1>Digital Design System</h1>

          <img className={styles.logo} src='/img/vf-logo-vertical.svg' />
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.introText}>
            <div>
              The Vattenfall Digital Design System (DDS) unites products and
              services around a common visual language. It aims to provide
              direction and guidance, accelerate the design process, and build
              bridges between us as individuals and teams working to bring
              unified products and services to life within the brand.
            </div>
            <div>
              The overarching goal with the DDS is to ensure that we present a
              cohesive experience of Vattenfall, thus building a strong brand in
              the markets we operate in. The DDS complements the Brand Toolbox
              through an up-to-date collection of custom-built digital assets.
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <a
              href='/get-started/introduction'
              className='vf-btn vf-btn--lg vf-btn--primary'
            >
              Getting started
            </a>
            {/* <button type="button" className="vf-btn  vf-btn--outline-secondary">Blue Button</button>*/}
          </div>

          <div className={styles.border} />
          <div className={styles.brandStyleGuideContainer}>
            <div className={styles.header}>Brand Toolbox</div>
            <div className={styles.text}>
              Is the DDS not quite what you’re looking for? Do you need assets
              like brand guidelines, logos, artwork, campaign material, images,
              icons, fonts, illustrations or music files? You’ll find what
              you’re after in the{' '}
              <a href='https://brandtoolbox.vattenfall.com/login/'>
                Brand toolbox
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Welcome

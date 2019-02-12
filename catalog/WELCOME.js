import React from "react";

const Welcome = () => (
  <div style={{ margin: '0 30px 0 40px' }}>
    <link href="/dist/css/reboot.css" rel="stylesheet" type="text/css" />
    <link href="/dist/css/main.css" rel="stylesheet" type="text/css" />
    <link href="/dist/css/documentation.css" rel="stylesheet" type="text/css" />

    <div style={{
      height: '70vh',
      maxWidth: '750px',
      background: 'transparent'
    }}>
      <p style={{ fontSize: '18px' }}>
        Welcome to the technical documentation for Vattenfall Design System.
      </p>

      <p style={{ fontSize: '18px' }} className="">
        Vattenfall Digital Design System unites products around a common visual language. 
        It is a constantly evolving library accelerates design process, and builds bridges between teams working in concert to bring unified products to life within set brand. We focus on creating Vattenfall’s Digital Design System that helps the team improve product quality while reducing design debt and amplifying efficiency.
      </p>

      <div className="vf-pb-3">
        <a href="#" className="vf-btn vf-btn--primary vf-btn--lg">Getting started</a>
        <a href="#" className="vf-btn vf-btn--secondary vf-btn--lg">Resources</a>
      </div>
    </div> 

    <img src="/img/docs/illustration.png" style={{ position: 'fixed', right: 0, top: 0, zIndex: -1, height: '100%' }} />

    <h4>Designers</h4>
    <p>
      Get the latest Design System Sketch library through abstract. Read the <a href="/designers">getting started for designers</a> page.
    </p>

    <h4>Developers</h4>
    <p>
      Follow the steps under <a href="/getting-started">getting started</a>.
    </p>

    <p>
      For a list of all Components in the design system, go to <a href="/getting-started">CSS Library</a>.
    </p>

    <h4>Contributing</h4>
    <p>
      To improve and extend this design system, read the <a href="/contribute">Contribution guidelines</a>.
    </p>

    <h4>Designers?</h4>
    <p>
      Are you rather looking for a general styleguide with information about how to use Vattenfalls logotype, colors and such? Then you will find everything you need over at https://clients.alchemy.se/vattenfall/.
    </p>
  </div>
)

export default Welcome;
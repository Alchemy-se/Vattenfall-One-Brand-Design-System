import React from "react";

const Welcome = () => (
  <div style={{ margin: '0 30px 0 40px' }}>
    <div style={{
      height: '70vh',
      maxWidth: '750px',
      background: 'transparent'
    }}>
      <p style={{ fontSize: '18px' }} className="vf-pt-md">
        Welcome to the technical documentation for Vattenfall Design System.
      </p>

      <p style={{ fontSize: '18px' }} className="">
      Vattenfall Design System unites products & services around a common visual language. It aims to reduce current Design Debt, accelerates the design process, and builds bridges between teams working in concert to bring unified products to life within set brand. Vattenfall Design System is created with aim to help the teams within Vattenfall to improve product quality, amplify production efficiency and enhance communication.
      </p>

      <div className="vf-pb-3">
        <a href="/design" className="vf-btn vf-btn--primary vf-btn--lg vf-mr-sm">Getting started</a>
        <a href="/resources" className="vf-btn vf-btn--secondary vf-btn--lg">Resources</a>
      </div>
    </div> 

    <img src="/img/docs/illustration.png" style={{ position: 'fixed', right: 0, top: 0, zIndex: -1, height: '100%', objectFit: 'contain', maxWidth: '30%' }} />

    <h4>Designers</h4>
    <p>
      Get the latest Design System Sketch library through abstract. Read the <a href="/designers">Getting Started for Designers</a> page.
    </p>

    <h4>Developers</h4>
    <p>
      Follow the steps under <a href="/getting-started">Getting Started for Developers</a>.
    </p>

    <p>
      For a list of all Components in the design system, go to <a href="/getting-started">Components</a>.
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

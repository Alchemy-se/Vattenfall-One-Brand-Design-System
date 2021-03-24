import React from 'react'

const InChargeContinental = () => {
  return (
    <div className='row align-items-start'>
      <h2 className='use-in-toc'>InCharge Continental</h2>
      <h4 className='use-in-toc'>Continental Stacked</h4>
      <p>
        The InCharge Continental logotype is used for the markets Netherlands
        and Germany, where InCharge is communicated as a product by Vattenfall
        and fully integrated in the Vattenfall brand. The InCharge Continental
        logotype is a fixed artwork and is not to be altered in any way.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/inCharge/logotypes/continental/stacked.svg'
          alt='incharge-logotype-continental-stacked'
        />
      </div>
      <div style={largeContainer}>
        <img
          src='/img/inCharge/logotypes/continental/one-line.svg'
          alt='incharge-logotype-continental-one-line'
        />
      </div>
      <p>
        <strong>
          Exception – The horizontal logotype variant shown above is an
          exception used only for the desktop website. For breaking point 768px
          and lower, use the Linear logotype shown below.
        </strong>
      </p>
      <div style={smallContainer}>
        <div style={column}>
          <div style={stackedDiv}>
            <img
              style={stackedImg}
              src='/img/inCharge/logotypes/continental/stacked.svg'
              alt='incharge-logotype-continental-stacked'
            />
          </div>
          <p>
            <strong>Stacked Logotype</strong>
          </p>
        </div>
        <div style={column}>
          <div style={linearDiv}>
            <img
              style={linearImg}
              src='/img/inCharge/logotypes/continental/linear.svg'
              alt='incharge-logotype-continental-linear'
            />
          </div>
          <p>
            <strong>Linear Logotype</strong>
          </p>
        </div>
      </div>
      <h4 className='use-in-toc'>Logotype Clear Space</h4>
      <p>
        To help our logotype stand out and maintain its integrity an area of
        clear space should always surround the logotype. This area should be
        clear from other graphic elements or text.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/inCharge/logotypes/continental/linear-spacing.svg'
          alt='incharge-logotype-continental-linear-spacing'
        />
      </div>
      <p>
        The clear space around the linear logotype is defined by the Vattenfall
        Symbol. Half the symbols height is 1X, and the clear space is 1X around
        all sides of the logotype.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/inCharge/logotypes/continental/stacked-spacing.svg'
          alt='incharge-logotype-continental-stacked-spacing'
        />
      </div>
      <p>
        The clear space around the stacked logotype is half of the symbols
        height (1X). The clear space is 1X around all sides of the logotype.
      </p>
    </div>
  )
}

const largeContainer = {
  display: 'flex',
  border: '1px solid rgb(204, 204, 204)',
  padding: '84px',
  justifyContent: 'center',
  marginBottom: '24px',
}

const smallContainer = {
  display: 'flex',
  justifyContent: 'space-between',
}

const stackedDiv = {
  width: '100%',
  border: '1px solid rgb(204, 204, 204)',
  display: 'flex',
  justifyContent: 'center',
}

const linearDiv = {
  height: '100%',
  width: '100%',
  border: '1px solid rgb(204, 204, 204)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const stackedImg = {
  height: '314px',
  padding: '30px',
}

const linearImg = {
  height: '130px',
}

const column = {
  width: 'calc(50% - 12px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export default InChargeContinental

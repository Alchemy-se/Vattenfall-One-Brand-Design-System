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
          Exception - Logotype version for website only. The logotype variant
          shown above is an exception used only for the website.
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
            <p>
              <strong>Linear Logotype</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const largeContainer = {
  width: '100%',
  display: 'flex',
  border: '1px solid rgb(204, 204, 204)',
  padding: '84px',
  justifyContent: 'center',
  marginBottom: '24px',
}

const smallContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

const stackedDiv = {
  border: '1px solid rgb(204, 204, 204)',
  padding: '78px',
}

const linearDiv = {
  border: '1px solid rgb(204, 204, 204)',
  padding: '28px',
}

const stackedImg = {
  height: '314px',
}

const linearImg = {
  border: '1px solid rgb(204, 204, 204)',

  height: '130px',
}

const column = {
  width: 'calc(100% - 12px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export default InChargeContinental

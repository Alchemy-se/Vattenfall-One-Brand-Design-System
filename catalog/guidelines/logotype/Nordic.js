import React from 'react'

const InChargeNordic = () => {
  return (
    <div className='row align-items-start'>
      <h2 className='use-in-toc'>InCharge Nordic</h2>
      <h4 className='use-in-toc'>Nordic Stacked</h4>
      <div style={style}>
        <img
          src='/img/inCharge/logotypes/nordic/stacked.svg'
          alt='incharge-logotype-nordic-stacked'
        />
      </div>
    </div>
  )
}

const style = {
  width: '100%',
  display: 'flex',
}
export default InChargeNordic

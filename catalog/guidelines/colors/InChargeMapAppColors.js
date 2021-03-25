import React, { Fragment } from 'react'
import Circle from './Circle'

const InChargeMapAppColors = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <Circle color={'#FFDA00'} colorName='Yellow' />
        <Circle
          color={'#FFFFFF'}
          colorName='White'
          border='1px solid #000000'
        />
        <Circle color={'#81E0A8'} colorName='Solar' />
        <Circle color={'#2071B5'} colorName='Blue' />
        <div className='vf-col'></div>
        <div className='vf-col'></div>
      </div>
    </Fragment>
  )
}

export default InChargeMapAppColors

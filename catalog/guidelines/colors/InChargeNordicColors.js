import React, { Fragment } from 'react'
import Circle from './Circle'

const InChargeNordicColors = () => {
  return (
    <Fragment>
      <h4 style={headingStyle}>Primary Colours</h4>
      <div className='vf-row'>
        <Circle color={'#46EE76'} colorName='InCharge Green' />
        <Circle color={'#2071B5'} colorName='InCharge Blue' />
        <Circle color={'#4E4B4B'} colorName='InCharge Grey' />
        <div className='vf-col'></div>
        <div className='vf-col'></div>
        <div className='vf-col'></div>
      </div>
      <h4 style={headingStyle}>Colour CTA</h4>
      <div className='vf-row'>
        <Circle
          color={'#46EE76'}
          colorName='Vattenfall Green'
          rgb={'70,238,118'}
        />
        <div className='vf-col'></div>
        <div className='vf-col'></div>
        <div className='vf-col'></div>
        <div className='vf-col'></div>
        <div className='vf-col'></div>
      </div>
    </Fragment>
  )
}

const headingStyle = {
    paddingBottom: "40px",
    paddingTop: "20px"
}

export default InChargeNordicColors

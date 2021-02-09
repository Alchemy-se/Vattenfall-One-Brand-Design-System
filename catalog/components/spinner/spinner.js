import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../assets/spinner.json'

const Spinner = ({height = 40, width = 40}) => {
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    redndererSettings: {
      preserverAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div style={{width:width, height:height}}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  )
}

export default Spinner

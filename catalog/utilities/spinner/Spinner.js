import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../assets/spinner.json'

const Spinner = ({className}) => {
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    redndererSettings: {
      preserverAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={className}>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default Spinner

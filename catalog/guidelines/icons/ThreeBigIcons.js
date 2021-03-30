import React from 'react'

const ThreeBigIcons = ({ src1, src2, src3 }) => {
    return (
      <div style={wrapperStyle}>
        <img style={imgStyle} src={src1}></img>
        <img style={imgStyle} src={src2}></img>
        <img style={imgStyle} src={src3}></img>
      </div>
    )
}

const wrapperStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom:"72px"
}

const imgStyle = {
    width: "288px",
    height: "288px",
    margin: "20px"
}

export default ThreeBigIcons

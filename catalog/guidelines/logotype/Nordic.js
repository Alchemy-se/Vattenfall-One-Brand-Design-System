import React from 'react'

const InChargeNordic = () => {
  return (
    <div className='row align-items-start'>
      <h2 className='use-in-toc'>InCharge Nordic</h2>
      <p>
        The InCharge Nordic Primary logotype consists of two parts; the wordmark
        InCharge and the blue and green symbol. The InCharge Nordic Primary
        logotype exists in two versions; the stacked logotype and the linear
        logotype. The logotype is used in InCharge’s own channels – i.e. the
        website, as an avatar in social media as well as on the charging
        card/tag and app.
      </p>
      <h4>Stacked logotype</h4>
      <p>
        The InCharge Nordic Primary stacked logotype has the symbol centered
        above the wordmark. The logotype is a fixed artwork and is not to be
        altered in any way.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/logotypes/incharge/nordic/stacked.svg'
          alt='incharge-logotype-nordic-stacked'
        />
      </div>
      <h4>Linear logotype</h4>
      <p>
        The InCharge Nordic Primary linear logotype has the symbol to the right
        of the wordmark. The logotype is a fixed artwork and is not to be
        altered in any way.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/logotypes/incharge/nordic/linear.svg'
          alt='incharge-logotype-nordic-linear'
        />
      </div>
      <h4>Logotype clear space</h4>
      <p>
        To help the logotype stand out and maintain its integrity, an area of
        clearspace should always surround the logotype. This area should be
        clear from other graphic elements or text.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/logotypes/incharge/nordic/stacked-spacing.svg'
          alt='incharge-logotype-nordic-stacked-spacing'
        />
      </div>
      <p>
        The clear space around the logotype is defined by the height of the
        capital I in the wordmark, see illustration.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/logotypes/incharge/nordic/linear-spacing.svg'
          alt='incharge-logotype-nordic-linear-spacing'
        />
      </div>
      <p>
        The clear space also defines the area between the wordmark and the
        symbol. This is not to be changed.
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

export default InChargeNordic

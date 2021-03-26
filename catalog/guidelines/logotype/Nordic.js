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
          src='/img/logotypes/incharge/nordic/stacked/grey_rgb.svg'
          alt='incharge_logotype_nordic_stacked_grey_rgb'
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
          src='/img/logotypes/incharge/nordic/linear/grey_rgb.svg'
          alt='incharge_logotype_nordic_linear_grey_rgb'
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
          src='/img/logotypes/incharge/nordic/stacked/stacked_spacing_rgb.svg'
          alt='incharge_continental_stacked_spacing_rgb'
        />
      </div>
      <p>
        The clear space around the logotype is defined by the height of the
        capital I in the wordmark, see illustration.
      </p>
      <div style={largeContainer}>
        <img
          src='/img/logotypes/incharge/nordic/linear/linear_spacing_rgb.svg'
          alt='incharge_continental_stacked_spacing_rgb'
        />
      </div>
      <p>
        The clear space also defines the area between the wordmark and the
        symbol. This is not to be changed.
      </p>
      <section className='p-2 vf-border-top-gray-200'></section>
      <h2 className='use-in-toc'>InCharge Nordic color versions</h2>
      <p>
        The InCharge Primary stacked logotype in color with grey wordmark is the
        default color version and should always be used when possible. The
        negative logotype with white wordmark is used when placed on a dark
        background or photo. The 1-colored logotype (black) is used when only 1
        colored printing is possible.
      </p>

      <div style={smallContainer}>
        <div style={column}>
          <h4>Primary - default color version</h4>
          <p>Stacked logotype color, positive and negative.</p>
          <div style={imgContainer}>
            <img
              src='/img/guidelines/logotype/incharge_nordic_stacked_color_version.png'
              alt='incharge_logotype_nordic_stacked_color_version'
              width='100%'
            />
          </div>
        </div>
        <div style={column}>
          <h4>Primary</h4>
          <p>Linear logotype color, positive and negative.</p>
          <div style={imgContainer}>
            <img
              src='/img/guidelines/logotype/incharge_nordic_linear_color_version.png'
              alt='incharge_logotype_nordic_linear_color_version'
              width='100%'
            />
          </div>
        </div>
      </div>
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
  justifyContent: 'space-between'
}

const column = {
  width: 'calc(50% - 12px)'
}

const imgContainer = {
  display: "flex",
  alignItems: "center",
  height:"334px"
}

export default InChargeNordic

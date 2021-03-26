import React, { Fragment } from 'react'

import PageHeader from '../PageHeader'
import Continental from './Continental'
import Nordic from './Nordic'
import styles from '../Guidelines.scss'

const TextPrimary = '/img/guidelines/logotype/Group12.png'
const LogoPrimary = '/img/guidelines/logotype/Group14.png'
const wordmarkAndSymbol = '/img/guidelines/logotype/wordmarkAndSymbol.png'
const placedCentered = '/img/guidelines/logotype/placedCentered.png'
const boldInPlacement = '/img/guidelines/logotype/boldInPlacement.png'
const avatarSymbol = '/img/guidelines/logotype/avatarSymbol.png'
const centeredOnTheSetting = '/img/guidelines/logotype/centeredOnTheSetting.png'
const clearspace = '/img/guidelines/logotype/clearspace.png'
const Group22 = '/img/guidelines/logotype/Group22.png'
const Group23 = '/img/guidelines/logotype/Group23.png'
const Group24 = '/img/guidelines/logotype/Group24.png'
const Group25 = '/img/guidelines/logotype/Group25.png'
const Group26 = '/img/guidelines/logotype/Group26.png'
const Group27 = '/img/guidelines/logotype/Group27.png'
const Group28 = '/img/guidelines/logotype/Group28.png'
const Group29 = '/img/guidelines/logotype/Group29.png'
const Group30 = '/img/guidelines/logotype/Group30.png'
const Group31 = '/img/guidelines/logotype/Group31.png'

const Logotype = () => {
  return (
    <Fragment>
      <PageHeader title='Logotype' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row'>
        <div className='vf-col'>
          <p className={styles.guidelinesText}>
            The logotype consists of two parts, the wordmark Vattenfall and the
            yellow and blue symbol.
          </p>
          <p className={styles.guidelinesText}>
            The wordmark has been modernised but kept in capital letters to
            reflect the confident leadership that Vattenfall takes towards a
            fossil free future. The symbol balances the wordmark with the
            organic, round shape, visually enhancing a global aspiration to be a
            role model for sustainable change.
          </p>
          <p className={styles.guidelinesText}>
            The logotype represents Vattenfall’s broader thinking and ability to
            act on a larger scale, to provide real solutions to climate smarter
            living and to enable fossil free living within one generation.
          </p>
        </div>
      </div>
      <div className='vf-row w-75'>
        <div className='vf-col-sm-12 vf-col-md-6'>
          <img style={{ width: '100%' }} src={TextPrimary} />
        </div>
        <div className='vf-col-sm-12 vf-col-md-6'>
          <img style={{ width: '100%' }} src={LogoPrimary} />
        </div>
      </div>

      <div className='row align-items-start'>
        <h2 className='use-in-toc'>Key principles</h2>
        <p className={styles.guidelinesText}>
          1. The Vattenfall logotype consists of two parts, the wordmark
          "Vattenfall" and the yellow and blue symbol.
        </p>
        <p className={styles.guidelinesText}>
          2. Whenever possible, the logotype should be placed centered on a
          format. This is the best way to visually place the logotype on an
          application.
        </p>
        <p className={styles.guidelinesText}>
          3. The logotype should always be placed in a prominent position. For
          further guidance, please see the placement section, size section and
          the templates for common formats.
        </p>
        <p className={styles.guidelinesText}>
          4. In certain applications and circumstances, the symbol may be used
          on its own, or decoupled from the wordmark, e.g., as an avatar in
          social media. As a general rule if you are uncertain, please don’t use
          the symbol on its own.
        </p>
        <p className={styles.guidelinesText}>
          5. The stacked logotype should only be used on applications where it
          can be centered on the setting area. Please see the Clearspace and
          Placement sections for more guidance.
        </p>
        <p className={styles.guidelinesText}>
          6. The clearspace around the linear logotype is equal to half of the
          size of the Vattenfall symbol. Please see the Clearspace section for
          more details.
        </p>
      </div>
      <div className='vf-row w-75'>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={wordmarkAndSymbol} />
          <p
            className='pt-2'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            1. Wordmark and symbol
          </p>
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={placedCentered} />
          <p
            className='pt-2'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            2. Placed centered
          </p>
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={boldInPlacement} />
          <p
            className='pt-2'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            3. Bold in placement
          </p>
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={avatarSymbol} />
          <p
            className='pt-2'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            4. Avatar symbol
          </p>
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={centeredOnTheSetting} />
          <p
            className='pt-2'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            5. Centered on the setting
          </p>
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={clearspace} />
          <p
            className='pt-2'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            6. Clearspace
          </p>
        </div>
      </div>
      <div className='row align-items-start'>
        <h2 className='use-in-toc'>Colour versions</h2>
        <p className={styles.guidelinesText}>
          The Vattenfall linear logotype and the Vattenfall stacked logotype are
          available in two different versions: the primary logotype and the
          1-coloured logotype. The primary logotype has a coloured symbol and is
          available with grey, black or negative wordmark. The logotype, with
          grey wordmark, is the default version and should primarily be used
          where possible. The 1-coloured logotype has both symbol and wordmark
          in one colour, either black or negative.
        </p>
      </div>
      <div className='row align-items-start'>
        <h4 className='use-in-toc'>Linear – Logos / Horizontal / Medium</h4>
        <p className={styles.guidelinesText}>
          The clearspace around the linear logotype is defined by the Vattenfall
          Symbol. The symbol is 1X, and the clearspace is 1x around all sides of
          the logotype.
        </p>
      </div>
      <div className='vf-row w-75'>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group22} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group23} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group24} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group25} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group26} />
        </div>
      </div>
      <div className='row align-items-start'>
        <h4 className='use-in-toc'>Stacked – Logos / Stacked</h4>
        <p className={styles.guidelinesText}>
          The clearspace around the logotype is half of the symbols height (1X).
          The clearspace is 1X around all sides of the logotype.
        </p>
      </div>
      <div className='vf-row w-75'>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group27} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group28} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group29} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group30} />
        </div>
        <div className='vf-col-lg-3'>
          <img style={{ width: '100%' }} src={Group31} />
        </div>
      </div>
      <section className='p-2 vf-border-top-gray-200'></section>
      <Continental />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Nordic />
    </Fragment>
  )
}

export default Logotype

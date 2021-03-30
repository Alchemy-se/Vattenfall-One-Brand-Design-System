import React, { Fragment } from 'react'
import Column from '../Column'
import styles from './Buttons.scss'

const InChargeGreenButtons = ({ title, label }) => {
  return (
    <Fragment>
      <div className='vf-row w-75'>
        <div style={{ margin: '0' }} className='vf-col'>
          <h4 className='use-in-toc'>{title}</h4>
          <p>
            The green button indicated our main focus action. There is only one
            green button per component. If you need more buttons in one
            component, use secondary buttons. Only to be combined with Teritary
            Black Button.
          </p>
        </div>
      </div>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div className='vf-col'>
            <button
              type='button'
              className={`vf-btn vf-btn--lg vf-btn--incharge-nordic ${styles.disableHover}`}
            >
              {label}
            </button>
          </div>
          <div className='vf-col'>
            <button
              type='button'
              className={`vf-btn vf-btn--incharge-nordic ${styles.disableHover}`}
            >
              {label}
            </button>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className='vf-col'>
            <button
              type='button'
              className={`vf-btn vf-btn--lg vf-btn--incharge-nordic ${styles.greenButtonHover}`}
            >
              {label}
            </button>
          </div>
          <div className='vf-col'>
            <button
              type='button'
              className={`vf-btn vf-btn--incharge-nordic ${styles.greenButtonHover}`}
            >
              {label}
            </button>
          </div>
        </Column>
        <Column title={'Active'}>
          <div className='vf-col'>
            <button
              type='button'
              className={`vf-btn vf-btn--lg vf-btn--incharge-nordic ${styles.greenButtonActive}`}
            >
              {label}
            </button>
          </div>
          <div className='vf-col'>
            <button
              type='button'
              className={`vf-btn vf-btn--incharge-nordic ${styles.greenButtonActive}`}
            >
              {label}
            </button>
          </div>
        </Column>
        <Column title={'Disabled'}>
          <div className='vf-col'>
            <button
              disabled
              type='button'
              className={`vf-btn vf-btn--lg vf-btn--incharge-nordic ${styles.disableHover}`}
            >
              {label}
            </button>
          </div>
          <div className='vf-col'>
            <button
              disabled
              type='button'
              className={`vf-btn vf-btn--incharge-nordic ${styles.disableHover}`}
            >
              {label}
            </button>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}

export default InChargeGreenButtons

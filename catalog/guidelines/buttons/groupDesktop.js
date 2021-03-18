import React, { Fragment } from 'react'

const groupDesktop = ({title}) => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div style={{ margin: '0' }} className='vf-col'>
          <h4 className='use-in-toc'>{title}</h4>
        </div>
      </div>
     
      <div className='vf-btn-group' role='group' aria-label='Basic example'>
        <button
          type='button'
          className='vf-btn-group__btn vf-btn vf-btn--secondary'
        >
          Left
        </button>
        <button
          type='button'
          className='vf-btn-group__btn vf-btn vf-btn--secondary'
        >
          Middle
        </button>
        <button
          type='button'
          className='vf-btn-group__btn vf-btn vf-btn--secondary'
        >
          Middle
        </button>
        <button
          type='button'
          className='vf-btn-group__btn vf-btn vf-btn--secondary'
        >
          Right
        </button>
      </div>
    </Fragment>
  )
}

export default groupDesktop

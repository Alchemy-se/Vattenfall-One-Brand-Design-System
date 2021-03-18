import React, { Fragment } from 'react'
// LAYOUT
import Column from '../Column'

const Link = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div className='link vf-visual-pickers__link' style={style}>
            <a href='#links'>
              Link <span className='vf-visual-pickers__icon vf-icon-check' />
            </a>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className='link vf-visual-pickers__link' style={style}>
            <a href='#links'>
              Link <span className='vf-visual-pickers__icon vf-icon-check' />
            </a>
          </div>
        </Column>
        <Column title={'Active'}>
          <div className='link vf-visual-pickers__link' style={style}>
            <a href='#links'>
              Link <span className='vf-visual-pickers__icon vf-icon-check' />
            </a>
          </div>
        </Column>
        <Column title={'Disabled'}>
          <div className='link vf-visual-pickers__link' style={style}>
            <a href='#links'>
              Link <span className='vf-visual-pickers__icon vf-icon-check' />
            </a>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}
const style = {
    "maringBottom": "20px"
}
export default Link

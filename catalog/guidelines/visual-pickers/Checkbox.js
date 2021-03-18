import React, { Fragment } from 'react'
// LAYOUT
import Column from '../Column'

const Checkbox = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div className='vf-visual-pickers__checkbox' style={style}>
            <input type='checkbox' id='checkbox1' name='vf-visual-pickers' />
            <label className='vf-visual-pickers__label' htmlFor='checkbox1'>
              Checkbox
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className='vf-visual-pickers__checkbox' style={style}>
            <input type='checkbox' id='checkbox2' name='vf-visual-pickers' />
            <label className='vf-visual-pickers__label' htmlFor='checkbox2'>
              Checkbox
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
        <Column title={'Active'}>
          <div className='vf-visual-pickers__checkbox' style={style}>
            <input type='checkbox' id='checkbox3' name='vf-visual-pickers' />
            <label className='vf-visual-pickers__label' htmlFor='checkbox3'>
              Checkbox
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
        <Column title={'Disabled'}>
          <div className='vf-visual-pickers__checkbox' style={style}>
            <input type='checkbox' id='checkbox4' name='vf-visual-pickers' />
            <label className='vf-visual-pickers__label' htmlFor='checkbox4'>
              Checkbox
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}
const style = {
  maringBottom: '20px',
}
export default Checkbox

import React from 'react'

const Medium = ({
  id,
  type,
  select,
  divStyles,
  labelStyles,
  checkmark = '',
}) => {
  return (
    <div
      style={divStyles}
      className={`${'vf-visual-pickers__' + select} vf-visual-pickers-md`}
    >
      <input type={type} id={select + `-md-` + id} name='vf-visual-pickers' />
      <label
        style={labelStyles}
        className='vf-visual-pickers__label'
        htmlFor={select + `-md-` + id}
      >
        Option {id}
      </label>
      <span className={'vf-visual-pickers__icon' + ' ' + checkmark}></span>
    </div>
  )
}

export default Medium

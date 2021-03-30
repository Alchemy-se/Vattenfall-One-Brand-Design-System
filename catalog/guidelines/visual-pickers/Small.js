import React from 'react'

const Small = ({
  id,
  type,
  select,
  divStyles,
  labelStyles,
  checkmark = '',
}) => {
  return (
    <div
      className={`${'vf-visual-pickers__' + select} vf-visual-pickers-sm`}
      style={divStyles}
    >
      <input
        className={`${'vf-visual-pickers__' + select + '-input'}`}
        type={type}
        id={select + `-sm-` + id}
        name='vf-visual-pickers'
      />
      <label
        className='vf-visual-pickers__label'
        htmlFor={select + `-sm-` + id}
        style={labelStyles}
      >
        Option {id}
      </label>
      <span className={'vf-visual-pickers__icon' + ' ' + checkmark}></span>
    </div>
  )
}

export default Small

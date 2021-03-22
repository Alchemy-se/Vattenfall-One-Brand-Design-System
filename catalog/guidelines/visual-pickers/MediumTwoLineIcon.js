import React from 'react'

const MediumTwoLineIcon = ({
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
      className={`${
        'vf-visual-pickers__' + select
      } vf-visual-pickers-md-two-line-icon`}
    >
      <input
        type='radio'
        id={select + `-md-two-line-icon-` + id}
        name='vf-visual-pickers'
      />
      <label
        style={labelStyles}
        className='vf-visual-pickers__label'
        htmlFor={select + `-md-two-line-icon-` + id}
      >
        Option 1
        <span className='vf-icon-card-and-tag vf-visual-pickers__two-line-icon'></span>
      </label>
      <span className={'vf-visual-pickers__icon' + ' ' + checkmark}></span>
    </div>
  )
}

export default MediumTwoLineIcon

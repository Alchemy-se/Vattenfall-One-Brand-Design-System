import React from 'react'

const MediumTwoLine = ({
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
      } vf-visual-pickers-md-two-line`}
    >
      <input
        type={type}
        id={select + `-md-two-line-` + id}
        name='vf-visual-pickers'
      />
      <label
        style={labelStyles}
        className='vf-visual-pickers__label'
        htmlFor={select + `-md-two-line-` + id}
      >
        Option {id}{' '}
        <span className='vf-visual-pickers__second-line'>Second line</span>
      </label>
      <span className={'vf-visual-pickers__icon' + ' ' + checkmark}></span>
    </div>
  )
}

export default MediumTwoLine

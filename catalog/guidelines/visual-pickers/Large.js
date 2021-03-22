import React from 'react'

const Large = ({
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
      className={`${'vf-visual-pickers__' + select} vf-visual-pickers-lg`}
    >
      <input type={type} id={select + `-lg-` + id} name='vf-visual-pickers' />
      <label
        style={labelStyles}
        className='vf-visual-pickers__label'
        htmlFor={select + `-lg-` + id}
      >
        <img src='/img/visual-pickers/charger.png' alt='vf-charger' /> Option
        {id}
      </label>
      <span className={'vf-visual-pickers__icon' + ' ' + checkmark}></span>
    </div>
  )
}

export default Large

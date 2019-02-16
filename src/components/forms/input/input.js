import React, { Fragment } from 'react'

import './input.css'

const Input = ({
  labelText,
  placeholder,
  name,
  value,
  type,
  pattern,
  title,
  isReadOnly
}) => {
  const hasReadOnly = isReadOnly !== 'undefined' ? isReadOnly : false
  return (
    <Fragment>
      <label htmlFor={name}>{labelText}</label>
      <input
        className='form-control'
        placeholder={placeholder}
        id={name}
        name={name}
        value={value !== 'undefined' ? value : ''}
        type={type}
        pattern={pattern}
        title={title || ''}
        autoComplete='on'
        required
        readOnly={hasReadOnly}
      />
    </Fragment>

  )
}

export default Input

import React, { Fragment } from 'react'

const Textarea = ({
  labelText,
  placeholder,
  name,
  value,
  maxLength
}) => {
  return (
    <Fragment>
      <label htmlFor={name}>{labelText}</label>
      <textarea
        className='form-control'
        placeholder={placeholder}
        id={name}
        name={name}
        defaultValue={value !== 'undefined' ? value : ''}
        maxLength={maxLength}
        required />
    </Fragment>
  )
}

export default Textarea

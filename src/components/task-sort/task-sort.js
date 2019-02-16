import React from 'react'

const TaskSort = ({ data, sortField, currentPage, onSort }) => {
  const buttons = data.map(({ name, label }) => {
    const isActive = sortField === name
    const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary'
    return (
      <button
        key={name}
        type='button'
        className={`btn ${btnClass}`}
        onClick={() => onSort(currentPage, name)}>
        {label}
      </button>
    )
  })

  return (
    <div className='col-12'>
      <div className='btn-group'>
        {buttons}
      </div>
    </div>
  )
}

export default TaskSort

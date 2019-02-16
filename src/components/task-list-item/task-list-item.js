import React from 'react'
import { Link } from 'react-router-dom'

import './task-list-item.css'

const TaskListItem = ({ task, isLoggedIn }) => {
  const { id, username, email, text, status } = task
  return (
    <div className='card'>
      <div className='card-body'>
        <div>
          <h4 className='card-title'>{username}</h4>
          <h6 className='card-subtitle mb-2 text-muted'>{email}</h6>
          <p className='card-text'>
            {text}
          </p>
        </div>
        {
          status === 10 &&
          <div>
            <span className='badge badge-success'>Выполненно!</span>
          </div>
        }
        {
          isLoggedIn &&
          <Link
            to={{
              pathname: '/edit/:id',
              id: id
            }}>
            Редактировать
          </Link>
        }
      </div>
    </div>
  )
}

export default TaskListItem

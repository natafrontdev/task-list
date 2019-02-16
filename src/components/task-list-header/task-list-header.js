import React from 'react'
import { Link } from 'react-router-dom'

import './task-list-header.css'

const ButtonAuth = ({ isLoggedIn, onUnAuth }) => {
  return (
    isLoggedIn
      ? <Link to='/'>
        <div
          onClick={onUnAuth}
          className='btn btn-outline-primary'>
          Выйти
        </div>
      </Link>
      : <Link to='/login'>
        <div className='btn btn-outline-primary'>
          Войти
        </div>
      </Link>
  )
}

const TaskListHeader = ({ isLoggedIn, onUnAuth }) => {
  return (
    <header className='task-list-header row'>
      <div className='col-6'>
        <Link to='/' className='logo text-dark'>
          Список задач
        </Link>
      </div>
      <div className='col-6 text-right'>
        <ButtonAuth
          isLoggedIn={isLoggedIn}
          onUnAuth={onUnAuth} />
        <Link to='/create'>
          <div className='btn btn-primary'>
            Добавить задачу
          </div>
        </Link>
      </div>
    </header>
  )
}

export default TaskListHeader

import React from 'react'

import Input from '../forms/input'

const LoginForm = ({ onSubmit, isLoggedIn }) => {
  return (
    <form
      id='login-form'
      onSubmit={onSubmit}>

      <div className='form-group'>
        <Input
          labelText={'Введите имя'}
          placeholder='Имя'
          name='username'
          type='text'
          pattern='[a-zA-Z0-9._%+-]{1,15}'
          title='Check yor name'
        />
      </div>

      <div className='form-group'>
        <Input
          labelText={'Введите ваш пароль'}
          placeholder='Пароль'
          name='password'
          type='password'
          pattern='[0-9]{1,3}$'
          title='Check your password'
        />
      </div>

      <button className='btn btn-success'>Войти</button>
    </form>
  )
}

export default LoginForm

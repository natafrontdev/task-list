import React from 'react'

import Input from '../forms/input'
import Textarea from '../forms/textarea'

const InputName = ({ isUserName }) => {
  const labelText = 'Введите имя'
  const placeholder = 'Имя'
  const name = 'username'
  const pattern = '[a-zA-Z0-9._%+-]{1,15}'
  const title = 'Name must be no more than 15 characters.'

  return (
    isUserName
      ? <Input
        labelText={labelText}
        name={name}
        value={isUserName}
        type='text'
        isReadOnly
      />
      : <Input
        labelText={labelText}
        placeholder={placeholder}
        name={name}
        type='text'
        pattern={pattern}
        title={title}
      />
  )
}

const TaskCreateForm = ({ onSubmit, isLoggedIn, userName }) => {
  const isUserName = isLoggedIn ? userName : ''

  return (
    <form
      id='task-create-form'
      onSubmit={onSubmit} >
      <div className='form-group'>
        <InputName isUserName={isUserName} />
      </div>

      <div className='form-group'>
        <Input
          labelText={'Введите ваш e-mail'}
          placeholder='e-mail'
          name='email'
          type='email'
          pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          title='Check your email'
        />
      </div>

      <div className='form-group'>
        <Textarea
          labelText={'Введите текст задачи'}
          placeholder='Текст'
          name='text'
          maxLength='100'
        />
      </div>

      <button className='btn btn-success'>Отправить задачу!</button>
    </form>
  )
}

export default TaskCreateForm

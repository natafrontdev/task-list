import React, { Component } from 'react'

import Textarea from '../forms/textarea'

class TaskEditForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: this.props.editTaskStatus
    }

    this.handleChecked = () =>
      this.setState(({ status }) => {
        return { status: status === 0 ? 10 : 0 }
      })
  }

  render () {
    const { onSubmit, editTaskText } = this.props

    return (
      <form
        id='task-edit-form'
        onSubmit={onSubmit} >

        <div className='form-group'>
          <Textarea
            labelText={'Редактировать текст задачи'}
            name='text'
            maxLength='100'
            value={editTaskText}
          />
        </div>

        <div className='form-group'>
          <label>
            <input type='checkbox' onChange={this.handleChecked} checked={this.state.status} />&nbsp; Задача выполненна
          </label>
        </div>

        <input type='hidden' name='status' value={this.state.status} />
        <button className='btn btn-success'>Редактировать задачу</button>
      </form>
    )
  }
}

export default TaskEditForm

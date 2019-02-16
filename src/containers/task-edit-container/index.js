import React, { Component } from 'react'
import md5 from 'js-md5'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import { withTaskstoreService } from '../../components/hoc'
import { compose } from '../../utils'

import TaskEditForm from '../../components/task-edit-form'

class TaskEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isEdit: false
    }

    this.encodeURI = (str) => {
      return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
    }

    this.handleSubmit = (event) => {
      event.preventDefault()

      const data = new FormData(event.target)

      // const paramText = this.encodeURI("text");
      // const paramStatus = this.encodeURI("status");
      // const paramToken = this.encodeURI("token");
      // const paramSignature = this.encodeURI("signature");

      const taskText = this.encodeURI(data.get('text'))
      const taskStatus = this.encodeURI(data.get('status'))
      const taskToken = this.encodeURI('beejee')

      const params = 'status=' + taskStatus + '&text=' + taskText + '&token=' + taskToken

      var taskSignature = md5.create()
      taskSignature.update(params)

      const paramsToServer = params + '&signature=' + taskSignature
      this.props.taskstoreService.editTask(this.props.editTask.id, paramsToServer)

      this.setState(({ isEdit }) => {
        return {
          isEdit: true
        }
      })
    }
  }

  render () {
    const { isLoggedIn, userName, editTask } = this.props

    if (!isLoggedIn) {
      return (
        <div>
          Чтобы редактировать задачи нужно&nbsp;
          <Link to='/login'>войти</Link>
        </div>
      )
    }

    if (this.state.isEdit) {
      return <Redirect to='/' />
    }

    return (
      <TaskEditForm
        onSubmit={this.handleSubmit}
        isLoggedIn={isLoggedIn}
        userName={userName}
        editTaskText={editTask.text}
        editTaskStatus={editTask.status} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isLoggedIn, userName } = state
  const editTask = state.tasks.find(task => task.id === ownProps.taskEditId)

  return { isLoggedIn, userName, editTask }
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps)
)(TaskEditContainer)

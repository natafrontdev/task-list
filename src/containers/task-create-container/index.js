import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withTaskstoreService } from '../../components/hoc'
import { compose } from '../../utils'

import TaskCreateForm from '../../components/task-create-form'

class TaskCreateContainer extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = (event) => {
      event.preventDefault()
      const data = new FormData(event.target)
      this.props.taskstoreService.postNewTask(data)
      document.getElementById('task-create-form').reset()
    }
  }

  render () {
    const { isLoggedIn, userName } = this.props

    return (
      <TaskCreateForm
        onSubmit={this.handleSubmit}
        isLoggedIn={isLoggedIn}
        userName={userName} />
    )
  }
}

const mapStateToProps = ({ isLoggedIn, userName }) => {
  return { isLoggedIn, userName }
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps)
)(TaskCreateContainer)

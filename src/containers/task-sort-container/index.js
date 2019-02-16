import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withTaskstoreService } from '../../components/hoc'
import { fetchTasks } from '../../actions'
import { compose } from '../../utils'

import TaskSort from '../../components/task-sort'

class TaskSortContainer extends Component {
  constructor (props) {
    super(props)

    this.buttons = [
      {
        name: 'id',
        label: 'Default'
      },
      {
        name: 'username',
        label: 'Username'
      },
      {
        name: 'email',
        label: 'Email'
      },
      {
        name: 'status',
        label: 'Status'
      }
    ]
  }

  render () {
    const { sortField, currentPage, fetchTasks } = this.props

    return (
      <TaskSort
        data={this.buttons}
        sortField={sortField}
        currentPage={currentPage}
        onSort={fetchTasks}
      />
    )
  }
};

const mapStateToProps = ({ currentPage, sortField }) => {
  return { currentPage, sortField }
}

const mapDispatchToProps = (dispatch, { taskstoreService }) => {
  return {
    fetchTasks: fetchTasks(taskstoreService, dispatch)
  }
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TaskSortContainer)

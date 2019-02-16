import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withTaskstoreService } from '../../components/hoc'
import { fetchTasks } from '../../actions'
import { compose } from '../../utils'

import Spinner from '../../components/spinner'
import ErrorIndicator from '../../components/error-indicator'
import TaskList from '../../components/task-list'

class TaskListContainer extends Component {
  componentDidMount () {
    this.props.fetchTasks(this.props.currentPage, this.props.sortField)
  }

  render () {
    const { tasks, isLoggedIn, loading, error } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    if (!tasks || !tasks.length) {
      return <p>Список задач пуст</p>
    }

    return (
      <TaskList tasks={tasks} isLoggedIn={isLoggedIn} />
    )
  }
}

const mapStateToProps = ({ tasks, isLoggedIn, currentPage, sortField, loading, error }) => {
  return { tasks, isLoggedIn, currentPage, sortField, loading, error }
}

const mapDispatchToProps = (dispatch, { taskstoreService }) => {
  return {
    fetchTasks: fetchTasks(taskstoreService, dispatch)
  }
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TaskListContainer)

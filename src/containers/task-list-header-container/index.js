import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withTaskstoreService } from '../../components/hoc'
import { unAuthUser } from '../../actions'
import { compose } from '../../utils'

import TaskListHeader from '../../components/task-list-header'

class TaskListHeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.handleUnAuth = () => {
      this.props.unAuthUser(false)
    }
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <TaskListHeader
        isLoggedIn={isLoggedIn}
        onUnAuth={this.handleUnAuth} />
    )
  }
}

const mapStateToProps = ({ isLoggedIn }) => {
  return { isLoggedIn }
}

const mapDispatchToProps = {
  unAuthUser
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TaskListHeaderContainer)

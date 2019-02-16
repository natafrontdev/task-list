import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { withTaskstoreService } from '../../components/hoc'
import { authUser, unAuthUser } from '../../actions'
import { compose } from '../../utils'

import LoginForm from '../../components/login-form'

class LoginFormContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authState: 'pending'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const data = new FormData(event.target)

    let username = data.get('username')
    let password = data.get('password')

    let isAdmin = username === 'admin' && password === '123'

    if (isAdmin) {
      this.props.authUser(isAdmin)
      this.setState({ authState: 'done' })
    }
  }

  render () {
    const { isLoggedIn } = this.props

    if (this.state.authState === 'done') {
      return <Redirect to='/' />
    }

    return (
      <LoginForm onSubmit={this.handleSubmit} isLoggedIn={isLoggedIn} />
    )
  }
}

const mapStateToProps = ({ isLoggedIn }) => {
  return { isLoggedIn }
}

const mapDispatchToProps = {
  authUser,
  unAuthUser
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginFormContainer)

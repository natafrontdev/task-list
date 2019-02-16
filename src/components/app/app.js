import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TaskListHeaderContainer from '../../containers/task-list-header-container'
import { HomePage, LoginPage, TaskCreatePage, TaskEditPage } from '../pages'

const App = () => {
  return (
    <main role='main' className='container'>
      <TaskListHeaderContainer />
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact />
        <Route
          path='/login'
          component={LoginPage}
        />
        <Route
          path='/create'
          component={TaskCreatePage}
        />
        <Route
          path='/edit/:id'
          component={TaskEditPage}
        />
      </Switch>
    </main>
  )
}

export default App

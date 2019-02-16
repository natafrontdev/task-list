import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import TaskstoreService from './services/taskstore-service'
import { TaskstoreServiceProvider } from './components/taskstore-service-context'

import store from './store'

const taskstoreService = new TaskstoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TaskstoreServiceProvider value={taskstoreService}>
        <Router>
          <App />
        </Router>
      </TaskstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)

import React, { Fragment } from 'react'

import TaskSortContainer from '../../containers/task-sort-container'
import TaskListContainer from '../../containers/task-list-container'
import PaginationContainer from '../../containers/pagination-container'

const HomePage = () => {
  return (
    <Fragment>
      <div className='row'>
        <TaskSortContainer />
      </div>
      <div className='row'>
        <TaskListContainer />
      </div>
      <div className='row'>
        <PaginationContainer />
      </div>
    </Fragment>
  )
}

export default HomePage

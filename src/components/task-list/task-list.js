import React, { Fragment } from 'react'

import TaskListItem from '../task-list-item'

const TaskList = ({ tasks, isLoggedIn }) => {
  return (
    <Fragment>
      {
        tasks.map((task) => {
          return (
            <div className='col-sm-4' key={task.id}>
              <TaskListItem task={task} isLoggedIn={isLoggedIn} />
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default TaskList

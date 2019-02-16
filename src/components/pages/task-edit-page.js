import React from 'react'
import TaskEditContainer from '../../containers/task-edit-container'

const TaskEditPage = (props) => {
  const taskId = props.location.id
  return <TaskEditContainer taskEditId={taskId} />
}

export default TaskEditPage

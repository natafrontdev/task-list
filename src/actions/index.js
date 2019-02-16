
const tasksRequested = () => {
  return {
    type: 'FETCH_TASKS_REQUEST'
  }
}

const tasksLoaded = (newtasks, currentPage, sortField) => {
  return {
    type: 'FETCH_TASKS_SUCCESS',
    payload: newtasks,
    currentPage,
    sortField
  }
}

const tasksError = (error) => {
  return {
    type: 'FETCH_TASKS_FAILURE',
    payload: error
  }
}

const authUser = (isLogin) => {
  return {
    type: 'AUTH_USER',
    payload: isLogin
  }
}

const unAuthUser = (isLogin) => {
  return {
    type: 'UNAUTH_USER',
    payload: isLogin
  }
}

const getTaskId = (taskId) => {
  return {
    type: 'GET_TASK_ID',
    payload: taskId
  }
}
const fetchTasks = (taskstoreService, dispatch) => (page, sortField) => {
  dispatch(tasksRequested())
  taskstoreService.getTasks(page, sortField)
    .then((data) => dispatch(tasksLoaded(data, page, sortField)))
    .catch((err) => dispatch(tasksError(err)))
}

export {
  fetchTasks,
  authUser,
  unAuthUser,
  getTaskId
}

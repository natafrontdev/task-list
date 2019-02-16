
const initialState = {
  tasks: [],
  totalTaskCount: 0,
  currentPage: 1,
  itemsPerPage: 3,
  sortField: 'id',
  loading: true,
  error: null,
  isLoggedIn: false,
  userName: 'admin'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_REQUEST':
      return {
        ...state,
        tasks: [],
        loading: true,
        error: null
      }

    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.payload.tasks,
        totalTaskCount: action.payload.total_task_count,
        currentPage: action.currentPage,
        sortField: action.sortField,
        loading: false,
        error: null
      }

    case 'FETCH_TASKS_FAILURE':
      return {
        ...state,
        tasks: [],
        loading: false,
        error: action.payload
      }

    case 'AUTH_USER':
      return {
        ...state,
        isLoggedIn: action.payload
      }

    case 'UNAUTH_USER':
      return {
        ...state,
        isLoggedIn: action.payload
      }

    default:
      return state
  }
}

export default reducer

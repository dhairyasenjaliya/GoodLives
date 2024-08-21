const initialState = {
  isAuthenticated: false,
  user: null,
}

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer

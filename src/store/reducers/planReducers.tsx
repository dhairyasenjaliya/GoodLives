const initialState = {
  dailyExercisePlan: [],
}

function planReducers(state = initialState, action: any) {
  switch (action.type) {
    case "COMPLETE_PLAN":
      return {
        ...state,
        dailyExercisePlan: action.payload,
      }

    case "FETCH_PLAN":
      return {
        ...state,
        dailyExercisePlan: action.payload,
      }

    default:
      return state
  }
}

export default planReducers

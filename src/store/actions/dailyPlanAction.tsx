export const FetchListOfPlan = (plan: any) => ({
  type: "FETCH_PLAN",
  payload: plan,
})

export const UpdateDailyPlan = (plan: any) => ({
  type: "COMPLETE_PLAN",
  payload: plan,
})

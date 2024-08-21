import { PlanType } from "@/components"

export const checkTypeOfPlan = (type: PlanType) => {
  if (type === "morning") {
    return require("@assets/images/morningCard.png")
  }
  if (type === "afternoon") {
    return require("@assets/images/afternoonCard.png")
  }
  if (type === "evening") {
    return require("@assets/images/eveningCard.png")
  }

  throw new Error(`Unknown PlanType: ${type}`)
}

export const checkEmptyObject = (data: []) => {
  return Object.keys(data).length !== 0
}

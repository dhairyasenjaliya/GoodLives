import { PlanType } from "@/components"

export const checkTypeOfPlan = (type: PlanType) => {
  if (type === "Morning") {
    return require("@assets/images/morningCard.png")
  }
  if (type === "Afternoon") {
    return require("@assets/images/afternoonCard.png")
  }
  if (type === "Evening") {
    return require("@assets/images/eveningCard.png")
  }

  throw new Error(`Unknown PlanType: ${type}`)
}

import { PlanType } from "@/components"

export interface ExerciseInterface {
  id: number
  exerciseName: string
  description: string
  duration: string
  coin: number
  isCompleted: boolean
  type: PlanType
}

export const dailyExercisePlanMock: ExerciseInterface[] = [
  {
    id: 1,
    exerciseName: "Morning Meditation 1",
    description: "Affirmation for day",
    duration: "6 Min",
    coin: 10,
    isCompleted: false,
    type: "morning",
  },
  {
    id: 2,
    exerciseName: "Morning Meditation 2",
    description: "Affirmation for day",
    duration: "6 Min",
    coin: 10,
    isCompleted: false,
    type: "morning",
  },

  {
    id: 3,
    exerciseName: "Afternoon Meditation 1",
    description: "Affirmation for day",
    duration: "6 Min",
    coin: 10,
    isCompleted: false,
    type: "afternoon",
  },
  {
    id: 4,
    exerciseName: "Afternoon Meditation 2",
    description: "Affirmation for day",
    duration: "6 Min",
    coin: 10,
    isCompleted: false,
    type: "afternoon",
  },

  {
    id: 5,
    exerciseName: "Evening Meditation 1",
    description: "Affirmation for day",
    duration: "6 Min",
    coin: 10,
    isCompleted: false,
    type: "evening",
  },
  {
    id: 6,
    exerciseName: "Evening Meditation 2",
    description: "Affirmation for day",
    duration: "6 Min",
    coin: 10,
    isCompleted: false,
    type: "evening",
  },
]

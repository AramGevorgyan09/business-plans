import type { BusinessPlanTypes } from "./enums/business-plan-types"

export interface BusinessPlan {
  type: BusinessPlanTypes
  img: string
  name: string
  price: number
  description: string
  region: string
  school: string
  teacher: string
  students: string[]
  phone: string
  email: string
}

import {
  getAnnualContribution,
  getAnnualPassiveIncome,
  getCurrentlyIncomeSaved,
  getFinalValue,
  getMonthlyPassiveIncome,
} from '@src/income/domain/services/calc'
import type { Income, IncomeDetail } from '@src/income/domain/model'

const createIncomeDetail = (
  income: Income,
  lastIncomeSaved:number
): IncomeDetail => {
  const annualYield = income.applicationYield
  const incomeSaved = getCurrentlyIncomeSaved(income)
  const annualContribution = getAnnualContribution({ saved: incomeSaved })(
    lastIncomeSaved
  )
  const finalValue = getFinalValue({
    annualYield,
    annualContribution,
  })
  const annualPassive = getAnnualPassiveIncome(income)({ finalValue })
  const monthlyPassive = getMonthlyPassiveIncome(income)({ finalValue })

  return {
    annualContribution,
    annualYield,
    finalValue,
    annualPassive,
    monthlyPassive,
  }
}

const isLessThanOrEqualZero = (value: number): boolean => value <= 0

const isAnyZeroValue = (data: Record<string, number>) =>
  Object.values(data).some(isLessThanOrEqualZero)

export const createIncomeDetails = (income: Income): IncomeDetail[] => {
  let currentFinalValue = 0
  let currentMonthlyPassiveIncome = 0
  const incomeDetails: IncomeDetail[] = []

  if (isAnyZeroValue(income)) return incomeDetails

  while (currentMonthlyPassiveIncome < income.desired) {
    const incomeDetail = createIncomeDetail(income, currentFinalValue)
    currentFinalValue = incomeDetail.finalValue
    currentMonthlyPassiveIncome = incomeDetail.monthlyPassive

    incomeDetails.push(incomeDetail)
  }

  return incomeDetails
}

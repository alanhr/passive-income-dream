import { calcService } from '@src/income/domain/services'
import type { Income, IncomeDetail } from '@src/income/domain/model'

const createIncomeDetail = (
  income: Income,
  lastIncomeSaved: number
): IncomeDetail => {
  const annualYield = income.applicationYield
  const incomeSaved = calcService.getCurrentlyIncomeSaved(income)
  const annualContribution = calcService.getAnnualContribution({
    saved: incomeSaved,
  })(lastIncomeSaved)
  const finalValue = calcService.getFinalValue({
    annualYield,
    annualContribution,
  })
  const annualPassive = calcService.getAnnualPassiveIncome(income)({
    finalValue,
  })
  const monthlyPassive = calcService.getMonthlyPassiveIncome(income)({
    finalValue,
  })

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

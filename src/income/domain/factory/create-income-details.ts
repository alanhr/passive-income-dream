import {
  getAnnualContribution,
  getAnnualPassiveIncome,
  getCurrentlyIncomeSaved,
  getFinalValue,
  getMonthlyPassiveIncome,
} from '../services/calc'
import type { Income, IncomeDetail } from '../model'

const createIncomeDetail = (
  income: Income,
  lastIncomeSaved = 0
): IncomeDetail => {
  const incomeSaved = getCurrentlyIncomeSaved(income)
  const annualContribution = getAnnualContribution(incomeSaved, lastIncomeSaved)
  const annualYield = income.applicationYield
  const finalValue = getFinalValue({
    annualYield,
    annualContribution,
  })
  const annualPassiveIncome = getAnnualPassiveIncome(income)({ finalValue })
  const monthlyPassiveIncome = getMonthlyPassiveIncome(income)({ finalValue })

  return {
    annualContribution,
    annualYield,
    finalValue,
    annualPassiveIncome,
    monthlyPassiveIncome,
  }
}

export const createIncomeDetails = (income: Income): IncomeDetail[] => {
  let currentFinalValue = 0
  let currentMonthlyPassiveIncome = 0
  const incomeDetails: IncomeDetail[] = []

  while (currentMonthlyPassiveIncome < income.desiredIncome) {
    const incomeDetail = createIncomeDetail(income, currentFinalValue)
    currentFinalValue = incomeDetail.finalValue
    currentMonthlyPassiveIncome = incomeDetail.monthlyPassiveIncome

    incomeDetails.push(incomeDetail)
  }

  return incomeDetails
}

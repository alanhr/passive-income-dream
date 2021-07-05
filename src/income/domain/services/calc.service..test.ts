import * as calcService from './calc.service'
import { Income, IncomeDetail } from '../model';

describe('Calc service', () => {
  const income: Income = {
    applicationYield: 8,
    passiveYield: 4,
    saved: 25,
    desired: 1500,
    current: 2000,
  }

  test('should return the income goal', () => {
    const expectedValue = 450000
    const result = calcService.getIncomeGoal(income)

    expect(result).toEqual(expectedValue)
  })

  test('should return the annual contribution', () => {
    const expectedValue = 300
    const result = calcService.getAnnualContribution(income)(0)

    expect(result).toEqual(expectedValue)
  })

  test('should return the final value', () => {
    const expectedValue = 324
    const result = calcService.getFinalValue({
      annualContribution: 300,
      annualYield: income.applicationYield,
    })

    expect(result).toEqual(expectedValue)
  })

  test('should return the annual passive income', () => {
    const expectedValue = 12.96

    const finalValue = calcService.getFinalValue({
      annualContribution: 300,
      annualYield: income.applicationYield,
    })

    const result = calcService.getAnnualPassiveIncome(income)({
      finalValue,
    })

    expect(result).toEqual(expectedValue)
  })

  test('should return the monthly passive income', () => {
    const expectedValue = 1.08

    const finalValue = calcService.getFinalValue({
      annualContribution: 300,
      annualYield: income.applicationYield,
    })

    const result = calcService.getMonthlyPassiveIncome(income)({
      finalValue,
    })

    expect(result).toEqual(expectedValue)
  })
})

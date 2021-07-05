import { createIncomeDetails } from './create-income-details.factory'
import type { Income } from '@src/income/domain/model';

describe('Create income details', () => {
  test('should return a list of income details', () => {
    const income:Income = {
      applicationYield: 8,
      passiveYield:4,
      saved:25,
      desired: 1500,
      current: 2000,
    }

    const result = createIncomeDetails(income)

    expect(result.length).toBeGreaterThanOrEqual(1)

    expect(income.desired).toBeLessThanOrEqual(result[result.length -1].monthlyPassive)
  })

  test('should return empty array if object contains zero', () => {
    const income: Income = {
      applicationYield: 0,
      passiveYield: 4,
      saved: 25,
      desired: 1500,
      current: 2000,
    }

    const result = createIncomeDetails(income)

    expect(result).toEqual([])
  })

})

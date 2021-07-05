import { incomeMachine } from './income.store'
import { IncomeDetail } from '@src/income/domain/model'

describe('Income Store', () => {
  test('should update income field when call UPDATE type', () => {
    const expectedValue = 1500

    const actualState = incomeMachine.transition('fields', {
      field: 'desired',
      value: 1500,
      type: 'UPDATE',
    })

    expect(actualState.changed).toBeTruthy()

    expect(actualState.context.income.desired).toEqual(expectedValue)
  })

  test('should allow add details when income was filled ', () => {
    const detail: IncomeDetail = {
      annualContribution: 0,
      annualPassive: 0,
      annualYield: 0,
      finalValue: 0,
      monthlyPassive: 0,
    }

    const actualState = incomeMachine
      .withContext({
        income: {
          desired: 1,
          current: 2,
          saved: 1,
          applicationYield: 1,
          passiveYield: 2,
        },
        details: [],
      })
      .transition('fields', {
        details: [detail],
        type: 'ADD_DETAILS',
      })

    expect(actualState.changed).toBeTruthy()
  })

  test('must not change the details when cond is false', () => {
    const detail: IncomeDetail = {
      annualContribution: 0,
      annualPassive: 0,
      annualYield: 0,
      finalValue: 0,
      monthlyPassive: 0,
    }

    const actualState = incomeMachine.transition('fields', {
      details: [detail],
      type: 'ADD_DETAILS',
    })

    expect(actualState.changed).toBeFalsy()
  })
})

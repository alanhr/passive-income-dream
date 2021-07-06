import { mocked } from 'ts-jest/utils'

import { incomeStore } from '@src/income/infra/stores/income.store'
import { incomeRepository } from './income.repository'
import { IncomeRepository } from '@src/income/domain/contracts/income.repository'

jest.mock('@src/income/infra/stores/income.store')

const mockedIncomeStore = mocked(incomeStore)

Object.defineProperty(mockedIncomeStore, 'state', {
  value: {
    context: {
      income: {
        desired: 0,
        current: 0,
        saved: 0,
        applicationYield: 0,
        passiveYield: 0,
      },
      details: [],
    },
  },
})

describe('Income Repository', () => {
  let repository: IncomeRepository

  beforeEach(() => {
    repository = incomeRepository(mockedIncomeStore)
  })

  afterEach(() => {
    mockedIncomeStore.send.mockClear()
  })

  test('should set income when call setIncomeValue', () => {
    repository.setIncomeValue('applicationYield')(10)

    expect(mockedIncomeStore.send).toHaveBeenCalledWith('UPDATE', {
      field: 'applicationYield',
      value: 10,
    })
  })

  test('should set details value when call setDetails', () => {
    repository.setDetails([])

    expect(mockedIncomeStore.send).toHaveBeenCalledWith('ADD_DETAILS', {
      details: [],
    })
  })

  test('should return income', () => {
    expect(repository.getIncome()).toEqual(
      expect.objectContaining({
        desired: 0,
        current: 0,
        saved: 0,
        applicationYield: 0,
        passiveYield: 0,
      })
    )
  })

  test('should return details', () => {
    expect(repository.getDetails()).toEqual(expect.any(Array))
  })
})

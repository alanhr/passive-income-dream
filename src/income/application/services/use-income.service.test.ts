import { mocked } from 'ts-jest/utils'

import { incomeStore } from '@src/income/infra/stores/income.store'
import type { useIncomeService } from './use-income.service'

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

describe('Use Income Service', () => {
  let incomeService: ReturnType<typeof useIncomeService>

  beforeEach(async () => {
    const { useIncomeService } = await import('./use-income.service')
    incomeService = useIncomeService()
  })

  afterEach(() => {
    mockedIncomeStore.send.mockClear()
  })

  test('should call store send when use setFieldValue', () => {
    incomeService.setFieldValue('applicationYield')(10)

    expect(mockedIncomeStore.send).toHaveBeenCalled()
  })

  test('should call store send when use handleSubmit', () => {
    incomeService.handleSubmit()

    expect(mockedIncomeStore.send).toHaveBeenCalled()
  })
})

import { IncomeRepository } from '@src/income/domain/contracts'
import type { Income, IncomeDetail } from '@src/income/domain/model'
import type { IncomeStore } from '@src/income/infra/stores'

const setIncomeValue =
  (store: IncomeStore) =>
  (field: keyof Income) =>
  (value: number): void => {
    store.send('UPDATE', { field, value })
  }

const getIncome = (store: IncomeStore) => (): Income => {
  return store.state.context.income
}
const getDetails = (store: IncomeStore) => (): IncomeDetail[] => {
  return store.state.context.details
}

const setDetails =
  (store: IncomeStore) =>
  (details: IncomeDetail[]): void => {
    store.send('ADD_DETAILS', { details })
  }

const incomeRepository = (store: IncomeStore): IncomeRepository => {
  return {
    setIncomeValue: setIncomeValue(store),
    getIncome: getIncome(store),
    getDetails: getDetails(store),
    setDetails: setDetails(store),
  }
}

export { incomeRepository }

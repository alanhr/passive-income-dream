import type { Income, IncomeDetail } from '@src/income/domain/model'
import type { IncomeStore } from '@src/income/infra/data/income-store'

const setValue =
  (store: IncomeStore) =>
  (field: keyof Income) =>
  (value: number): void => {
    store.send('UPDATE', { field, value })
  }

const getValue = (store: IncomeStore) => (field: keyof Income) => {
  return store.state.context.income[field]
}
const getIncome = (store: IncomeStore) => (): Income => {
  return store.state.context.income
}
const getDetails = (store: IncomeStore) => (): IncomeDetail[] => {
  return store.state.context.details
}

const sendData =
  (store: IncomeStore) =>
  (details: IncomeDetail[]): void => {
    store.send('SUBMIT', { details })
  }

const incomeRepository = (store: IncomeStore) => {
  return {
    setValue: setValue(store),
    getValue: getValue(store),
    getIncome: getIncome(store),
    getDetails: getDetails(store),
    sendData: sendData(store),
  }
}

export { incomeRepository }

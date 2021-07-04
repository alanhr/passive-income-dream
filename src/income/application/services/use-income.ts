import { incomeStore } from '@src/income/infra/data/income-store'
import { incomeRepository } from '@src/income/infra/repositories/income-repository'
import type { Income, IncomeDetail } from '@src/income/domain/model'
import { get, writable } from 'svelte/store'
import { createIncomeDetails } from '@src/income/domain/factories/create-income-details'

const repository = incomeRepository(incomeStore)

const income = writable<Income>(repository.getIncome())
const details = writable<IncomeDetail[]>(repository.getDetails())

incomeStore.subscribe(({ context }) => {
  income.set(context.income)
  details.set(context.details)
})

export const useIncomeService = () => {
  const setFieldValue = (name: keyof Income) => (value: number) => {
    repository.setValue(name)(value)
  }

  const handleSubmit = (): void => {
    repository.sendData(createIncomeDetails(get(income)))
  }

  return {
    setFieldValue,
    handleSubmit,
    income,
    details,
  }
}

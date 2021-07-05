import { Income, IncomeDetail } from '@src/income/domain/model'

export interface IncomeRepository {
  setIncomeValue: (field: keyof Income) => (value: number) => void
  getIncome: () => Income
  getDetails: () => IncomeDetail[]
  setDetails: (details: IncomeDetail[]) => void
}

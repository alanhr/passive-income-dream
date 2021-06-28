import { writable } from 'svelte/store'
import type { Income } from '../domain/model'

export const incomeForm = writable<Income>({
  desiredIncome: 0,
  monthlyIncome: 0,
  percentageSaved: 0,
  passiveYield: 1,
  applicationYield: 1,
})

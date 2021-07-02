import { writable } from 'svelte/store'
import type { Income } from '@src/income/domain/model'

export const incomeForm = writable<Income>({
  desired: 0,
  current: 0,
  saved: 0,
  applicationYield: 1,
  passiveYield: 1,
})

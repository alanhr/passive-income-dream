import { writable } from 'svelte/store'
import type { Income } from '../../domain/model'

export const incomeForm = writable<Income>({
  desired: 0,
  monthly: 0,
  saved: 0,
  applicationYield: 1,
  passiveYield: 1,
})

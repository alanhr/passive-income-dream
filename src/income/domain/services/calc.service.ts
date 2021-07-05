import type { Income, IncomeDetail } from '../model'

export const getCurrentlyIncomeSaved = ({
  current,
  saved,
}: Pick<Income, 'current' | 'saved'>): number =>
  Math.round(current * (saved / 100))

export const getIncomeGoal = ({
  desired,
  passiveYield,
}: Pick<Income, 'desired' | 'passiveYield'>): number =>
  (desired * 12) / (passiveYield / 100)

export const getAnnualContribution =
  ({ saved }: Pick<Income, 'saved'>) =>
  (lastIncomeSaved = 0): number =>
    saved * 12 + lastIncomeSaved

export const getFinalValue = ({
  annualContribution,
  annualYield,
}: Pick<IncomeDetail, 'annualContribution' | 'annualYield'>): number =>
  annualContribution + annualContribution * (annualYield / 100)

export const getAnnualPassiveIncome =
  ({ passiveYield }: Pick<Income, 'passiveYield'>) =>
  ({ finalValue }: Pick<IncomeDetail, 'finalValue'>): number =>
    (passiveYield / 100) * finalValue

export const getMonthlyPassiveIncome =
  (income: Pick<Income, 'passiveYield'>) =>
  (incomeDetail: Pick<IncomeDetail, 'finalValue'>): number =>
    getAnnualPassiveIncome(income)(incomeDetail) / 12

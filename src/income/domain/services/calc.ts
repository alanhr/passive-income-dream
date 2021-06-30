import type { Income, IncomeDetail } from '../model'

export const getCurrentlyIncomeSaved = ({
  monthlyIncome,
  percentageSaved,
}: Pick<Income, 'monthlyIncome' | 'percentageSaved'>): number =>
  Math.round(monthlyIncome * (percentageSaved / 100))

export const getIncomeGoal = ({
  desiredIncome,
  passiveIncome,
}: Pick<Income, 'desiredIncome' | 'passiveIncome'>): number =>
  (desiredIncome * 12) / (passiveIncome / 100)

export const getAnnualContribution = (
  incomeSaved: number,
  lastIncomeSaved = 0
): number => incomeSaved * 12 + lastIncomeSaved

export const getFinalValue = ({
  annualContribution,
  annualYield,
}: Pick<IncomeDetail, 'annualContribution' | 'annualYield'>): number =>
  annualContribution + annualContribution * (annualYield / 100)

export const getAnnualPassiveIncome =
  ({ passiveIncome }: Pick<Income, 'passiveIncome'>) =>
  ({ finalValue }: Pick<IncomeDetail, 'finalValue'>): number =>
    (passiveIncome / 100) * finalValue

export const getMonthlyPassiveIncome =
  (income: Pick<Income, 'passiveIncome'>) =>
  (incomeDetail: Pick<IncomeDetail, 'finalValue'>): number =>
    getAnnualPassiveIncome(income)(incomeDetail) / 12

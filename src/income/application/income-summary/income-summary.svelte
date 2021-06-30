<script lang="ts">
  import {
    getCurrentlyIncomeSaved,
    getIncomeGoal,
  } from '../../domain/services/calc'
  import { formatCurrency } from '../../../shared/helpers/format-currency'

  import type { Income } from '../../domain/model'

  export let incomeForm: Income

  $: currentyIncomeSaved = getCurrentlyIncomeSaved({
    monthlyIncome: incomeForm.monthlyIncome ?? 0,
    percentageSaved: incomeForm.percentageSaved ?? 1,
  })
  $: incomeGoal = getIncomeGoal({
    desiredIncome: incomeForm.desiredIncome ?? 0,
    passiveIncome: incomeForm.passiveIncome ?? 1,
  })
</script>

<div class="bg-primary-50  rounded-xl p-8">
  <h2 class="font-display text-accent-800 text-3xl text-center">Resumo</h2>
  <div class="h-0.5 bg-primary-300" />
  <div class="grid grid-cols-1 gap-4 pt-4">
    <div class="flex justify-between">
      <span>Economia Atual (%)</span>
      <span>{incomeForm.percentageSaved}%</span>
    </div>
    <div class="flex justify-between">
      <span>Economia Atual (R$)</span>
      <span>{formatCurrency(currentyIncomeSaved)}</span>
    </div>
    <div class="flex justify-between">
      <span>Grande Objetivo (R$)</span>
      <span>{formatCurrency(incomeGoal)}</span>
    </div>
  </div>
</div>

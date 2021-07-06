<script lang="ts">
  import {
    calcService
  } from '@src/income/domain/services'

  import type { useIncomeService } from '@src/income/application/services'
  import { formatCurrency } from '@src/shared/helpers/format-currency'
  import { derived } from 'svelte/store'

  export let incomeService: ReturnType<typeof useIncomeService>

  const { income, details } = incomeService

  const finalYear = derived(details, ($details) => {
    const currentYear = (new Date()).getFullYear()
    const size = $details.length

    if(size > 0 ) return currentYear + size

    return null

  })
  const lastDetail = derived(details, ($details) => {
    const total = $details.length

    return $details[total - 1]
  })

  $: currentyIncomeSaved = calcService.getCurrentlyIncomeSaved($income)
  $: incomeGoal = calcService.getIncomeGoal($income)
</script>

<div class="bg-primary-50  rounded-xl p-8">
  <h2 class="text-accent-800 text-3xl text-center mb-4">Resumo</h2>
  <div class="h-0.5 bg-primary-300" />
  <div class="grid grid-cols-1 gap-4 pt-4 pb-4">
    <div class="flex justify-between">
      <span>Economia Atual (%)</span>
      <span>{$income.saved}%</span>
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
  <div class="h-0.5 bg-primary-300" />
  <div class="grid grid-cols-1 gap-4 pt-4">
    <div class="flex justify-between">
      <span>Ano</span>
      <span>{$finalYear ?? '--'}</span>
    </div>
    <div class="flex justify-between">
      <span>Renda passiava mensal de:</span>
      <span>{formatCurrency($lastDetail?.monthlyPassive ?? 0)}</span>
    </div>
    <div class="flex justify-between">
      <span>Renda passiava anual de:</span>
      <span>{formatCurrency($lastDetail?.annualPassive ?? 0)}</span>
    </div>
  </div>
</div>

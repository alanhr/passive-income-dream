<script lang="ts">
  import {
    getCurrentlyIncomeSaved,
    getIncomeGoal,
  } from '../../domain/services/calc'
  import { incomeForm } from '../../infra/store'

  $: currentyIncomeSaved = getCurrentlyIncomeSaved({
    monthlyIncome: $incomeForm.monthlyIncome,
    percentageSaved: $incomeForm.percentageSaved,
  })
  $: incomeGoal = getIncomeGoal({
    desiredIncome: $incomeForm.desiredIncome,
    passiveYield: $incomeForm.passiveYield,
  })
</script>

<div  class="bg-primary-50  rounded-xl p-8">
  <span>Economia Atual (%): {$incomeForm.percentageSaved}%</span>
  <span>Economia Atual (R$): {currentyIncomeSaved}</span>
  <span>Grande Objetivo (R$): {incomeGoal}</span>
</div>

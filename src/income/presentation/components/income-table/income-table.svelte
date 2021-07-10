<script lang="ts">
  import type { useIncomeService } from '@src/income/application/services'

  import { formatCurrency } from '@src/shared/helpers/format-currency'
  import { derived } from 'svelte/store'

  export let incomeService: ReturnType<typeof useIncomeService>

  const { details } = incomeService

  const isNotEmpty = derived(details, ($details) => $details.length > 0)
</script>

<div
  class:overflow-x-auto={$isNotEmpty}
  class="shadow border-gray-200 rounded-lg max-h-hath mb-40 overflow-y-auto sm:overflow-y-hidden"
>
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-primary-50 relative">
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-accent-800 uppercase tracking-wider sticky top-0 bg-primary-50"
        >
          Aporte Anual
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-accent-800 uppercase tracking-wider sticky top-0 bg-primary-50"
        >
          Rendimento Anual
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-accent-800 uppercase tracking-wider sticky top-0 bg-primary-50"
        >
          Valor Final
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-accent-800 uppercase tracking-wider sticky top-0 bg-primary-50"
        >
          Renda Passiva Anual
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-accent-800 uppercase tracking-wider sticky top-0 bg-primary-50"
        >
          Renda Passiva Mensal
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-primary-200">
      {#each $details as incomeDetail}
        <tr>
          <td class="px-6 py-4 whitespace-nowrap"
            >{formatCurrency(incomeDetail.annualContribution)}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{incomeDetail.annualYield}%</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{formatCurrency(incomeDetail.finalValue)}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{formatCurrency(incomeDetail.annualPassive)}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{formatCurrency(incomeDetail.monthlyPassive)}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<script lang="ts">
  import { formatCurrency } from '../../../shared/helpers/format-currency'
  import type { IncomeDetail } from '../../domain/model'

  export let incomeDetails: IncomeDetail[] = []
</script>

<div
  class:overflow-x-auto={Boolean(incomeDetails.length)}
  class="shadow border-b border-gray-200 rounded-lg max-h-hath"
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
      {#each incomeDetails as incomeDetail}
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

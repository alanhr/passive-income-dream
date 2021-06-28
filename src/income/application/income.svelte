<script lang="ts">
  import { get } from 'svelte/store'

  import IncomeForm from './income-form/income-form.svelte'
  import IncomeSummary from './income-summary/income-summary.svelte'
  import { incomeForm } from '../infra/store'
  import { createIncomeDetails } from '../domain/factory/create-income-details'
  import Container from '../../shared/ui/container/container.svelte'
  import type { IncomeDetail } from '../domain/model'

  $: incomeDetails = [] as IncomeDetail[]

  const handlerSubmite = () => {
    incomeDetails = createIncomeDetails(get(incomeForm))
  }
</script>

<Container>
  <div class="grid grid-cols-2 gap-12">
    <IncomeForm on:submit={handlerSubmite} />
    <IncomeSummary />
  </div>
  <table class="table-auto">
    {#each incomeDetails as incomeDetail}
      <tbody>
        <tr>
          <td>{incomeDetail.annualContribution}</td>
          <td>{incomeDetail.annualYield}</td>
          <td>{incomeDetail.finalValue}</td>
          <td>{incomeDetail.annualPassiveIncome}</td>
          <td>{incomeDetail.monthlyPassiveIncome}</td>
        </tr>
      </tbody>
    {/each}
  </table>
</Container>

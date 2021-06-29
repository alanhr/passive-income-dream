<script lang="ts">
  import { get } from 'svelte/store'

  import Container from '../../../shared/ui/container/container.svelte'
  import IncomeForm from '../../application/income-form/income-form.svelte'
  import IncomeSummary from '../../application/income-summary/income-summary.svelte'
  import IncomeTable from '../../application/income-table/income-table.svelte'
  import { createIncomeDetails } from '../../domain/factory/create-income-details'
  import type { IncomeDetail } from '../../domain/model'
  import { incomeForm } from '../data/store'

  $: incomeDetails = [] as IncomeDetail[]

  const handlerSubmite = () => {
    incomeDetails = createIncomeDetails(get(incomeForm))
  }

</script>

<Container>
  <div class="grid grid-cols-2 gap-12">
    <IncomeForm on:submit={handlerSubmite} bind:incomeForm={$incomeForm} />
    <IncomeSummary bind:incomeForm={$incomeForm} />
  </div>
  <div class="mt-16">
    <IncomeTable incomeDetails={incomeDetails} />
  </div>
</Container>

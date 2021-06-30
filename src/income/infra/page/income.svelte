<script lang="ts">
  import { get } from 'svelte/store'

  import Container from '../../../shared/ui/container/container.svelte'
  import { IncomeForm } from '../../application/income-form'
  import { IncomeSummary } from '../../application/income-summary'
  import { IncomeTable } from '../../application/income-table'
  import { createIncomeDetails } from '../../domain/factory/create-income-details'
  import type { IncomeDetail } from '../../domain/model'
  import { incomeForm } from '../data/store'

  $: incomeDetails = [] as IncomeDetail[]

  const handlerSubmite = () => {
    incomeDetails = createIncomeDetails(get(incomeForm))
  }
</script>

<Container>
  <img class="m-auto" src="/logo.png" alt="Logo" />
  <div class="grid grid-cols-2 gap-12 mt-10">
    <IncomeForm on:submit={handlerSubmite} bind:incomeForm={$incomeForm} />
    <IncomeSummary bind:incomeForm={$incomeForm} />
  </div>
  <div class="mt-16">
    <IncomeTable {incomeDetails} />
  </div>
</Container>

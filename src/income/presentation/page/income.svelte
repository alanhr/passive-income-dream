<script lang="ts">
  import { get } from 'svelte/store'

  import { Container } from '@src/shared/ui/container'
  import { IncomeForm } from '@src/income/presentation/income-form'
  import { IncomeSummary } from '@src/income/presentation/income-summary'
  import { IncomeTable } from '@src/income/presentation/income-table'
  import { createIncomeDetails } from '@src/income/domain/factory/create-income-details'
  import type { IncomeDetail } from '@src/income/domain/model'
  import { incomeForm } from '@src/income/infra/data/store'

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

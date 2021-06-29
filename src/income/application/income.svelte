<script lang="ts">
  import { get } from 'svelte/store'

  import IncomeForm from './income-form/income-form.svelte'
  import IncomeSummary from './income-summary/income-summary.svelte'
  import { incomeForm } from '../infra/store'
  import { createIncomeDetails } from '../domain/factory/create-income-details'
  import Container from '../../shared/ui/container/container.svelte'
  import type { IncomeDetail } from '../domain/model'
import IncomeTable from './income-table/income-table.svelte'

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
  <div class="mt-16">
    <IncomeTable incomeDetails={incomeDetails} />
  </div>
</Container>

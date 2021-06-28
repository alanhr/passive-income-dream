<script lang="ts">
  import { get } from 'svelte/store'

  import IncomeForm from './income-form/income-form.svelte'
  import IncomeSummary from './income-summary/income-summary.svelte'
  import { incomeForm } from '../infra/store'
  import { createIncomeDetails } from '../domain/factory/create-income-details'
  import Container from '../../shared/ui/container/container.svelte'

  const handlerSubmite = () => {
    createIncomeDetails(get(incomeForm))
  }
</script>

<Container>
  <div class="grid grid-cols-2">
    <IncomeForm on:submit={handlerSubmite} />
    <IncomeSummary />
  </div>
</Container>

<script lang="ts">
  import { Container } from '@src/shared/ui/container'
  import { IncomeForm } from '@src/income/presentation/components/income-form'
  import { IncomeSummary } from '@src/income/presentation/components/income-summary'
  import { IncomeTable } from '@src/income/presentation/components/income-table'
  import { useIncomeService } from '@src/income/application/services'

  const incomeService = useIncomeService()
</script>

<Container>
  <img class="m-auto" src="/logo.svg" alt="Logo" width="150px" />
  <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-12 mt-10 px-6 sm:px-0">
    <IncomeForm {incomeService} />
    <IncomeSummary {incomeService} />
  </div>
  <div class="mt-8">
    <IncomeTable {incomeService} />
  </div>
</Container>

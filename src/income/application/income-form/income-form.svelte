<script lang="ts">
  import { incomeForm } from '../../infra/store'
</script>

<form
  on:submit|preventDefault
  class="font-body text-lg text-justify tracking-normal"
>
  <label for="desiredIncome"
    >Desejo ter uma <strong>renda mensal</strong> de R$</label
  >
  <input
    type="number"
    name="desiredIncome"
    class="bg-accent-50 outline-none w-16"
    bind:value={$incomeForm.desiredIncome}
  />
  <label for="monthlyIncome"
    >onde minha <strong>renda atual</strong> é de R$</label
  >
  <input
    type="number"
    name="monthlyIncome"
    class="bg-accent-50 outline-none w-16"
    bind:value={$incomeForm.monthlyIncome}
  />

  <label for="percentageSaved">e pretendo <strong>economizar</strong></label>
  <input
    type="number"
    min="0"
    max="100"
    name="percentageSaved"
    class="bg-accent-50 outline-none w-16"
    bind:value={$incomeForm.percentageSaved}
  />
  <span>%</span>
  <label for="passiveYield">
    e desesejo que os <strong>rendimentos da minha renda passiva</strong> seja de</label
  >
  <input
    type="number"
    min="1"
    max="100"
    name="passiveYield"
    class="bg-accent-50 outline-none w-16"
    bind:value={$incomeForm.passiveYield}
  />
  <span>%</span>
  <label for="applicationYield">
    e o <strong>rendimento das aplicações</strong> seja de</label
  >
  <input
    type="number"
    min="1"
    max="100"
    name="applicationYield"
    class="bg-accent-50 outline-none w-16"
    bind:value={$incomeForm.applicationYield}
  />
  <span>%</span>
  <button type="submit">Calcular</button>
</form>

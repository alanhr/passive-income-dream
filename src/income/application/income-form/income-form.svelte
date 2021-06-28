<script lang="ts">
  import { incomeForm } from '../../infra/store'
</script>

<form
  on:submit|preventDefault
  class="font-body text-lg text-justify tracking-normal whitespace-normal"
>
  <label for="desiredIncome"
    >Desejo ter uma <strong class="text-accent-700">renda mensal</strong> de R$
    <input
      type="number"
      name="desiredIncome"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={$incomeForm.desiredIncome}
    />
  </label>
  <label for="monthlyIncome"
    >onde minha <strong class="text-accent-700">renda atual</strong> é de R$
    <input
      type="number"
      name="monthlyIncome"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={$incomeForm.monthlyIncome}
    />
  </label>
  <label for="percentageSaved"
    >e pretendo <strong class="text-accent-700">economizar</strong>
    <input
      type="number"
      min="0"
      max="100"
      name="percentageSaved"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={$incomeForm.percentageSaved}
    />
    <span>%</span>
  </label>
  <label for="passiveYield">
    e desesejo que os <strong class="text-accent-700">rendimentos da minha renda passiva</strong> seja
    de
    <input
      type="number"
      min="1"
      max="100"
      name="passiveYield"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={$incomeForm.passiveYield}
    />
    <span>%</span>
  </label>
  <label for="applicationYield">
    e o <strong class="text-accent-700">rendimento das aplicações</strong> seja de
    <input
      type="number"
      min="1"
      max="100"
      name="applicationYield"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={$incomeForm.applicationYield}
    />
    <span>%</span>
  </label>
  <button type="submit">Calcular</button>
</form>

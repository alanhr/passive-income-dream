<script lang="ts">
  import type { Income } from '../../domain/model'

  export let incomeForm: Income
</script>

<form
  on:submit|preventDefault
  class="font-body text-lg text-justify tracking-normal whitespace-normal"
>
  <label for="desired"
    >Desejo ter uma <strong class="text-accent-700">renda mensal passiva</strong
    >
    de R$
    <input
      type="number"
      name="desired"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={incomeForm.desired}
    />
  </label>
  <label for="current"
    >,a <strong class="text-accent-700">atual</strong> é de R$
    <input
      type="number"
      name="current"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={incomeForm.current}
    />
    .
  </label>
  <label for="saved"
    >Desse montante, pretendo <strong class="text-accent-700">economizar</strong
    >
    <input
      type="number"
      min="0"
      max="100"
      name="saved"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={incomeForm.saved}
    />
    <span>%</span>
  </label>
  <label for="passiveYield">
    com o <strong class="text-accent-700">rendimentos passiva</strong> de
    <input
      type="number"
      min="1"
      max="100"
      name="passiveYield"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={incomeForm.passiveYield}
    />
    <span>%</span>
  </label>
  <label for="applicationYield">
    e <strong class="text-accent-700">rendimento das aplicações</strong> de
    <input
      type="number"
      min="1"
      max="100"
      name="applicationYield"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      bind:value={incomeForm.applicationYield}
    />
    <span>%</span>
  </label>
  <button type="submit">Calcular</button>
</form>

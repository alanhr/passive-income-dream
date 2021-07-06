<script lang="ts">
  import type { useIncomeService } from '@src/income/application/services'
  import type { Income } from '@src/income/domain/model'
  import { derived } from 'svelte/store'

  export let incomeService: ReturnType<typeof useIncomeService>
  const { income, handleSubmit } = incomeService

  const isValid = derived(income, ($income) =>
    Object.values($income).every((value) => value > 1)
  )

  const handleBlur = (field: keyof Income) => (event: Event) => {
    const inputValue = (<HTMLInputElement>event.target).value
    const value = inputValue.length ? parseInt(inputValue) : 0

    incomeService.setFieldValue(field)(value)
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
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
      value={$income.desired}
      required
      on:blur={handleBlur('desired')}
    />
  </label>
  <label for="current"
    >,a <strong class="text-accent-700">atual</strong> é de R$
    <input
      type="number"
      name="current"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      value={$income.current}
      required
      on:blur={handleBlur('current')}
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
      value={$income.saved}
      on:blur={handleBlur('saved')}
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
      value={$income.passiveYield}
      required
      on:blur={handleBlur('passiveYield')}
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
      value={$income.applicationYield}
      required
      on:blur={handleBlur('applicationYield')}
    />
    <span>%</span>
  </label>
  <div class="block mt-11">
    <button
      class:opacity-50={!$isValid}
      disabled={!$isValid}
      class="p-4 rounded-md bg-accent-700 text-center text-primary-50"
      type="submit">Calcular</button
    >
  </div>
</form>

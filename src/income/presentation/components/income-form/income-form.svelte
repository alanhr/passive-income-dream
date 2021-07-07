<script lang="ts">
  import type { useIncomeService } from '@src/income/application/services'
  import type { Income } from '@src/income/domain/model'
  import { derived } from 'svelte/store'

  export let incomeService: ReturnType<typeof useIncomeService>
  const { income, handleSubmit } = incomeService

  const isValid = derived(income, ($income) =>
    Object.values($income).every((value) => value > 1)
  )

  const handleOnChange = (field: keyof Income) => (event: Event) => {
    const inputValue = (<HTMLInputElement>event.target).value
    console.log('aqui')
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
      on:keyup={handleOnChange('desired')}
    />
  </label>.
  <label for="current"
    >Meus <strong class="text-accent-700">rendimentos atuais</strong>
    <i>(salário/aluguel/etc)</i>
    são de R$
    <input
      type="number"
      name="current"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      value={$income.current}
      required
      on:keyup={handleOnChange('current')}
    />
  </label>
  <label for="saved">
    e desse montante, pretendo <strong class="text-accent-700"
      >economizar</strong
    >
    <input
      type="number"
      min="0"
      max="100"
      name="saved"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      value={$income.saved}
      on:keyup={handleOnChange('saved')}
    />
    <span>%</span>.
  </label>
  <label for="passiveYield">
    Com o <strong class="text-accent-700">rendimentos acima da inflação</strong>
    de
    <input
      type="number"
      min="1"
      max="100"
      name="passiveYield"
      class="outline-none w-16 text-accent-900 border-b-2 border-dashed border-accent-900"
      value={$income.passiveYield}
      required
      on:keyup={handleOnChange('passiveYield')}
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
      on:keyup={handleOnChange('applicationYield')}
    />
    <span>%</span>
  </label>
  <div class="block mt-11">
    <button
      disabled={!$isValid}
      class="p-4 rounded-md bg-accent-700 text-center text-primary-50 {!$isValid? 'opacity-50': ''}"
      type="submit">Calcular</button
    >
  </div>
</form>

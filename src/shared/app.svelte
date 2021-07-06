<script lang="ts">
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
  import Income from '@src/income/presentation/page/income.svelte'
  import { isProduction } from '@src/shared/helpers/isProduction'
  import TailwindCss from './tailwind-css.svelte'
</script>

<GoogleAnalytics properties={['G-7GHY8J4XJM']} enabled={isProduction()} />
<TailwindCss />
<main>
  <Income />
</main>

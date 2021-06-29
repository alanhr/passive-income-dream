export const formatCurrency = (value: number, currency = 'BRL'): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value)

import { formatCurrency } from './format-currency'

describe('Format Curreny', () => {
  test('should convert number to real', () => {
    const expectedValue = '10,00'

    const result = formatCurrency(10)

    expect(result).toContain('R$')
    expect(result).toContain(expectedValue)
  })
})

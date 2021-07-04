/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/svelte'

import { Income } from '@src/income/domain/model'
import { IncomeSummary } from './index'
import { getCurrentlyIncomeSaved } from '@src/income/domain/services/calc'

describe('IncomeSummary', () => {
  test('should render', () => {
    const incomeForm: Income = {
      applicationYield: 8,
      passiveYield: 4,
      saved: 25,
      desired: 1500,
      current: 2000,
    }

    const expectedIncomeSavedValue = getCurrentlyIncomeSaved(incomeForm)

    render(IncomeSummary, { incomeForm })

    expect(screen.getByText(`${incomeForm.saved}%`)).toBeInTheDocument()
    expect(screen.getByText(expectedIncomeSavedValue,{exact:false})).toBeInTheDocument()
  })
})

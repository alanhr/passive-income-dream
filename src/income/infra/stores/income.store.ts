import type { Income, IncomeDetail } from '@src/income/domain/model'
import { isProduction } from '@src/shared/helpers/isProduction'
import { createMachine, interpret, assign } from 'xstate'

type IncomeEvent =
  | { type: 'UPDATE'; field: keyof Income; value: number }
  | { details: IncomeDetail[]; type: 'ADD_DETAILS' }

type IncomeContext = {
  income: Income
  details: IncomeDetail[]
}

export const incomeMachine = createMachine<IncomeContext, IncomeEvent>(
  {
    id: 'income',
    initial: 'fields',
    context: {
      income: {
        desired: 0,
        current: 0,
        saved: 0,
        applicationYield: 0,
        passiveYield: 0,
      },
      details: [],
    },
    states: {
      fields: {
        on: {
          UPDATE: {
            actions: 'assignValue',
          },
          ADD_DETAILS: [
            {
              cond: 'shouldSubmit',
              actions: 'assignDetails',
            },
          ],
        },
      },
    },
  },
  {
    actions: {
      assignValue: assign((context, event) => {
        if (event.type !== 'UPDATE') return context

        return {
          ...context,
          income: {
            ...context.income,
            [event.field]: event.value,
          },
        }
      }),
      assignDetails: assign((context, event) => {
        if (event.type !== 'ADD_DETAILS') return context
        return {
          ...context,
          details: event.details,
        }
      }),
    },
    guards: {
      shouldSubmit: (context) =>
        Object.values(context.income).every((value) => value > 0),
    },
  }
)

export const incomeStore = interpret(incomeMachine, {
  devTools: !isProduction(),
}).start()

export type IncomeStore = typeof incomeStore

/* eslint-disable flowtype/require-valid-file-annotation */

/* globals test expect */
import { MeReducer, initialState } from './MeReducer'

const dummyAction = { type: 'DUMMY_ACTION_PLEASE_IGNORE' }

test('initialState', () => {
  const expected = initialState
  const actual = MeReducer(undefined, dummyAction)

  expect(actual).toEqual(expected)
})

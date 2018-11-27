// @flow
import { type Reducer, combineReducers } from 'redux'

import { type Action } from '../types/ReduxTypes.js'
import { MeReducer as Me, type MeState } from './MeReducer'

export type RootState = {
  +Me: MeState
}

export const rootReducer: Reducer<RootState, Action> = combineReducers({
  Me
})

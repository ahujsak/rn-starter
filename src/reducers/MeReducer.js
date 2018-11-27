// @flow
import { ANON } from '../constants/indexConstants'
import type { Action } from '../types/ReduxTypes'
export type MeState = {
  authToken: string | null,
  userType: string
}

export const initialState = {
  authToken: null,
  userType: ANON
}

export const MeReducer = (state: MeState = initialState, action: Action): MeState => {
  switch (action.type) {
    case 'ON_INIT_DATA':
      return {
        ...state,
        authToken: action.data.authToken,
        userType: action.data.userType
      }
    case 'ON_COMPLETE_ANON_REGISTER':
      return {
        ...state,
        authToken: action.data
      }
    default:
      return state
  }
}

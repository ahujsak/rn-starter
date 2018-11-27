// @flow
// import type {  } from '../types/AppTypes'
export type Action = { type: 'ON_INIT_DATA', data: { authToken: string, userType: string } } | { type: 'ON_COMPLETE_ANON_REGISTER', data: string }

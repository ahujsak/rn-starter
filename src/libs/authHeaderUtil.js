// @flow
// import { base64 } from 'rfc4648'

import type { State } from '../types/ReduxTypes'

const getAuthHeader = (state: State) => {
  /* const session: string = state.Me.authToken || ''
  const id = state.Me.id || ''
  const text = id + ':' + session
  const data = new Uint8Array(text.length)
  for (let i = 0; i < text.length; ++i) data[i] = text.charCodeAt(i)
  const basic = 'Basic ' + base64.stringify(data)
  return basic */
}

export { getAuthHeader }

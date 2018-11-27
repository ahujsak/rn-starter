// @flow
// eslint-disable-next-line
import { Alert, AsyncStorage } from 'react-native'

import ENV from '../../env.json'
// import * as Constants from '../constants/indexConstants'
/* import { getAuthHeader } from '../libs/authHeaderUtil'
import { isNewToken } from '../libs/PushUtils' */
// import localize from '../locales/strings'
// import type { ImageFromPhone, InitialData, RegisteringUser } from '../types/AppTypes'
import type { Dispatch, GetState } from '../types/ReduxTypes'

/* import DeviceInfo from 'react-native-device-info'
import Permissions from 'react-native-permissions'
import PushNotification from 'react-native-push-notification' */
// import { Actions } from 'react-native-router-flux'
// import { base64 } from 'rfc4648'

const server = ENV[ENV.server]

export const getInitData = () => async (dispatch: Dispatch, getState: GetState) => {
  // const state = getState()
  console.log(server)
}

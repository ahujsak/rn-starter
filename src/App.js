// @flow

import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import Main from './components/scenes/MainSceneComponent'
import { rootReducer } from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

type Props = {}
export default class App extends Component<Props> {
  render () {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Main />
      </Provider>
    )
  }
}

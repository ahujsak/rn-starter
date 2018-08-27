// @flow

import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Main from './components/scenes/MainSceneComponent'
const createStoreWithMiddleware = applyMiddleware()(createStore)

type Props = {}
export default class App extends Component<Props> {
  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Main />
      </Provider>
    )
  }
}

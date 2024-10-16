import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'

import Books from './Books'
import bookReducer from './reducers/bookReducer'

const rootReducer = combineReducers(
  {
    bookReducer
  }
)

const store = configureStore({reducer: rootReducer})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Books/>
      </Provider>
    )
  }
}

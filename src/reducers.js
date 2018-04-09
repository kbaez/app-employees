import { combineReducers } from 'redux'
import { UPDATE_TODO } from './acciones.js'

function todos(state = [], action) {
  switch (action.type) {
    case UPDATE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

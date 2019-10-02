import {createMappedReducer} from './createMappedReducer'


const initialState = []


const add = (state, action) =>
{
  return [...state, action.payload]
}


const actionHandlers = {
  SOME_ACTION_ADD: add,
}


export default createMappedReducer(initialState, actionHandlers)

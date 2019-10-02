// https://medium.freecodecamp.org/reducing-the-reducer-boilerplate-with-createreducer-86c46a47f3e2


export function createMappedReducer (initialState, actionHandlers)
{
  return function reducer (state = initialState, action)
  {
    if (actionHandlers.hasOwnProperty(action.type))
    {
      return actionHandlers[action.type](state, action)
    }
    else
    {
      return state
    }
  }
}

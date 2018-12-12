import counter from 'reducers';

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action)
  }
}
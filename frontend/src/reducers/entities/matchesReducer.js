import { RECEIVE_MATCH, RECEIVE_MATCHES } from "../../actions/match_actions";

const matchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MATCHES:
      return action.matches
    case RECEIVE_MATCH:
      let nextState = Object.assign({}, state);
      nextState[action.match._id] = action.match;
      return nextState;
    default:
      return state;
  }
}

export default matchesReducer;
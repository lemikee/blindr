import { RECEIVE_JOBS } from "../../actions/user_actions";
import { RECEIVE_MATCH } from "../../actions/match_actions";

const jobsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs;
    case RECEIVE_MATCH:
      let nextState = Object.assign({}, state);
      delete nextState[action.match._id];
      return nextState;
    default:
      return state;
  }
}

export default jobsReducer;
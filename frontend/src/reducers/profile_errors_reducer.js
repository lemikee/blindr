import { RECEIVE_PROFILE_ERRORS } from '../actions/user_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const profileErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default profileErrorsReducer;
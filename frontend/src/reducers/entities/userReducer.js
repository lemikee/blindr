import { RECEIVE_USER_PROFILE } from "../../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      console.log(action.profile)
      return action.profile
    default:
      return state;
  }
}

export default userReducer;
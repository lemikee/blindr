import { RECEIVE_CHAT } from "../../actions/chat_actions"

const chatsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHAT:
      let nextState = Object.assign({}, state);
      nextState[Object.keys(action.chat)[0]] = Object.values(action.chat)[0]
      return nextState;
    default:
      return state;
  }
}

export default chatsReducer;
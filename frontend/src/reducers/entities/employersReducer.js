import { RECEIVED_EMPLOYER } from '../../actions/employer_actions';

const employersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVED_EMPLOYER:
      return action.employer;
    default:
      return state;
  }
}

export default employersReducer;
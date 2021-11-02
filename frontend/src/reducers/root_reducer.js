import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const appReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer
});

const rootReducer = (state, action) => {
  if (action.type === RECEIVE_USER_LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}

export default rootReducer;
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    session: sessionReducer
});

export default rootReducer;
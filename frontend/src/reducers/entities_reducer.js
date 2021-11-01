import { combineReducers } from 'redux';
import userReducer from './entities/userReducer';
import jobsReducer from './entities/josbReducer';
import matchesReducer from './entities/matchesReducer';
import employersReducer from './entities/employersReducer';
import chatsReducer from './entities/chatsReducer';

const entitiesReducer = combineReducers({
    user: userReducer,
    jobs: jobsReducer,
    matches: matchesReducer,
    employers: employersReducer,
    chats: chatsReducer,
});

export default entitiesReducer;
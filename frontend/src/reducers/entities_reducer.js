import { combineReducers } from 'redux';
import userReducer from './entities/userReducer';
import jobsReducer from './entities/josbReducer';
import matchesReducer from './entities/matchesReducer';

const entitiesReducer = combineReducers({
    user: userReducer,
    jobs: jobsReducer,
    matches: matchesReducer,
});

export default entitiesReducer;
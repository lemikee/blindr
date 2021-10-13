import { combineReducers } from 'redux';
import userReducer from './entities/userReducer';

const entitiesReducer = combineReducers({
    user: userReducer,
});

export default entitiesReducer;
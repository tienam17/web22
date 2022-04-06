import hobbyReducer from './hobbys'
import { combineReducers } from 'redux';
import { useReducer } from 'react';

const rootReducer =combineReducers({
    hobby:hobbyReducer,
    user:useReducer,
});

export default rootReducer;
import status from './status';
import sort from './sort';
import{combineReducers} from 'redux';

const  myReducer = combineReducers({
    status:status,
    sort:status,
})
export default myReducer;
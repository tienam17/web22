import {createStore} from 'redux';
import {status,sort} from './actions/index'
import myReducer from './reducers/index';


let store =createStore(myReducer);
console.log('Default:',store.getState());
// thuc hien cong viec thay doi status


store.dispatch(status());
console.log('TOGGLE_STATUS:',store.getState());
//thuc hien cong viec sap xep 

store.dispatch(sort({
    by:'name',
    value:-1,
}));


console.log('SORT:',store.getState());
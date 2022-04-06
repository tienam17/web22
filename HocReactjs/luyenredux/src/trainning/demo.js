import {createStore} from 'redux';

let initialState ={
    status:false,
    sort:{
        by:'name',
        value:1 //1:tang , -1 giam
    }
}

let myReducer =(state=initialState,action)=>{
    if(action.type === 'TOI LA NAM'){
        state.status=!state.status;
        return state;
    }
    if(action.type === 'NAM'){
        let {by,value} =action.sort;//by=action.by
        let {status}=state; //status=state.status
        return {
            status:status,
            sort:{
                by:by,
                value:value,
            }
        }
    }
    return state;
}

let store =createStore(myReducer);
console.log('Default:',store.getState());
// thuc hien cong viec thay doi status

let action ={ type:'TOI LA NAM'};
store.dispatch(action);
console.log('TOI LA NAM:',store.getState());
//thuc hien cong viec sap xep 

let sortAction ={
    type:'NAM',
    sort:{
        by:'name',
        value:-1,
    }
}
store.dispatch(sortAction);
console.log('NAM:',store.getState());


let initialState = false;

let myReducer =(state=initialState,action)=>{
    if(action.type === 'TOGGLE_STATUS'){
        state=!state.status;
        return state;
    }
  
    return state;
}
export default myReducer;
import React from 'react';
import { useSelector } from 'react-redux';

HomePage.propTypes={

};

const randomNumber=()=>{
    return 1+ Math.trunc(Math.random() *9)
}

function HomePage (props){
    // strict comparison
    const hobbyList =useSelector (state=>state.hobby.list);
    const activeId =useSelector(state=>state.hobby.activeId);

    const dispatch =useDispatch();

    console.log('Hobby list:',hobbyList);
    const handleAddHobyClick=()=>{
        // Random a hody obj
        const newId =randomNumber()
        const newHoby={
            id:1,
            title:'Hobby ${newId}',
        }

        const action =addNewHobby(newHobby);
        dispatch(action)
    }
    
    const handHobyClick=(hobby)=>{}

    return(
        <div className="home-page">
            <h1>HOME PAGE</h1>

            <button onClick={handleAddHobyClick}>random</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handHobyClick}
            />
        </div>
    );
}

export default HomePage;
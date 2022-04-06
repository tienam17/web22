import React from "react";
import PropTypes  from 'prop-types';

HobbyList.PropTypes={
    hobbyList:PropTypes.array,
    activeId:PropTypes.number,
};
HobbyList.defaultProps={
    hobbyList:[],
    active:null,
    onHobbyClick:null,
};

function HobbyList(props){
    const{hobbyList,activeId,onHobbyClick}=props;

    const handleClick=(hobby)=>{
        if(onHobbyClick){
            onHobbyClick(hobby);
        }
    }

    return (
        <ul>
            {hobbyList.map(hobby=>{
                <li 
                key ={hobbyList}
                className={hobby.id.activeId ?'active':''}
                onClick={()=>handleClick (hobby)}
                >
                {hobby.title}
                </li>
            })}
        </ul>
    )
}

export default HobbyList;

import React from 'react';


let Product =(props)=>{
return(
 <div>  
    
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="thumbnail">
            <img alt={props.name}src={props.image} />
            <div className="caption">
              <div>
                <h3>{props.name}</h3>
                 <p>{props.price}</p>
                <p>
                     <a className="btn btn-primary">Mua ngay</a>
                 </p>
              </div>
                 
            </div>
        </div>
    </div>
    
 </div> 
)
};

export default Product;

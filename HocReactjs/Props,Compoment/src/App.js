import React from 'react';
import './App.css';
import Product from './Compoment/Product';
let App = ()=>{
  let product=[
    {
      id:1,
      name :"macboo pro ",
      price:1000000,
      image:"https://cdn.tgdd.vn/Products/Images/44/231254/apple-macbook-pro-2020-myd92saa-2-600x600.jpg",
      status:true,
    },
    {
      id:1,
      name :"lenovo ",
      price:200000,
      image:"https://cdn.tgdd.vn/Products/Images/44/231254/apple-macbook-pro-2020-myd92saa-2-600x600.jpg",
      status:true,
    },
    {
      id:1,
      name :"hp",
      price:300000,
      image:"https://cdn.tgdd.vn/Products/Images/44/231254/apple-macbook-pro-2020-myd92saa-2-600x600.jpg",
      status:true,
    }
  ];
  let element =product.map((product)=>{
     <Product
                key ={product.id}
                price={product.price}
                imgae={product.image}
              >
                {product.name}
              </Product>
    });
return (
  <div>
      <nav className="navbar navbar-inverse">
       <a className="navbar-brand" href="#">Props</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {element}
            </div>
          </div>
       </div>
    </div>
  </div>
)
};

export default App;

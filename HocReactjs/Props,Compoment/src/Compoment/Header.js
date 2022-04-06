import React  from 'react';

function Header  ()  {
  return (
    
    <nav className="navbar navbar-inverse">
      <a className="navbar-brand" >Quầy bán hàng</a>
      <ul className="nav navbar-nav">
        <li className="active">
          <a >Sản phẩm</a>
        </li>
        <li className="active">
          <a >Thanh toán</a>
        </li>
      </ul>
    </nav>
    
  );
}

export default Header;
import React from 'react';
import GoogleLoginButton from './../GoogleLoginButton';

import basket from '../../img/basket.png';
import search from '../../img/search.png';
import styled from 'styled-components';


const Headers = styled.header`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px;
  }
`;

const Header = () => {
    return ( 
    <>
      <Headers>
      <div className="search">
          <img src={search} alt="Search icon" />
        </div>
        <div className="basket">
          <img src={basket} alt="Basket icon" />
        </div>
        <div className="authorization">
          <GoogleLoginButton/>
        </div>
      </Headers>
    </>
     );
}
 
export default Header;
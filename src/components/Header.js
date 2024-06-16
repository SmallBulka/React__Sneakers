import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../hooks/useCart';



function Header(props) {
  
  const { totalPrice } = useCart();
  
    return (
      
      <header>
        <div className="header__left">

        <Link link to="/">
          <img width={52} height={52} src="/img/logo.svg" alt='logo'/>
        </Link>
          <div>
            <h3>Street Beat</h3>
            <p>Sneakers as unique as you.</p>
          </div>
        </div>
        
        <div>
          <ul className="header__right">
            <li onClick={props.onClickCart}>
              <img width={21} height={24} src="/img/Group.svg" alt='Group'/>
              <span>{totalPrice} ₽</span>
            </li>
            <li>
              <Link to="/favorites">
                <img width={21} height={24} src="/img/zakladki.svg" alt='zakladki'/>
                
              </Link>
              
            </li>
            <li>
            <Link to="/orders">
              <img width={21} height={24} src="/img/Union.svg" alt='Union'/>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
    
}
export default  Header;
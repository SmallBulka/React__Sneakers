import React from 'react';

import axios from 'axios';
import Info from '../Info';

// import slowSlider from '../Slider/script'

import { useCart } from '../../hooks/useCart';
import styles from './Drawer.module.css';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, items = [], onRemove, opened}) {
  const {cartItems, setCartItems} = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () =>{
    try {
      setIsLoading(true);
      const { data } = await axios.post('/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };
    

    return (
      
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={styles.drawer}>
        
      

          
          <h2>
            Корзина
            <img
              onClick={onClose}
              className="removBtn"
              src="/img/btn-remov.svg"
              alt="Remov"
            />
          </h2>
          
          {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="Sneakers"
                  />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <form>
  
  <select name="size" id="size-select">
    <option value=""></option>
    <option value="petersburg">39</option>
    <option value="samara">40</option>
    <option value="perm">41</option>
    <option value="novosibirsk">44</option>
  </select>
</form>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removBtn"
                    src="/img/btn-remov.svg"
                    alt="Remov"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>{totalPrice} ₽</b>
              </li>
              <li>
                <span>Благотворительность 5%: </span>
                <div></div>
                <b>{Math.floor(totalPrice / 100 * 5)} ₽</b>
              </li>
            </ul>
            
            <button onClick={onClose}  className="greenBtn">
              Оформить заказ <img src="/img/str.svg" alt="Arrow" /> 
            </button>
            
            </div>
          </div>
          ) : (
            <Info
              title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
              description={
                isOrderComplete
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
              image={isOrderComplete ? 'img/str.svg' : 'img/str.svg'}
            />
          )}
        </div>
      </div>
    );
  }
export default  Drawer;

import React from 'react';
import axios from 'axios';
import Info from './Info';
import AppContext from '../contex';
function Drawer({onClose, items = [], onRemove}) {
  const {cartItems, setCartItems} = React.useContext(AppContext);
  const [isCoplete, setIsCoplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickCoplete = async () =>{
    try{
      const{data} = await axios.get('https://663883814253a866a24e0be6.mockapi.io/favorites', cartItems) // передаю весь массив того что есть в корзине
      setOrderId(data.id);
      setIsCoplete(true);// паралельно делаю что заказ создан 
      setCartItems([]);//очещаю массив корзины
  }catch (error){
    alert('Не удалось создать заказ');
  }
}
    
    return (
      <div className="overlay">
        <div className="drawer">
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
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button onClick={onClickCoplete}  className="greenBtn">
              Оформить заказ <img src="/img/str.svg" alt="Arrow" />
            </button>
          </div>
          </div>
          ) : (
            <Info 
            title={isCoplete ? "Заказ оформлен!" : "В корзине ничего нет" }
            description={isCoplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 
            "Выберите товары или войдите в аккаунт, если добавляли товары в корзину"}
            image={isCoplete ? "/img/ofor.svg" : "/img/str.svg"}/>
            
          )}
          {/* усли есть хоть что то рендари items ЕСЛИ нет то рендари close */}
          
        </div>
      </div>
    );
}
export default  Drawer;
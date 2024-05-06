function Drawer({onClose, items = [], onRemove}) {
<<<<<<< fin
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
                <div className="cartItem">
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
            <button className="greenBtn">
              Оформить заказ <img src="/img/str.svg" alt="Arrow" />
            </button>
          </div>
          </div>
          ) : (
            <div className="close">
              <img width="300px" height="300px" src="img/close.png" />
              <h2>В корзине ничего нет</h2>
              <p>
                Выберите товары или войдите в аккаунт, если добавляли товары в
                корзину
              </p>
              <button onClick={onClose} className="greenBtn">
                <img src="/img/str.svg" alt="Arrow" /> Вернуться к покупкам
              </button>
            </div>
          )}
          {/* усли есть хоть что то рендари items ЕСЛИ нет то рендари close */}
          
        </div>
      </div>
    );
=======
    return(
        <div className="overlay" >
      
    <div className="drawer" >
    <h2>
      Корзина 
      <img onClick={onClose} className="removBtn" src="/img/btn-remov.svg" alt="Remov" />
    </h2>
    
      

    <div className="items">
        {
          items.map((obj) => (
            
              <div className="cartItem">
            <img
          width={70}
          height={70}
          src={obj.imageUrl}
          alt="Sneakers"/>
          <div>
          <p>{obj.title}</p>
          <b>{obj.price} руб.</b>
          </div>
        <img  onClick={() => onRemove(obj.id)} className="removBtn" src="/img/btn-remov.svg" alt="Remov" />
      </div>
      
          ))
        }
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
      <button className="greenBtn">
        Оформить заказ <img src="/img/str.svg" alt="Arrow" />
      </button>
    </div>
  </div>
  </div>


    )
>>>>>>> main
}
export default  Drawer;

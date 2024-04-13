function Drawer() {
    return(
        <div className="overlay">
      
    <div className="drawer">
    <h2>
      Корзина{" "}
      <img className="removBtn" src="/img/btn-remov.svg" alt="Remov" />
    </h2>
    <div className="items">
      <div className="cartItem">
        <img
          width={70}
          height={70}
          src="/img/sneak/1.jpg"
          alt="Sneakers"
        />
        <div>
          <p>Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removBtn" src="/img/btn-remov.svg" alt="Remov" />
      </div>

      <div className="cartItem">
        <img
          width={70}
          height={70}
          src="/img/sneak/1.jpg"
          alt="Sneakers"
        />
        <div>
          <p>Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removBtn" src="/img/btn-remov.svg" alt="Remov" />
      </div>
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
}
export default  Drawer;
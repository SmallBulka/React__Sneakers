<<<<<<< fin
import { Link } from "react-router-dom";
=======
>>>>>>> main
function Header(props) {
    return (
      <header>
        <div className="header__left">
          
        <Link link to="/">
          <img src="/img/logo.svg" />
        </Link>
          <div>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div>
          <ul className="header__right">
            <li onClick={props.onClickCart}>
              <img width={18} height={18} src="/img/Group.svg" />
              <span>1205</span>
            </li>
            <li>
              <Link to="/favorites">
                <img width={18} height={18} src="/img/zakladki.svg" />
                <span>Закладки</span>
              </Link>
            </li>
            <li>
              <img width={18} height={18} src="/img/Union.svg" />
              <span>Профиль</span>
            </li>
          </ul>
        </div>
      </header>
    );
}
export default  Header;

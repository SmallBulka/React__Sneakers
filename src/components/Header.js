function Header() {
    return (
      <header>
        <div className="header__left">
          <img src="/img/logo.svg" />
          <div>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div>
          <ul className="header__right">
            <li>
              <img width={18} height={18} src="/img/Group.svg" />
              <span>1205</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/zakladki.svg" />
              <span>Закладки</span>
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
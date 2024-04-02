import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className='header__left'>
          <img className='logo' src="/img/logo.svg" />
          <div>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div>
          <ul className='header__right'>
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
      <div>
        <h1>Все кроссовки</h1>
      
      <div className='card'>
        <img width={133} height={112} src='/img/sneak/1.jpg'/>
        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className='cardFoor'>
          <div className='cardInfo'>
            <span>Цена:</span>
            <b>12 999</b>
          </div>
          <button>
            <img src='/img/Vector.svg'/>
          </button>
        </div>
      </div>
    </div>
    </div>
      
  );
}

export default App;

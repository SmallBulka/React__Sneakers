import logo from './logo.svg';
import Card from './components/Card';
import  Header from './components/Header';
import  Drawer from './components/Drawer';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Drawer/>

      <Header/>
      <div className="content">
        <div className="seach-heading">
          <h1>Все кроссовки</h1>
          <div className="seach-block">
            <img src="/img/input.svg" alt="Seach" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="assortment">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

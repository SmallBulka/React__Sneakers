

import React from 'react'
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import AppContext from './context';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";
import Orders from './pages/Orders';
// import Info from './components/Info';


// import Scsrt from './components/MainSlider'
// import Modal from './Modal/Modal';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [seachValue, setSeachValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  // const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  // const [orderId, setOrderId] = React.useState(null);
  
  React.useEffect(() => {
    async function fetchData() {
      setisLoading(true);
      const itemsResponse = await axios.get('https://662213ce27fcd16fa6c8ad3e.mockapi.io/items');
      const cartResponse = await axios.get('https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://663883814253a866a24e0be6.mockapi.io/favorites');

      setisLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      
    }
    fetchData();
  }, []);
  const onRemoveItem = (id) => {
    try {
    axios.delete(`https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  // const removeFromCart = (id) => {
  //   axios.post(`https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart/${id}`)
  //   setCartItems((prev) => [...prev, obj]);

  // onRemove={removeFromCart}
  //   }


  const onAddFavorite = async (obj) =>{
    try{
      if (favorites.find((favObj)=> Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://663883814253a866a24e0be6.mockapi.io/favorites/${obj.id}`)
        
        
      } else {
      const {data} = await axios.post('https://663883814253a866a24e0be6.mockapi.io/favorites', obj)
        // const resp = await (дождись запроса от бека. когда дождется ответ передаст в переменную resp)
        // тоже самое что и .then((res)
        //post запрос при создании чего-либо
        setFavorites((prev) => [...prev, data]);
      }
      // try отлавливает ошибки
      // try попробуй выполнить этот код. если он не выполниться отлови эту ошибку catch alert 
    } catch (error) {
      alert('Не удалость добавить в подравившиеся');
      console.error(error);
    }
  };
  
  const onChangeSearchInput = (event) => {
    setSeachValue(event.target.value);
  };
  

  const onAddToCart = (obj) =>{
    if (cartItems.find((item)=> Number(item.parentId) === Number(obj.id))){
      axios.delete(`https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart/${obj.id}`)
      // если в корзине хотя бы один обьект имеет такой же id который был при нажатие на это же кнопку плюс удали его
      setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
    } else { // если не нашёл в корзине создай этот товар и отправь на бек если же нашёлся удали его из 
      axios.post('https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart', obj);
      // post запрос при создании чего-либо
    setCartItems((prev) => [...prev, obj]);
    }
    
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };





  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddFavorite, setCartOpened, onAddToCart, setCartItems, isLoading}}>
    <div className="wrapper">
      <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened}/>
      <Header onClickCart={() => setCartOpened(true)}/>
      
      {/* <button onClick={() => setModalActive(true)}>rgrgr</button>
      <Modal active={modalActive} setActive={setModalActive}> */}
      
      {/* <Scsrt /> */}
         {/* </Modal> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              seachValue={seachValue}
              setSeachValue={setSeachValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
          exact
        />
      </Routes> 
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites/>
          }
          exact
        />
      </Routes> 
      
      <Routes>
        <Route
          path="/orders"
          element={
            <Orders/>
          }
          exact
        />
      </Routes> 
      
    </div>
    </AppContext.Provider>
  );
}


export default App;



import React from 'react'
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [seachValue, setSeachValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  
  React.useEffect(() => {
    // fetch('https://662213ce27fcd16fa6c8ad3e.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

      axios.get('https://662213ce27fcd16fa6c8ad3e.mockapi.io/items').then((res) => {
        setItems(res.data);
      });
      // get запрос при получении чего либо
      axios.get('https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart').then((res) => {
        setCartItems(res.data);
      });
      axios.get('https://663883814253a866a24e0be6.mockapi.io/favorites').then((res) => {
      setCartItems(res.data);
      });
  }, []);

  const onRemoveItem = (id) => {
    console.log(id)
    axios.delete(`https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  // const removeFromCart = (id) => {
  //   axios.post(`https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart/${id}`)
  //   setCartItems((prev) => [...prev, obj]);

  // onRemove={removeFromCart}
  //   }


  const onAddFavorite = (obj) =>{
    axios.post('https://6636073d415f4e1a5e260bdf.mockapi.io/favorites', obj);
      // post запрос при создании чего-либо
      setFavorites((prev) => [...prev, obj]);
  };
  
  const onChangeSearchInput = (event) => {
    setSeachValue(event.target.value);
  };
  const onAddToCart = (obj) =>{
    axios.post('https://662213ce27fcd16fa6c8ad3e.mockapi.io/cart', obj);
      // post запрос при создании чего-либо
    setCartItems((prev) => [...cartItems, obj]);
  };


  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/> : null }
      <Header onClickCart={() => setCartOpened(true)}/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              seachValue={seachValue}
              setSeachValue={setSeachValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes> 
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites}/>
          }
          exact
        />
      </Routes> 
      
    </div>
  );
}

export default App;

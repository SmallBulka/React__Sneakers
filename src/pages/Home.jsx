import Card from "../components/Card";
import React from 'react';

import CarouselCompound from '../components/carousel-compound'


function Home({ items, seachValue,  setSeachValue, onChangeSearchInput, onAddFavorite, onAddToCart, isLoading}) {
  // const mainTitleRef = useRef(null);  
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(seachValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            
      <Card 
      key={index}
      
      onFavorite={(obj) => onAddFavorite(obj)}
      onPlus={(obj) => onAddToCart(obj)}
      loading={isLoading}
      //если хоть одно условие совпало то вернется тру если ничего не сопало он ничего не даст
      {...item}
      />
    ))

  };   
  return(
        <div className="content">
           <div className="app__main-container">
      <CarouselCompound infinite>
        <CarouselCompound.Page>
          
          <div className="item item-1"></div>
          
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <div className="item item-2"></div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <div className="item item-3"></div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
    <div>
        <div className="seach-heading">
          <h1>{seachValue ? `Поиск по запросу: "${seachValue}"` : 'Все кроссовки'}</h1>
          <div className="seach-block">
            <img src="/img/input.svg" alt="Seach" />
            {seachValue &&( <img onClick={() => setSeachValue('')} className="removBtn" src="/img/cross.svg" alt="Remov" />)}
            <input onChange={onChangeSearchInput} value={seachValue} placeholder="Поиск..." />
          </div>
        </div>
        </div>
        <div className="assortment">
          
          {renderItems()}
        </div>
      </div>
    )
    

   
   
}
  
export default Home;
import Card from "../components/Card";
import React from 'react';



function Home({ items, seachValue,  setSeachValue, onChangeSearchInput, onAddFavorite, onAddToCart, isLoading}) {
  
  const renderItems = () => {
    return (isLoading ? [...Array(10)] : items.filter((item) => item.title.toLowerCase().includes(seachValue.toLowerCase())))
    // если загрузка идёт делаем 10 скелетиков если закончилась рендарим все карточки
    .map((item, index) => (
            
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
        <div className="seach-heading">
          <h1>{seachValue ? `Поиск по запросу: "${seachValue}"` : 'Все кроссовки'}</h1>
          <div className="seach-block">
            <img src="/img/input.svg" alt="Seach" />
            {seachValue && <img onClick={() => setSeachValue('')} className="removBtn" src="/img/cross.svg" alt="Remov" />}
            <input onChange={onChangeSearchInput} value={seachValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="assortment">
          {renderItems()}
        </div>
      </div>
    )
}
export default Home;
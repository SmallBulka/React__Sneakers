
import React from 'react'
import Card from "../components/Card";

import AppContext from "../context";


function Favorites() {
  const {favorites, onAddFavorite} = React.useContext(AppContext);
    return(
        <div className="content">
        <div className="seach-heading">
          <h1>Мои закладки</h1>
          
        </div>

        <div className="assortment">
           {favorites.map((item, index) => (
            
            <Card 
            key={index}
            
            favorited={true}
            onFavorite={onAddFavorite}
            {... item}
            // onFavorite={(obj) => onAddFavorite(obj)}
            // onPlus={(obj) => onAddToCart(item)}
            />
          ))}
        </div> 
      </div>
    )
}
export default Favorites;
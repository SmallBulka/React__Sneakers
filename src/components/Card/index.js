import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.css";
import AppContext from '../../context';
// import Modal from '../../Modal/Modal';


function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const { isItemAdded } = React.useContext(AppContext);
  
  const obj = { id, parentId: id, title, imageUrl, price };
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus(obj);
    setIsAdded(true);
  };
  
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    
    <div className={styles.card} >
      
      
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={210}
          viewBox="0 0 150 210"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="123" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="174" rx="5" ry="5" width="80" height="25" />
          <rect x="115" y="170" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
        
      ) : (
        <>
        
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? "/img/header-like.svg" : "/img/favorite-unactive.jpg"}
                alt="Unliked"
              />
            </div>
          )}
          <img width='100%' height={135} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className={styles.cardFoor}>
            <div className={styles.cardInfo}>
              <span>Цена:</span>
              
              <b>{price}</b>
            </div>
            <form>
  
  <select name="size" id="size-select">
    <option value=""></option>
    <option value="petersburg">39</option>
    <option value="samara">40</option>
    <option value="perm">41</option>
    <option value="novosibirsk">44</option>
  </select>
</form>
            
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
                alt="Plus"
              />
              
              
              
            
          </div>
        </>
      )}
    </div>
  );
  
}

export default Card;

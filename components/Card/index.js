import React from 'react'
import styles from './Card.module.css'


function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);

  };
  const onClickFavorite = () => {
    onFavorite({title, imageUrl, price});
    setIsFavorite(!isFavorite);
  };
  

  const onClickBtn = () => {
    alert(title)
  }
    return (
      <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? '/img/header-like.svg' : '/img/Head.svg'} alt="Unliked" />
        </div>

        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className={styles.cardFoor}>
          <div className={styles.cardInfo}>
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          
            <img onClick={onClickPlus} src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'} alt='Plus'/> 
            {/* если где то isAdded будет тру то сделай такую строчку('/img/btn-cheked.svg' ) иначе сделай другую */}
          
        </div>
      </div>
    );
}
export default Card;
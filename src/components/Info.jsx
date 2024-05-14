import React from 'react'
import AppContext from '../contex';

const Info = ({image, title, description}) => {
    const {setCartOpened} = React.useContext(AppContext);
  return (
    <div>
        <div className="close">
              <img width="300px" src="img/close.png" alt="Close"/>
              <h2>{title}</h2>
              <p>
              {description}
              </p>
              <button onClick={() => setCartOpened(false)} className="greenBtn">
                <img src={image} alt="Arrow" /> Вернуться к покупкам
              </button>
            </div>
    </div>
  )
}

export default Info;

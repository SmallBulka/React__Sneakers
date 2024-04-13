


function Card() {
    return (
      <div className="card">
        <div className="favorite">
          <img src="/img/heard-no.svg" alt="Unliked" />
        </div>

        <img width={133} height={112} src="/img/sneak/1.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardFoor">
          <div className="cardInfo">
            <span>Цена:</span>
            <b>12 999</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" />
          </button>
        </div>
      </div>
    );
}
export default Card;
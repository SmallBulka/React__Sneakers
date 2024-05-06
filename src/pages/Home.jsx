import Card from "../components/Card";


function Home({ items, seachValue, setSeachValue, onChangeSearchInput, onAddFavorite, onAddToCart}) {
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
          {items.filter(item => item.title.toLocaleLowerCase().includes(seachValue)).map((item) => (
            
            <Card 
            
            title={item.title}
            price={item.price} 
            imageUrl={item.imageUrl} 
            onFavorite={(obj) => onAddFavorite(obj)}
            onPlus={(obj) => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    )
}
export default Home;
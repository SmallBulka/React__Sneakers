
import React from 'react'
import Card from "../components/Card";
import axios from 'axios';
import AppContext from "../context";


function Orders() {
  const {onAddFavorite, onAddToCart} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetcheData() {
      try{
      const {data} = await axios.get('https://61e182c263f8fc0017618cb3.mockapi.io/ordes');
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setisLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
  }
  fetcheData();
  },[]);
    return(
        <div className="content">
        <div className="seach-heading">
          <h1>Мои заказы</h1>
          
        </div>

        <div className="assortment">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div> 
      </div>
    )
}
export default Orders;
import { Link } from 'react-router-dom';
import './ItemCard.css';

export default function ItemCard({item}) {
  return (
    <Link to={`Modal`} state={{item: item}} className='item-card'>
      <li>
        <h2>{item.productname}</h2>
        <h3><span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span></h3>
      </li>
    </Link>
  )
}
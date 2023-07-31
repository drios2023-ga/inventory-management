import { Link } from 'react-router-dom';
import './ItemCard.css';

export default function ItemCard({item}) {
  return (
    <Link to={`Modal`} state={{item: item}} className='item-card'>
      <li>
        <h2>{item.productname}</h2>
        <h3>
          {item.quantity > 15 && <span style={{color: "green"}}>{item.quantity}</span>}
          {(item.quantity <= 15 && item.quantity > 10 ) && <span style={{color: "goldenrod"}}>{item.quantity}</span>}
          {item.quantity <= 10 && <span style={{color: "red"}}>{item.quantity}</span>} 
          &nbsp; | <span>SKU: {item.SKU}</span></h3>
      </li>
    </Link>
  )
}

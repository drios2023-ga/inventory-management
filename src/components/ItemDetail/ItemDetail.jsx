import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { deleteItem, updateItem } from "../../utilities/items-service";
import './ItemDetail.css'

export default function ItemDetail({ getItem, currentItem, setCurrentItem, fetchOneItem  }) {
  const navigate = useNavigate();

  async function removeItem(id) {
    await deleteItem(id);
    getItem();
    navigate("/");
  }

  async function plusMinusOne(changeValue){
    const updatedItemData = {
      _id: currentItem._id,
      productname: currentItem.productname,
      SKU: currentItem.SKU,
      quantity: currentItem.quantity+changeValue,
    }
    await updateItem(updatedItemData);
    fetchOneItem();
    getItem();
  }

  useEffect(()=>{
    fetchOneItem();
  },[])

  return (
    <div className="item-detail">
      <h1>{currentItem.productname}</h1>
      <div className='quantity-container'>
        <button className='button' onClick={() => plusMinusOne(-1)}>-</button>
        <h2>Qty: {currentItem.quantity}</h2>
        <button className='button' onClick={() => plusMinusOne(1)}>+</button>
      </div>
      <h3>SKU: {currentItem.SKU}</h3>
      <button className='button' onClick={() => removeItem(currentItem._id)}>Delete</button>
    </div>
  );
}

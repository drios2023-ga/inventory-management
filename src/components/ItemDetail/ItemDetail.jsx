import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { deleteItem, updateItem, getOneItem } from "../../utilities/items-service";
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
    
    console.log(updatedItemData);
    await updateItem(updatedItemData);
    fetchOneItem();
    getItem();
  }

  useEffect(()=>{
    fetchOneItem();
  },[])

  return (
    <div className="item-detail">
      <button onClick={() => navigate(-1)} className='close-button'>X</button>
      <h2>{currentItem.productname}</h2>
      <h3>
        <span>Qty: {currentItem.quantity}</span> | <span>SKU: {currentItem.SKU}</span>
      </h3>
      <button onClick={() => plusMinusOne(1)}>+1</button>
      <button onClick={() => plusMinusOne(-1)}>-1</button>
      <button onClick={() => removeItem(currentItem._id)}>Delete</button>
    </div>
  );
}

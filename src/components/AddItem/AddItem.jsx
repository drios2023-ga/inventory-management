import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createItem } from "../../utilities/items-service";
import './AddItem.css';

export const AddItem = ({ getItem }) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    productname: "",
    quantity: 0,
    SKU: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await createItem(item);
    setItem({
      productname: "",
      quantity: 0,
      SKU: "",
    });
    getItem();
    navigate(-1);
  }

  function handleChange(evt) {
    const itemData = { ...item, [evt.target.name]: evt.target.value };
    setItem(itemData);
  }

  return (
    <div className="modalDiv">
      <div className="modal">
        <form onSubmit={handleSubmit} className='item-form'>
          <label>Product Name: </label>
          <input
            type="text"
            name="productname"
            value={item.productname}
            onChange={handleChange}
            required
          />
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            required
          />
          <label>SKU: </label>
          <input
            type="text"
            name="SKU"
            value={item.SKU}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
          <button onClick={() => navigate(-1)}>Close</button>
        </form>
      </div>
    </div>
  );
};
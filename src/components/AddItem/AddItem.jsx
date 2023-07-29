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
        <button onClick={() => navigate(-1)} className='close-button'>X</button>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <label>Product Name
              <input
                type="text"
                name="productname"
                value={item.productname}
                onChange={handleChange}
                required
              />
            </label>
            <label>Quantity
              <input
                type="number"
                min='0'
                name="quantity"
                value={item.quantity}
                onChange={handleChange}
                required
              />
            </label>
            <label>SKU
              <input
                type="text"
                name="SKU"
                value={item.SKU}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className='button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
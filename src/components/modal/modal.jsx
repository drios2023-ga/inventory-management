import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { deleteItem, getOneItem } from "../../utilities/items-service";
import ItemDetail from '../ItemDetail/ItemDetail';
import EditItemForm from '../EditItemForm/EditItemForm';
import './Modal.css';

export default function Modal({ getItem }) {
  const [showForm, setShowForm] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state;
  const [currentItem, setCurrentItem] = useState({});

  async function removeItem(id) {
    await deleteItem(id);
    getItem();
    navigate("/");
  }

  async function fetchOneItem(){
    let oneItem = await getOneItem(item._id);
    setCurrentItem(oneItem);
  }

  useEffect(()=>{
    fetchOneItem();
  },[])

  return (
    <div className="modalDiv">
      <div className="modal">
        { showForm ?
            <EditItemForm getItem={getItem} currentItem={currentItem} setCurrentItem={setCurrentItem} fetchOneItem={fetchOneItem} />
            :
            <ItemDetail getItem={getItem}  currentItem={currentItem} setCurrentItem={setCurrentItem} fetchOneItem={fetchOneItem} />
        }
        <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Item Details' : 'Edit Item'}</button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getItems } from '../../utilities/items-service';

import ItemsList from '../ItemsList/ItemsList';
import { getUser } from "../../utilities/users-service";

import Modal from "../../components/modal/modal";
import { AddItem } from '../../components/AddItem/AddItem';
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../../components/AuthPage/AuthPage";
import EditItemForm from "../../components/EditItemForm/EditItemForm";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [items, setItems] = useState([]);
  const location = useLocation();
  const background = location.state && location.state.background;

  const getItem = async () => {
    const response = await getItems();
    setItems(response)
  }

  useEffect(()=>{
    if(user){
      getItem();
    }
  }, [user])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes location={background || location}>
            <Route path="/" element={<ItemsList user={user} items={items} getItem={getItem} />}>
              <Route path='AddItem' element={<AddItem getItem={getItem} />} />
              <Route path='Modal' element={<Modal getItem={getItem} />} />
              <Route path='EditItemForm' element={<EditItemForm getItem={getItem} />} />
              <Route path='ItemDetail' element={<ItemDetail getItem={getItem} />} />
            </Route>
          </Routes>
          {background && (
            <Routes>
              <Route path="AddItem" element={<AddItem getItem={getItem} />} />
              <Route path='Modal' element={<Modal getItem={getItem} />} />
              <Route path='EditItemForm' element={<EditItemForm getItem={getItem} />} />
              <Route path='ItemDetail' element={<ItemDetail getItem={getItem} />} />
            </Routes>
          )}
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

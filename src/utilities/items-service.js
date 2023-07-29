import * as itemsAPI from './items-api';

export async function getItems() {
  const token = await itemsAPI.getItems();
  return token
}

export async function createItem(formData){
  await itemsAPI.newItem(formData);
}

export async function deleteItem(id){
  await itemsAPI.deleteItem(id);
}

export async function updateItem(formData){
  await itemsAPI.updateItem(formData);
}

export async function getOneItem(id){
  const token = await itemsAPI.getOneItem(id);
  return token

}
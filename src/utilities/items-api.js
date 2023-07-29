import sendRequest from './send-request';
//const BASE_URL = '/api/items'
const BASE_URL = '/inventoryitems'

export async function getItems() {
  return sendRequest(BASE_URL);
}

export async function getOneItem(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function newItem(formData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export async function deleteItem(id){

  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function updateItem(formData){
  const id  = formData._id;
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', formData);
}
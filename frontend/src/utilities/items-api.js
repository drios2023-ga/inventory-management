import sendRequest from './send-request';
const BASE_URL = '/api/items'

export async function getItems() {
  return sendRequest(BASE_URL);
}
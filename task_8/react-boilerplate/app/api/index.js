import axios from 'axios';

let url_root = 'https://jsonplaceholder.typicode.com/posts';

export default function getDataResponse() {
  return axios.get(url_root);
}



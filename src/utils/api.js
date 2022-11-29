import { BASE_URL } from "./constants";

class Api {
  constructor({ baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._getJsonOnError = this._getJsonOnError.bind(this);
  }

  _getJsonOnError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getUserInfo = () => {
    return fetch(`${this._baseUrl}/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._getJsonOnError).then(res => res.data);
  };

  getAllUsers = () => {
    return fetch(`${this._baseUrl}/users`, {
      method: "GET",
      headers: this._headers,
    }).then(this._getJsonOnError).then(res => res.data);
  };

  sendMessage = (user, name, theme, text, time) => {
    return fetch(`${this._baseUrl}/sendmessage`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ user, name, theme, text, time }),
    }).then(this._getJsonOnError).then(res => res.data); 
  };

  updateToken = (jwt) => {
    this._headers['Authorization'] = `Bearer ${jwt}`;
  };
}


const jwt = localStorage.getItem("jwt");
const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json",
    'Authorization': `Bearer ${jwt}`,
  },
});

export default api;
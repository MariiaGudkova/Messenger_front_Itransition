import { BASE_URL } from "./constants";

export const authorize = (name) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name }),
  }).then((res) => res.json());
};
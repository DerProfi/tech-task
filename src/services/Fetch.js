import axios from "axios";

export const api = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then( function (response) {
      return response.data
    })
    .catch(error => console.log(error))
}
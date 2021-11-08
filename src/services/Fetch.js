import axios from "axios";

export const api = (username) => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => (console.log(response)))
    .catch(error => console.log(error))
}


// export const api = async (username) => {
//   try {
//     const res = await fetch(`https://api.github.com/users/${username}`);
//     const data = await res.json();
//     return data;
//     // since fetch will not throw an http error, we have to catch it and throw it ourself
//   } catch (err) {
//     console.log(err);
//   }
// };
import axios from "axios";

export const api = async (username) => {
  try{
    const response = await axios
    .get(`https://api.github.com/users/${username}`)
    return response.data
  }
  catch (err) {
    console.log(err)
  }
};
import axios from "axios";
const apiUrl = "https://rickandmortyapi.com/api/character";

export async function getCharacters() {
  let data = null;
  return axios
    .get(apiUrl)
    .then(data)
    .catch(function (error) {
      console.log(error);
    });
}

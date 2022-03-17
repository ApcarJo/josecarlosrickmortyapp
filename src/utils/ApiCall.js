import axios from "axios";
const apiUrl = "https://rickandmortyapi.com/api/character";

export function getCharacters() {
  let data;
  axios.get(apiUrl).then((response) => {
    response.data;
  });
  console.log(data);
  return;
}

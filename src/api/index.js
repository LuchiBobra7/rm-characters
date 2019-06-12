import axios from "axios";
export const API_SERVER = "https://rickandmortyapi.com/api";
export const DEFAULT_CHARACTER_IMG = `${API_SERVER}/character/avatar/19.jpeg`;
export const LOADER_IMG =
  "https://media.giphy.com/media/35nU79vBbeOm4/source.gif";
export const NO_RESULTS_IMG =
  "https://media.giphy.com/media/3o85xLbmtO1CTYvwDC/giphy.gif";
export const NO_MATCH_IMG =
  "https://media.giphy.com/media/3o85xw0bF1CSBumoLK/giphy.gif";

export const getCharacters = (page, gender, status, species, name) => {
  const params = {
    page,
    gender,
    status,
    species,
    name
  };
  return axios.get(`${API_SERVER}/character/`, { params });
};

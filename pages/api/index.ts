import axios from "./axios";

class Api {
  getCharacters = async (params?: any) => {
    const { data } = await axios.get(`/characters`, { params });
    return data;
  }
}

const api = new Api();
export default api;
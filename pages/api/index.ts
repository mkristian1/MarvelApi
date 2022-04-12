import axios from "./axios";

class Api {
  getCharacters = async (params?: any) => {
    const res = await axios.get(`/characters`, { params: { params } });
    return res;
  }
}

const api = new Api();
export default api;
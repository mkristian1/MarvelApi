import axios from "axios";

const MAIN_URL = process.env.NEXT_PUBLIC_API_URL;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

export default axios.create({
    baseURL: MAIN_URL,
    params: {
        apikey: PUBLIC_KEY
    }
  });
import axios from "axios";
import env from "react-dotenv";

export const api = axios.create({
  baseURL: env.REACT_APP_API_BASE_URL,
});

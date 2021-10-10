import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.API_BASE_URL || "https://plg-launchbase-backend.herokuapp.com",
});

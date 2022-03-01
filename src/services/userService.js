import http from "./httpService";
import config from "../config/default.json";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_DEV_BUILD_URL;

const apiEndpoint = baseURL + config.registerAPI;

export async function register(user) {
  const response = await http.post(apiEndpoint, user);
  return response;
}

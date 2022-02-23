import http from "./httpService";
import config from "../config/default.json";

const apiEndpoint = config.baseURL + config.registerAPI;

export async function register(user) {
  const response = await http.post(apiEndpoint, user);
  return response;
}

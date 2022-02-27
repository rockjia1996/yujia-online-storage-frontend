import http from "./httpService";

import config from "../config/default.json";

const apiEndPoint = config.baseURL + config.loginAPI;

const tokenKey = "token";

export async function login(email, password) {
  const { data } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, data.jwt);
  http.setJwt(data.jwt);
  return data;
}

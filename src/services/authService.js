import http from "./httpService";

import config from "../config/default.json";
import { process } from "joi-browser";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_DEV_BUILD_URL;
const apiEndPoint = baseURL + config.loginAPI;

const tokenKey = "token";

export async function login(email, password) {
  const { data } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, data.jwt);
  http.setJwt(data.jwt);
  return data;
}

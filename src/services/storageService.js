import http from "./httpService";
import config from "../config/default.json";

const baseURL = config.baseURL;

const apiFileList = baseURL + config.fileListAPI;
const apiUpload = baseURL + config.uploadAPI;
const apiDelete = baseURL + config.deleteAPI;
const apiDownload = baseURL + config.downloadAPI;

export async function getFileList() {
  http.setJwt(localStorage.getItem("token"));
  const { data } = await http.get(apiFileList);

  return data;
}

export async function uploadFile(data) {
  http.setJwt(localStorage.getItem("token"));
  const response = await http.post(apiUpload, data, {
    header: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}

export async function deleteFile(filename) {
  http.setJwt(localStorage.getItem("token"));
  const response = await http.delete(apiDelete, {
    data: { filename: filename },
  });
}

export async function downloadFile(filename) {
  // responseType needs to specify as blob. IMPORTANT
  const response = await http.get(apiDownload + "/" + filename, {
    responseType: "blob",
  });

  const fileType = response.headers["content-type"];
  const blob = new Blob([response.data], { type: fileType });
  const href = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), {
    href,
    style: "display: none",
    download: filename,
  });
  document.body.appendChild(a);

  a.click();
  URL.revokeObjectURL(href);
  a.remove();
}

import axios from "axios";

axios.defaults.baseURL = [ "http://127.0.0.1:8000/", "https://8000-danilleh22-jtgtrucking-wa22733plo0.ws.codeinstitute-ide.net/"]
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
import axios from "axios";

const csrfToken = document.cookie
  .split("; ")
  .find((row) => row.startsWith("csrftoken="))
  ?.split("=")[1];

const instance = axios.create({
  baseURL: "https://8000-danilleh22-jtgtrucking-wa22733plo0.ws.codeinstitute-ide.net/",
  headers: {
    "X-CSRFToken": csrfToken,
    "Content-Type": "application/json",
  },
});

export default instance;

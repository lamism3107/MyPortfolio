import axios, { AxiosRequestConfig } from "axios";

const config = {
  // BASE_URL: "http://localhost:3000",
  BASE_URL: process.env.NEXTAUTH_URL,
  TIME_OUT: 3000,
};

const fetcher = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
});

fetcher.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

if (typeof window !== "undefined" && window) {
  fetcher.defaults.headers.common["Authorization"] =
    "Bear " + window.localStorage.getItem("accessToken");
}

// const fetcher = (endpoint) =>
//   fetch(`http://localhost:3000${endpoint }`).then((res) => res.json());
export default fetcher;

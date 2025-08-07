import axios from "axios";

// baseUrl : "https://6524af9bea560a22a4ea00cf.mockapi.io/"
export const config = {
  baseUrl: "https://6524af9bea560a22a4ea00cf.mockapi.io/",
};

export const fetchData = (url, data, method) => {
  return axios({
    url: config.baseUrl + url,
    data: data,
    method: method,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

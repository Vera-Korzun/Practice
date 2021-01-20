import axios from "axios";

export default class ApiServicesClass {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3001";
  }
  getSpending() {
    return axios
      .get("spending")
      .then((resp) => resp.data)
      .catch((error) => error);
  }

  getIncome() {
    return axios
      .get("income")
      .then((resp) => resp.data)
      .catch((error) => error);
  }
  post(category, data) {
    return axios
      .post(category, data)
      .then((resp) => resp.data)
      .catch((error) => error);
  }
}

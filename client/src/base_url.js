import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://128.199.16.23:5000/",
});

// const instance = Axios.create({
//   baseURL: "http://localhost:5000/",
// });

export default instance;

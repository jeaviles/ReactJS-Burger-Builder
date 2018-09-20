import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-portfolio-ee5b6.firebaseio.com/"
});

export default instance;

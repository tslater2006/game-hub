import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6452e8af01804e40a49fdb4981d6871c",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1d4f5904358f4b5aa67d980b2963489e",
  },
});

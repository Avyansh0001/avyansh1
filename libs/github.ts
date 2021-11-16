import axios from "axios";

const reposEndpoint = `https://api.github.com/users/Avyansh0001/repos`;
const userEndpoint = `https://api.github.com/users/Avyansh0001`;
export const fetchRepository = async () => {
  return await axios.get(reposEndpoint);
};

export const fetchUser = async () => {
  return await axios.get(userEndpoint);
};

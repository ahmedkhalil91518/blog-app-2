import axios from "axios";

export const getAll = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response.data;
};

export const createNew = async (content) => {
  const response = await axios.post("http://localhost:3001/posts", content);
  return response.data;
};
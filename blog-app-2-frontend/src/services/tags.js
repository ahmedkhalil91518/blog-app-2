import axios from "axios";

export const getAllTags = async () => {
  const response = await axios.get("http://localhost:3001/tags");
  return response.data;
};
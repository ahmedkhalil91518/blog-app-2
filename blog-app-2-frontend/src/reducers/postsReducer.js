import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../services/posts";
const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPosts(state, action) {
      return action.payload;
    },
  },
});

export const { getAllPosts } = postsSlice.actions;

export const getAllPostsAC = () => {
  return async (dispatch) => {
    const posts = await getAll();
    dispatch(getAllPosts(posts));
  };
};

export default postsSlice.reducer;

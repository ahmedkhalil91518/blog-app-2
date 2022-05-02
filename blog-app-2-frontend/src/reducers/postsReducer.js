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

export const getAllTagRelatedAC = (tag) => {
  return async (dispatch) => {
    const posts = await getAll();
    const filtered = posts.filter((x) => {
      let containTag = false;
      for (let i = 0; i < x.tags.length; i++) {
       
        if (x.tags[i].id === +tag) {
          containTag = true;
          console.log(x.tags[i].id, +tag);
        }
      }
      return containTag;
    });
    console.log(filtered);
    dispatch(getAllPosts(filtered));
  };
};

export default postsSlice.reducer;

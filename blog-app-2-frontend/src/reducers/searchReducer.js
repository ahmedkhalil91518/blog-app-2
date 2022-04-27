import { createSlice} from "@reduxjs/toolkit";
import Fuse from "fuse.js";
import { getAll } from "../services/posts";

let posts;
async function get() {
  posts = await getAll();
}
get();
const initialState = "";
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchPosts(state, action) {
      const fuse = new Fuse(posts, {
        keys: ["title", "creatorName", "tags"],
      });
      const results = fuse.search(action.payload);
      return results.map(i => {
        return i.item
      });
    },
  },
});

export const { searchPosts } = searchSlice.actions;
export default searchSlice.reducer;

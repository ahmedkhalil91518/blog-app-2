import React from "react";
import PostCSS from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAllPostsAC } from "../../reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";

function Post() {
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsAC());
  }, [dispatch]);

  const posts = useSelector((state) => {
    console.log(state.posts);
    return state.posts;
  });

  const postById = (id) => {
    const x = posts.filter((a) => {
      return a.id === id;
    });
    console.log(x);
    return x[0];
  };

  return <>{posts.length > 0 ? <div>{postById(id).title}</div> : null}</>;
}

export default Post;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAC } from "../../reducers/postsReducer";
function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts;
  });

  useEffect(() => {
    dispatch(getAllPostsAC());
  }, [dispatch]);

  return (
    <div>
      {" "}
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}{" "}
    </div>
  );
}

export default Home;

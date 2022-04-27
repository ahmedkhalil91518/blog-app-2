import React from "react";
import PostCSS from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAllPostsAC } from "../../reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";

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

  if (posts.length > 0) {
    return (
      <div className="d-flex flex-column align-items-start m-5 footerfix">
        <div>
          <Card key={postById(id).id}>
            <div className="d-flex flex-row m-3">
              <img
                src={postById(id).creatorPic}
                alt="creator"
                className={PostCSS.circle}
              />{" "}
              <div className="d-flex flex-column mx-3">
                <div> by {postById(id).creatorName}</div>
                <div>{postById(id).dateCreated}</div>
              </div>
            </div>
          </Card>
        </div>
        <h1 className="My-5">{postById(id).title}</h1>
        <div className={PostCSS.content}>{postById(id).content}</div>
      </div>
    );
  } else {
    return null;
  }
}

export default Post;

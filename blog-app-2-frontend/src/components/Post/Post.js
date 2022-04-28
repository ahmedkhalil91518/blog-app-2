import React from "react";
import PostCSS from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAllPostsAC } from "../../reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Comments from "../Comments/Comments";

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
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="footerfix col-10 col-md-8 col-lg-6 my-2">
            <div className=" my-5">
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
            <h1 className="my-2">{postById(id).title}</h1>
            <div className={"my-2 " + PostCSS.content}>
              {postById(id).content}
            </div>
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"
              className="my-2"
            />
          </div>{" "}
          <div className="col"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Post;

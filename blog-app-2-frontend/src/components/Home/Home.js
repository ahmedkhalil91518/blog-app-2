import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAC } from "../../reducers/postsReducer";
import HomeCSS from "./Home.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    if (state.search.length > 0) {
      return state.search;
    } else {
      return state.posts;
    }
  });

  useEffect(() => {
    dispatch(getAllPostsAC());
  }, [dispatch]);

  return (
    <div className="d-flex flex-row">
      <div className={HomeCSS.main}>
        <h1>Posts</h1>
        <div className={HomeCSS.grid}>
          {" "}
          {posts.map((post) => {
            return (
              <Card key={post.id}>
                <Card.Header className="d-flex flex-row">
                  <img
                    src={post.creatorPic}
                    alt="creator"
                    className={HomeCSS.circle}
                  />{" "}
                  <div className="d-flex flex-column mx-3">
                    <div>{post.creatorName}</div>
                    <div>{post.dateCreated}</div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={`/posts/${post.id}`} className={HomeCSS.links}>
                      {post.title}
                    </Link>
                  </Card.Title>
                  <Card.Subtitle>
                    {post.tags.map((tag) => {
                      return <span>#{tag} </span>;
                    })}
                  </Card.Subtitle>
                  <div>
                    <Rating
                      name="simple-controlled"
                      value={+post.rating}
                      className="my-2"
                    />
                  </div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}{" "}
        </div>
      </div>
      <div className={HomeCSS.tags}>
        <h2>Tags</h2>
        <div className={HomeCSS.tagsContainer}>#cars #cats #dogs</div>
      </div>
    </div>
  );
}

export default Home;

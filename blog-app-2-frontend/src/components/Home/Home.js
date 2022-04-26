import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAC } from "../../reducers/postsReducer";
import HomeCSS from "./Home.module.css";
import { Card, Button } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts;
  });

  useEffect(() => {
    dispatch(getAllPostsAC());
  }, [dispatch]);

  return (
    <div className={HomeCSS.grid}>
      {" "}
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}{" "}
    </div>
  );
}

export default Home;

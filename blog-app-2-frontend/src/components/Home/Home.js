import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAC } from "../../reducers/postsReducer";
import HomeCSS from "./Home.module.css";
import { Card } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts;
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
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
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
        <div  className={HomeCSS.tagsContainer}>#cars #cats #dogs</div>
      </div>
    </div>
  );
}

export default Home;

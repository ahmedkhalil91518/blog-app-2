import { getAllTagRelatedAC } from "../../reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import TagsHomeCSS from "./TagsHome.module.css";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function TagsHome() {
  const dispatch = useDispatch();

  const id = useParams().id;
  useEffect(() => {
    dispatch(getAllTagRelatedAC(id));
  }, [dispatch, id]);

  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <div>
      {posts.map((post) => {
        return (
          <Card key={post.id}>
            <Card.Header className="d-flex flex-row">
              <img
                src={post.creatorPic}
                alt="creator"
                className={TagsHomeCSS.circle}
              />{" "}
              <div className="d-flex flex-column mx-3">
                <div>{post.creatorName}</div>
                <div>{post.dateCreated}</div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {" "}
                <Link to={`/posts/${post.id}`} className={TagsHomeCSS.links}>
                  {post.title}
                </Link>
              </Card.Title>
              <Card.Subtitle>
                {post.tags.map((tag) => {
                  return <span key={tag.id}>#{tag.name} </span>;
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

export default TagsHome;

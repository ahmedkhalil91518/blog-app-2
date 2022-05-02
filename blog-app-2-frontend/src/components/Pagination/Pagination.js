import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAC } from "../../reducers/postsReducer";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import PaginationCSS from "./Pagination.module.css";

function Pagination() {
  const itemsPerPage = 6;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

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
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const targetPosts = posts.slice(itemOffset, endOffset);
    if (targetPosts < itemsPerPage) {
      setCurrentItems(posts);
    } else {
      setCurrentItems(targetPosts);
    }
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, posts]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className={PaginationCSS.grid}>
        {currentItems &&
          currentItems.map((post) => {
            return (
              <Card key={post.id}>
                <Card.Header className="d-flex flex-row">
                  <img
                    src={post.creatorPic}
                    alt="creator"
                    className={PaginationCSS.circle}
                  />{" "}
                  <div className="d-flex flex-column mx-3">
                    <div>{post.creatorName}</div>
                    <div>{post.dateCreated}</div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link
                      to={`/posts/${post.id}`}
                      className={PaginationCSS.links}
                    >
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}{" "}
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default Pagination;

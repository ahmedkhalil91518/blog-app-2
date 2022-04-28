import React from "react";
import HomeCSS from "./Home.module.css";
import Pagination from "../Pagination/Pagination";

function Home() {
  return (
    <div className="d-flex flex-row">
      <div className={"footerfix " + HomeCSS.main}>
        <h1>Posts</h1>
        <div>
          <Pagination />
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

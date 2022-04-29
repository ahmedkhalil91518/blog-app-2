import React from "react";
import HomeCSS from "./Home.module.css";
import Pagination from "../Pagination/Pagination";
import Tags from "../Tags/Tags";

function Home() {
  return (
    <div className="d-flex flex-row">
      <div className={"footerfix " + HomeCSS.main}>
        <h1>Posts</h1>
        <div>
          <Pagination />
        </div>
      </div>
      <Tags />
    </div>
  );
}

export default Home;

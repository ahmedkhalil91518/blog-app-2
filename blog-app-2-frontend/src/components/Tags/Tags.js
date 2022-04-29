import React from "react";
import TagsCSS from "./Tags.module.css"

function Tags() {
  return (
    <div className={TagsCSS.main}>
      <h1 className="mb-4">Tags</h1>
      <div className={TagsCSS.container}></div>
    </div>
  );
}

export default Tags;

import React, { useEffect, useState } from "react";
import TagsCSS from "./Tags.module.css";
import { getAllTags } from "../../services/tags";

function Tags() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getAllTags().then((data) => {
      setTags(data);
    });
  }, []);
  return (
    <div className={TagsCSS.main}>
      <h1 className="mb-4">Tags</h1>
      <div className={TagsCSS.container}>
        {tags &&
          tags.map((tag) => {
            switch (tag.popularity) {
              case 1:
                return <h1 key={tag.id} className={TagsCSS.tag}> #{tag.name} </h1>;
              case 2:
                return <h2 key={tag.id} className={TagsCSS.tag}> #{tag.name} </h2>;
              case 3:
                return <h3 key={tag.id} className={TagsCSS.tag}> #{tag.name} </h3>;
              case 4:
                return <h4 key={tag.id} className={TagsCSS.tag}> #{tag.name} </h4>;
              case 5:
                return <h5 key={tag.id} className={TagsCSS.tag}> #{tag.name} </h5>;
              case 6:
                return <h6 key={tag.id} className={TagsCSS.tag}> #{tag.name} </h6>;
              default:
                break;
            }
          })}
      </div>
    </div>
  );
}

export default Tags;

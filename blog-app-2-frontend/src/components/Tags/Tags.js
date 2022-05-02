import React, { useEffect, useState } from "react";
import TagsCSS from "./Tags.module.css";
import { getAllTags } from "../../services/tags";
import { Link } from "react-router-dom";

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
                return (
                  <Link to={`/tags/${tag.id}`}>
                    <h1 key={tag.id} className={TagsCSS.tag}>
                      {" "}
                      #{tag.name}{" "}
                    </h1>
                    ;
                  </Link>
                );
              case 2:
                return (
                  <Link to={`/tags/${tag.id}`}>
                    <h2 key={tag.id} className={TagsCSS.tag}>
                      {" "}
                      #{tag.name}{" "}
                    </h2>
                  </Link>
                );
              case 3:
                return (
                  <Link to={`/tags/${tag.id}`}>
                    {" "}
                    <h3 key={tag.id} className={TagsCSS.tag}>
                      {" "}
                      #{tag.name}{" "}
                    </h3>
                  </Link>
                );
              case 4:
                return (
                  <Link to={`/tags/${tag.id}`}>
                    {" "}
                    <h4 key={tag.id} className={TagsCSS.tag}>
                      {" "}
                      #{tag.name}{" "}
                    </h4>
                  </Link>
                );
              case 5:
                return (
                  <Link to={`/tags/${tag.id}`}>
                    {" "}
                    <h5 key={tag.id} className={TagsCSS.tag}>
                      {" "}
                      #{tag.name}{" "}
                    </h5>
                  </Link>
                );
              case 6:
                return (
                  <Link to={`/tags/${tag.id}`}>
                    {" "}
                    <h6 key={tag.id} className={TagsCSS.tag}>
                      {" "}
                      #{tag.name}{" "}
                    </h6>
                  </Link>
                );
              default:
                return null
            }
          })}
      </div>
    </div>
  );
}

export default Tags;

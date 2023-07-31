import React, { useState } from "react";
import "./topfold.css";
import search from "./search.png";
import add from "./add.png";
import left from "./left.png";
import cancel from "./cancel.png";
import { Link } from "react-router-dom";

const Topfold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchBar">
            <img className="search-logo" src={search} />
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add">
            <div className="add-button">
              <img className="add-logo" src={add} />
              Add
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-btn">
              <img src={left} className="add-topfold-logo" />
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-btn">
              <img src={cancel} className="add-topfold-logo" />
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;

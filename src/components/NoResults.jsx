import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const NoResults = () => {
  return (
    <div className="noResultsContainer">
      <Hero title="No Results Found" descrip="Please refine your search">
        <Link to="/" className="btn-secondary p-2">
          Home
        </Link>
      </Hero>
    </div>
  );
};

export default NoResults;

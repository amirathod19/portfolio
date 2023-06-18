import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="conatiner ">
        <div className="col-75 bg-gray center txt-aling-center mt-20 pt-20">
        <p>Object Destructuring</p>
        <p>Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables</p>
        <Link to="https://amipersonalportfolio.blogspot.com/2023/05/object-destructuring-const-myobject.html">
          Read Full Article
        </Link>
        </div>

        <div className="col-75 bg-gray center txt-aling-center mt-20 pt-20">
        <p> React Route dom</p>
        <p>React Router enables "client side routing".</p>
        <Link to="https://amipersonalportfolio.blogspot.com/2023/06/react-routing.html">
          Read Full Article
        </Link>
        </div>

      </div>
    </>
  );
};

export default Blog;

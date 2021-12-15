import React from "react";

const NewsItem = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.description} </p>
          <p>- by {props.author} </p>
          <a
            href={props.MoreUrl}
            target="_blankp"
            className="btn  btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;

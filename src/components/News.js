import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

import Spinner from "./Spinner";

const News = (props) => {
  //Use state
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: "false",
  //     totalResults: 0,
  //     page: 1,
  //   };
  // }
  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=1e2ec8d6ba214d0c8e15a549a9812c6a&page=1&pageSize=
    ${props.pageSize}&category=${props.category}`;
    // this.setState({ loading: "true" });
    setLoading(true);
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setArticles(result.articles);
        setLoading(false);
        setPage(1);
        setTotalResults(result.totalResults);
      });
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);
  const handleNextBtn = async () => {
    // console.log("next btn clicked");
    if (Math.ceil(totalResults / props.pageSize) < page + 1) {
    } else {
      let url = ` https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&apiKey=1e2ec8d6ba214d0c8e15a549a9812c6a&page=${page + 1}&pageSize=${
        props.pageSize
      }&category=${props.category}`;
      // this.setState({ loading: "true" });
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          // this.setState({
          //   articles: result.articles,
          //   loading: "false",
          //   totalResults: result.totalResults,
          //   page: page + 1,
          // });
          setArticles(result.articles);
          setLoading(false);
          setTotalResults(result.totalResults);
          setPage(page + 1);
        });
    }
  };
  const handlePrevBtn = async () => {
    // console.log("prev btn clicked");

    let url = ` https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=1e2ec8d6ba214d0c8e15a549a9812c6a&page=${page - 1}&pageSize=${
      props.pageSize
    }&category=${props.category}`;
    // this.setState({ loading: "true" });
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        // this.setState({
        //   articles: result.articles,
        //   loading: "false",
        //   totalResults: result.totalResults,
        //   page: page - 1,
        // });
        setArticles(result.articles);
        setLoading(false);
        setTotalResults(result.totalResults);
        setPage(page - 1);
      });
  };

  const centre = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (loading) {
    // console.log("laoding---");
    return (
      <div className="loading " style={centre}>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="container my-3">
        <div className="d-flex justify-content-center">
          <h1
            style={{
              fontStyle: "'Cormorant Garamond', serif",
              marginTop: "4rem",
            }}
          >
            Top Headlines - {props.category}
          </h1>
        </div>
        <div className="row my-3">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  MoreUrl={element.url}
                  author={element.author}
                />
              </div>
            );
          })}{" "}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            onClick={handlePrevBtn}
            className="btn btn-dark"
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            onClick={handleNextBtn}
            className="btn btn-dark"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
};

//propstypes
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export default class News extends Component {

  //propstypes
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category:'general',
    
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize:PropTypes.number,
  };
  // constructior

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: "false",
      totalResults: 0,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2f7b82af81b844b589a03f717169f521&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: 'true' });
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          articles: result.articles,
          loading: "false",
          page: 1,
          totalResults: result.totalResults,
        });
      });
  }
  handleNextBtn = async () => {
    // console.log("next btn clicked");
    if (
      Math.ceil(this.state.totalResults / this.props.pageSize) <
      this.state.page + 1
    ) {
    } else {
      let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2f7b82af81b844b589a03f717169f521&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: 'true' });
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            articles: result.articles,
            loading: "false",
            totalResults: result.totalResults,
            page: this.state.page + 1,
          });
        });
    }
  };
  handlePrevBtn = async () => {
    // console.log("prev btn clicked");

    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2f7b82af81b844b589a03f717169f521&page=${
      this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: 'true' });
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          articles: result.articles,
          loading: "false",
          totalResults: result.totalResults,
          page: this.state.page - 1,
        });
      });
  };
  render() {
    var { articles, loading } = this.state;
    const centre = {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
   
    if (loading === "true") {
      return (
        <div className="loading " style={centre}>
          <i
            className="fas fa-spinner fa-10x"
            style={{
              fontSize: "10rem",
            }}
          ></i>
        </div>
      );
    } else {
      return (
        <div className="container my-3">
          <div className="d-flex justify-content-center">
            
            <h1 style={{fontStyle:"'Cormorant Garamond', serif" }} >Top Headlines</h1>
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
              disabled={this.state.page <= 1}
              onClick={this.handlePrevBtn}
              className="btn btn-dark"
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNextBtn}
              className="btn btn-dark"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      );
    }
  }
}

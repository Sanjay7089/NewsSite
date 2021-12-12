import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  // constructior

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoaded: "false",
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f7b82af81b844b589a03f717169f521";
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          articles: result.articles,
          isLoaded: "true",
        });
      });
  }

  render() {
    var { articles, isLoaded } = this.state;
    const centre = {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
     
      
    };
    if (isLoaded === "false") {
      return (
        <div className="loading " style={centre}>
          <i
            class="fas fa-spinner fa-10x"
            style={{
              fontSize: "10rem",
            }}
          ></i>
        </div>
      );
    } else {
      return (
        <div className="container my-3">
          <h1>Top Headlines</h1>
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
        </div>
      );
    }
  }
}

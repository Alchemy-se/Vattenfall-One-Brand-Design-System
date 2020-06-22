import React, {Component} from "react";
import ArticleCard from "./articleCard";
// const API_URL = "https://vattenfall-design-system.ew.r.appspot.com";
const API_URL = "http://localhost:1338";

export default class Articles extends Component {
  state = {
    isLoaded: false,
    articles: [],
    newsItems: []
  };


  componentDidMount() {
    fetch(API_URL+"/articles?category=news")
      .then(res => res.json())
      .then(
        (articles) => {
          this.setState({
            isLoaded: true,
            articles: articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderArticles = () => {
    if(!Array.isArray(this.state.articles) || this.state.articles.length === 0) return null;
    return this.state.articles.map(article => {
      return (
        <ArticleCard article={article} key={article.id}/>
      );
    });
  };

  render() {
    if(!this.state.articles || this.state.articles.length === 0) return null;
    return (
      <React.Fragment>
        {this.renderArticles()}
      </React.Fragment>
    )
  }
};


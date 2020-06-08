import React, {Component} from "react";
// import Markdown from "../lib/markdown";
import ReactMarkdown from "react-markdown/with-html";
import styles from "./index.scss";
const API_URL = "http://localhost:1337";


export default class Articles extends Component {
  state = {
    isLoaded: false,
    articles: []
  };

  componentDidMount() {
    fetch(API_URL+"/articles")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result
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

  render() {
    if(!this.state.articles || this.state.articles.length === 0) return null;
    return (
      <div className={styles.container}>
        <ReactMarkdown
          source={this.state.articles[4].content}
          escapeHtml={false}
        />
      </div>
    )
  }
};


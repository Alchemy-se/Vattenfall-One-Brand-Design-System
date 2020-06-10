import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";
import styles from "./article.scss"

const API_URL = "http://localhost:1337";

const ParagraphRenderer = (props) => {
  // Special handling for image wrapper.
  if(props.children.length === 1 && props.children[0].props.src) {
    return <p style={{textAlign: "center"}}>{props.children[0]}</p>
  }
  return props.children;
};
class Articles extends Component {
  state = {
    isLoaded: false,
    article: null,
    redirect: false
  };
  componentDidMount() {
    // fetch(API_URL+"/news-items?articleURI="+this.props.match.params.articleId)
    fetch(API_URL+"/articles?articleId="+this.props.match.params.articleId)
      .then(res => res.json())
      .then(
        (articles) => {
          if(articles.length !== 1) {
            // No matches found, redirect.
            this.setState({
              redirect: true,
              isLoaded: true,
              article: null
            });
            return;
          }
          this.setState({
            isLoaded: true,
            article: articles[0]
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
      );
    this.scrollToHashId();
  }

  componentDidUpdate() {
    this.scrollToHashId();
  }

  scrollToHashId() {
    const removeHash = this.removeHash;
    const hash = window.location.hash.substring(1);

    if(hash && hash.length) {
      setTimeout(
        window.requestAnimationFrame(function () {
          const el = document.getElementById(hash);
          if(!el) {
            removeHash();
            return;
          }
          el.scrollIntoView(true);
        }),
        0
      )
    }
  }

  removeHash() {
    const loc = window.location;
    const hist = window.history;

    if(hist && 'pushState' in hist) {
      hist.replaceState('', document.title, loc.pathname + loc.search);
    } else {
      const scrollV = document.body.scrollTop;
      const scrollH = document.body.scrollLeft;

      loc.hash = '';

      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH;
    }
  }

  render() {
    if(!this.state.isLoaded) return null;
    if(this.state.redirect) return <Redirect to={"/articles"}/>;
    return (
      <div className={styles.container}>
        <ReactMarkdown source={this.state.article.content} escapeHtml={false} renderers={{paragraph: ParagraphRenderer}}/>
      </div>
    );
    // return <ReactMarkdown source={this.state.article.content} escapeHtml={false}/>
  }
}

export default Articles;

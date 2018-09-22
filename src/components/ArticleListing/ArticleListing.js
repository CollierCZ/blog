import React from "react";
import { Link } from "gatsby";
import ArticleTags from "../ArticleTags/ArticleTags";
import ArticleFormatting from "../ArticleFormatting/ArticleFormatting";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import "./ArticleListing.css";



const getArticleList = (articleEdges) =>
  articleEdges.map(articleEdge => ({
    path: articleEdge.node.fields.slug,
    tags: articleEdge.node.metadata__keywords.value,
    cover: articleEdge.node.teaser.value[0].url,
    title: articleEdge.node.title.value,
    description: articleEdge.node.metadata__description.value
  }));

class ArticleListing extends React.Component {
  render() {
    const ArticleList = getArticleList(this.props.articleEdges);

    return (
      <div>
        {/* This is the article loop - each article will be output using this markup */}
        {ArticleList.map(article => {
          const { title, path, description, tags, cover } = article;
          const className = article.article_class ? article.article_class : "article";

          return (
            <ArticleFormatting className={className} key={title}>
            <div className="article-teaser">
            <img src={cover} alt="" />
            </div>
            <div className="article-details">
              <ArticleHeader>
                <h2 className="article-title">
                  <Link to={`/articles/${path}`}>{title}</Link>
                </h2>
              </ArticleHeader>
              <section className="article-description">
                <p>
                  {description}{" "}
                  <Link className="read-more" to={`/articles/${path}`}>
                    &raquo;
                  </Link>
                </p>
              </section>
              <footer className="article-meta">
                <ArticleTags tags={tags} />
              </footer>
              </div>
            </ArticleFormatting>
          );
        })}
      </div>
    );
  }
}

export default ArticleListing;

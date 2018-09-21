import React from "react";
import Link from "gatsby-link";
import AuthorThumbnail from "../AuthorThumbnail/AuthorThumbnail";
import ArticleTags from "../articleTags/ArticleTags";
import AuthorLink from "../AuthorLink/AuthorLink";
import ArticleFormatting from "../../layouts/ArticleFormatting/ArticleFormatting";
import ArticleHeader from "../../layouts/ArticleHeader/ArticleHeader";
import ArticleDate from "../ArticleDate/ArticleDate";
import "./ArticleListing.css";



const getArticleList = (articleEdges) =>
  articleEdges.map(articleEdge => ({
    path: articleEdge.node.fields.slug,
    tags: articleEdge.node.metadata__keywords.value,
    cover: articleEdge.node.teaser.value.url,
    title: articleEdge.node.title.value,
    date: articleEdge.node.system.lastModified,
    author: articleEdge.node.authors[0].name.value,
    description: articleEdge.node.metadata__description.value
  }));

class ArticleListing extends React.Component {
  render() {
    console.log(this.props.articleEdges);
    const ArticleList = getArticleList(this.props.articleEdges);

    return (
      <div>
        {/* This is the article loop - each article will be output using this markup */}
        {ArticleList.map(article => {
          const { title, path, description, author, tags, date } = article;
          const className = article.article_class ? article.article_class : "article";

          return (
            <ArticleFormatting className={className} key={title}>
              <ArticleHeader>
                <h2 className="article-title">
                  <Link to={path}>{title}</Link>
                </h2>
              </ArticleHeader>
              <section className="article-description">
                <p>
                  {description}{" "}
                  <Link className="read-more" to={path}>
                    &raquo;
                  </Link>
                </p>
              </section>
              <footer className="article-meta">
                <AuthorThumbnail avatar={author.image} name={author.name} />
                <AuthorLink url={`/author/${author.id}`} name={author.name} />
                <ArticleTags prefix=" on " tags={tags} />
                <ArticleDate date={date} />
              </footer>
            </ArticleFormatting>
          );
        })}
      </div>
    );
  }
}

export default ArticleListing;

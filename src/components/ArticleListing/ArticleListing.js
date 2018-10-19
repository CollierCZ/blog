import React from "react";
import { Link } from "gatsby";
import ArticleCategory from "../ArticleCategory/ArticleCategory";
import ArticleDate from "../ArticleDate/ArticleDate";
import ArticleFormatting from "../ArticleFormatting/ArticleFormatting";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleTags from "../ArticleTags/ArticleTags";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import "./ArticleListing.css";



const getArticleList = (articleEdges) =>
  articleEdges.map(articleEdge => ({
    category: articleEdge.node.fields.category,
    cover: articleEdge.node.elements.teaser.value[0].url,
    description: articleEdge.node.elements.metadata__description.value,
    path: articleEdge.node.fields.slug,
    publish_date: articleEdge.node.elements.publish_date.value,
    tags: articleEdge.node.fields.tags,
    title: articleEdge.node.elements.title.value
  }));

class ArticleListing extends React.Component {
  render() {
    const ArticleList = getArticleList(this.props.articleEdges);

    return (
      <div className="article-listing">
        {/* This is the article loop - each article will be output using this markup */}
        {ArticleList.map(article => {
          const { category, cover, description, path, publish_date, tags, title } = article;
          const className = article.article_class ? article.article_class : "article-card";

          return (
            <ArticleFormatting className={className} key={title}>
              <ArticleTeaser cover={cover} link={`/articles/${path}`} />
              <div className="article-details">
                <Link className="article-link" to={`/articles/${path}`}>
                  <ArticleHeader>
                    <h2 className="article-title">
                      {title}
                    </h2>
                  </ArticleHeader>
                  <section className="article-description">
                    <p>
                      {description}{" "}
                        &raquo;
                    </p>
                  </section>
                </Link>
                <footer className="article-meta">
                  <ArticleDate prefix="Published " date={publish_date} />
                  <ArticleCategory prefix=" in " category={category} />
                  <ArticleTags prefix=" on " tags={tags} />
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

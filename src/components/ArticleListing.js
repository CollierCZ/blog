import ArticleCategory from "./ArticleCategory"
import ArticleDate from "./ArticleDate"
import ArticleFormatting from "./ArticleFormatting"
import ArticleHeader from "./ArticleHeader"
import ArticleTags from "./ArticleTags"
import ArticleTeaser from "./ArticleTeaser"
import { css } from '@emotion/core'
import { Link } from "gatsby"
import React from "react"



const getArticleList = (articleEdges) =>
  articleEdges.map(articleEdge => ({
    category: articleEdge.node.fields.category,
    cover: articleEdge.node.elements.teaser.value[0].url,
    description: articleEdge.node.elements.metadata__description.value,
    path: articleEdge.node.fields.slug,
    date: articleEdge.node.fields.date,
    tags: articleEdge.node.fields.tags,
    title: articleEdge.node.elements.title.value
  }));

class ArticleListing extends React.Component {
  render() {
    const { count, index } = this.props;
    const ArticleList = getArticleList(this.props.articleEdges.slice((index-1)*count,(index-1)+count));

    return (
      <div className="article-listing"
        css={css`
          display: flex;
          flex-wrap:wrap;
        `}
      >
        {/* This is the article loop - each article will be output using this markup */}
        {ArticleList.map(article => {
          const { category, cover, description, path, date, tags, title } = article;
          const className = article.article_class ? article.article_class : "article-card";

          return (
            <ArticleFormatting className={className} 
              css={css`
                flex:1 1 300px;
                margin:3rem;
                border-radius:4%;
                box-shadow: 0rem 0rem 2rem grey;
                transition: all .5s ease;
                :hover {
                  transition: all .5s ease;
                  transform: translate3D(0,-1px,0) scale(1.02);
                }
              `}  
              key={title}
            >
              <ArticleTeaser cover={cover} link={`/articles/${path}`} />
              <div css={css`
                display:flex;
                flex-direction: column;
                flex-grow:1;
                padding: 2rem;
              `}>
                <Link className="article-link" 
                  css={css`
                    text-decoration: none;
                  `}
                  to={`/articles/${path}`}
                >
                  <ArticleHeader>
                    <h2 css={css`
                      font-size: 2.5rem;
                    `}>
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
                <footer
                  css={css`
                    display: block;
                    margin: 0;
                    font-family: "Open Sans", sans-serif;
                    font-size: 1.5rem;
                    line-height: 2.2rem;
                    color: #4a4a4a;
                    a {
                      color: #4a4a4a;
                      text-decoration: none;
                    }
                    
                    a:hover {
                      color: #4a4a4a;
                      text-decoration: underline;
                    }
                    @media only screen and (max-width: 500px) {
                      font-size: 1.3rem;
                      margin-top: 1rem;
                    }
                  `}
                >
                  <ArticleDate prefix="Published " date={date} />
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

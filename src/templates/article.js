import { graphql } from "gatsby";
import ArticleCategory from "../components/ArticleCategory";
import ArticleDate from "../components/ArticleDate";
import ArticleHeader from "../components/ArticleHeader";
import ArticleFormatting from "../components/ArticleFormatting";
import ArticleFooter from "../components/ArticleFooter";
import ArticleTags from "../components/ArticleTags";
import AuthorImage from "../components/AuthorImage";
import AuthorInfo from "../components/AuthorInfo";
import BlogLogo from "../components/BlogLogo";
import { css } from '@emotion/core'
import Footer from "../components/Footer";
import Layout from "../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import React from "react";
import ReadNext from "../components/ReadNext";
import RichText from "../components/RichText/RichText"
import SEO from "../components/SEO";

function parseArticle(article, slug) {
  const result = article;
  if (!result.id) {
    result.id = slug;
  }
  return result;
}

class ArticleTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const articleNode = this.props.data.article;
    const article = parseArticle(articleNode, slug);
    const className = article.article_class ? article.article_class : "article";
    const authorData = this.props.data.author.elements;
    const nextData = {
      path: `/articles/${article.fields.nextSlug}`,
      title: article.fields.nextTitle,
      cover: article.fields.nextCover,
      excerpt: article.fields.nextExcerpt
    };
    const prevData = {
      path: `/articles/${article.fields.prevSlug}`,
      title: article.fields.prevTitle,
      cover: article.fields.prevCover,
      excerpt: article.fields.prevExcerpt
    };

    return (
      <>
        <SEO articlePath={slug} articleNode={articleNode} />

        <Layout>
          <MainHeader headStyle="big" cover={article.elements.teaser.value[0].url}>
            <MainNav>
              <BlogLogo />
            </MainNav>
          </MainHeader>
          <ArticleFormatting className={className}>
            <ArticleHeader>
              <h1 className="article-title"
                css={css`
                font-size: 5rem;
                margin-bottom: 0;
                @media only screen and (max-width: 900px) {
                  font-size: 4.5rem;
                }
                @media only screen and (max-width: 500px) {
                  font-size: 2.8rem;
                }
                `}
              >{article.elements.title.value}</h1>
              <section
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
                <ArticleDate prefix="Published " date={article.fields.date} />
                <ArticleCategory prefix=" in " category={article.fields.category} />
                <ArticleTags prefix=" on " tags={article.fields.tags} />
              </section>
            </ArticleHeader>

            <section
              className="article-content"
            />
            <RichText
              content={article.elements.body.value}
              images={article.elements.body.images}
              links={article.elements.body.links}
              linkedItems={article.elements.body.linked_items}
            />

            <ArticleFooter>
              <AuthorImage author={authorData} />
              <AuthorInfo author={authorData} />
            </ArticleFooter>
          </ArticleFormatting>
          {<ReadNext next={nextData} prev={prevData} />}
          
          <Footer
            author={authorData.name.value}
          />
        </Layout>
      </>
    );
  }
}
  
  export const query = graphql`
  query articleQuery($slug: String!, $articleAuthor: String) {
    author: kenticoCloudItemAuthor (system: {codename: { eq: $articleAuthor} } ) {
      elements {
        picture {
          value {
            url
          }
        }
        short_bio {
          value
        }
        name {
          value
        }
        url {
          value
        }
      }
    },
    article: kenticoCloudItemArticle(fields: { slug: { eq: $slug } })  {
      fields {
        slug
        tags
        category
        date
        nextSlug
        prevSlug
        nextTitle
        nextCover
        nextExcerpt
        prevSlug
        prevTitle
        prevCover
        prevExcerpt
      }
      elements {
        title {
          value
        }
        body {
          value
          links {
            linkId
            type
            urlSlug
          }
          images {
            imageId
            url
          }
          linked_items {
            id
            system {
              type
              codename
            }
          }
        }
        teaser {
          value {
            url
          }
        }
        authors {
          system {
            name
          }
        }     
        metadata__description {
          value
        }
      }
    }
  }
`
  
export default ArticleTemplate;
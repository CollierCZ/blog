import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/SiteWrapper/SiteWrapper";
import SEO from "../components/SEO/SEO";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import Drawer from "../components/Drawer/Drawer";
import MainContent from "../components/MainContent/MainContent";
import ArticleCategory from "../components/ArticleCategory/ArticleCategory";
import ArticleDate from "../components/ArticleDate/ArticleDate";
import ArticleHeader from "../components/ArticleHeader/ArticleHeader";
import ArticleFormatting from "../components/ArticleFormatting/ArticleFormatting";
import ArticleFooter from "../components/ArticleFooter/ArticleFooter";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import ReadNext from "../components/ReadNext/ReadNext";
import ArticleTags from "../components/ArticleTags/ArticleTags";
import Footer from "../components/Footer/Footer";

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
    const config = this.props.data.config.elements;
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
      <Drawer className="article-template">
        <SEO articlePath={slug} articleNode={articleNode} />

        <Layout>
          <MainHeader className="article-header" cover={article.elements.teaser.value[0].url}>
            <MainNav>
              <BlogLogo logo={config.blog_logo.value[0].url} title={config.title.value} />
            </MainNav>
          </MainHeader>
          <MainContent>
            <ArticleFormatting className={className}>
              <ArticleHeader>
                <h1 className="article-title">{article.elements.title.value}</h1>
                <section className="article-meta">
                  <ArticleDate prefix="Published " date={article.fields.date} />
                  <ArticleCategory prefix=" in " category={article.fields.category} />
                  <ArticleTags prefix=" on " tags={article.fields.tags} />
                </section>
              </ArticleHeader>

              <section
                className="article-content"
                dangerouslySetInnerHTML={{ __html: articleNode.elements.body.value }}
              />

              <ArticleFooter>
                <AuthorImage author={authorData} />
                <AuthorInfo prefix="/author" author={authorData} />
              </ArticleFooter>
            </ArticleFormatting>
          </MainContent>
          {<ReadNext next={nextData} prev={prevData} />}
          
          <Footer
            author={authorData.name.value}
          />
        </Layout>
      </Drawer>
    );
  }
}
  
  export const query = graphql`
  query articleQuery($slug: String!, $articleAuthor: String) {
    config: kenticoCloudItemHome{
      elements {
        title {
          value
        }
        splash_image {
          value {
            url
          }
        }
        blog_logo {
          value {
            url
          }
        }
        metadata__description {
          value
        }
        socialmedia {
          value
        }
        base_url {
          value
        }
      }
    },
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
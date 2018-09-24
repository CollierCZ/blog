import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/SiteWrapper/SiteWrapper";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
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

const formatReadNext = value => ({
  path: `/articles/${value.fields.slug}`,
  title: value.title.value,
  cover: value.teaser.value[0].url,
  excerpt: value.metadata__description.value
});

class ArticleTemplate extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { data } = this.props;
    const { slug, next, prev } = this.props.pageContext;
    const nextSlug = next.split("/")[2];
    const prevSlug = prev.split("/")[2];
    const articleNode = this.props.data.article;
    const article = parseArticle(articleNode, slug);
    const className = article.article_class ? article.article_class : "article";
    const config = this.props.data.config;
    const authorData = article.authors[0];
    const getNextData = () => (nextSlug ? formatReadNext(data.next) : null);
    const getPrevData = () => (prevSlug ? formatReadNext(data.prev) : null);

    return (
      <Drawer className="article-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${article.title.value} | ${config.title.value}`}</title>
        </Helmet>
        <SEO articlePath={slug} articleNode={articleNode} seoConfig={config} articleSEO />

        <Navigation config={config} onClose={this.handleOnClose} />

        <Layout>
          <MainHeader className="article-header" cover={article.teaser.value[0].url}>
            <MainNav>
              <BlogLogo logo={config.blog_logo.value[0].url} title={config.title.value} />
            </MainNav>
          </MainHeader>
          <MainContent>
            <ArticleFormatting className={className}>
              <ArticleHeader>
                <h1 className="article-title">{article.title.value}</h1>
                <section className="article-meta">
                  <ArticleDate prefix="Published " date={article.publish_date.datetime} />
                  <ArticleCategory prefix=" in " category={article.fields.category} />
                  <ArticleTags prefix=" on " tags={article.fields.tags} />
                </section>
              </ArticleHeader>

              <section
                className="article-content"
                dangerouslySetInnerHTML={{ __html: articleNode.body.value }}
              />

              <ArticleFooter>
                <AuthorImage author={authorData} />
                <AuthorInfo prefix="/author" author={authorData} />
              </ArticleFooter>
            </ArticleFormatting>
          </MainContent>
          {<ReadNext next={getNextData()} prev={getPrevData()} />}
          
          <Footer
            copyrightYear={article.publish_date.datetime}
            author={authorData.name.value}
          />
        </Layout>
      </Drawer>
    );
  }
}
  
  export const query = graphql`
  query articleQuery($slug: String!, $nextSlug: String, $prevSlug: String) {
    config: kenticoCloudItemHome{
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
    },
    article: kenticoCloudItemArticle(fields: { slug: { eq: $slug } })  {
      fields {
        slug
        tags
        category
      }
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
      metadata__description {
        value
      }
      publish_date {
        datetime
      }
    }
    # prev Article data
    prev: kenticoCloudItemArticle(fields: { slug: { eq: $prevSlug } }) {
      metadata__description {
        value
      }
      title {
        value
      }
      fields {
        slug
      }
      teaser {
        value {
          url
        }
      }
    }
    # next Article data
    next: kenticoCloudItemArticle(fields: { slug: { eq: $nextSlug } }) {
      metadata__description {
        value
      }
      title {
        value
      }
      fields {
        slug
      }
      teaser {
        value {
          url
        }
      }
    }
  }
`
  
export default ArticleTemplate;
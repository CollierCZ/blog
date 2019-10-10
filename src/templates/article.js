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
import SocialMediaIcons from "../components/SocialMediaIcons";

class ArticleTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const socialUrls = this.props.data.config.elements.socialmedia.value.split(",");;
    const article = this.props.data.article;
    const nextArticle = this.props.data.nextarticle;
    const prevArticle = this.props.data.prevarticle;
    const className = article.article_class ? article.article_class : "article";
    const authorData = this.props.data.author.elements;
    const nextData = {
      path: `/articles/${this.props.pageContext.nextSlug}`,
      title: nextArticle.elements.title.value,
      cover: nextArticle.elements.teaser.value[0].url,
      excerpt: nextArticle.elements.metadata__description.value
    };
    const prevData = {
      path: `/articles/${this.props.pageContext.prevSlug}`,
      title: prevArticle.elements.title.value,
      cover: prevArticle.elements.teaser.value[0].url,
      excerpt: prevArticle.elements.metadata__description.value
    };

    return (
      <>
        <SEO articlePath={slug} articleNode={article} />

        <Layout>
          <MainHeader headStyle="big" cover={article.elements.teaser.value[0].url}>
            <MainNav>
              <BlogLogo />
              <SocialMediaIcons
                urls={socialUrls}
              />
            </MainNav>
          </MainHeader>
          <ArticleFormatting className={className}>
            <ArticleHeader>
              <h1 className="article-title"
                css={css`
                margin-bottom: 0;
                font-size: 5rem;
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
                  margin: 0 0 1rem;
                  font-family: "Open Sans", sans-serif;
                  font-size: 1rem;
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
                <ArticleCategory prefix=" in " category={article.elements.categories.value[0].name} />
                <ArticleTags prefix=" on " tags={article.fields.tags} />
              </section>
            </ArticleHeader>

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
query articleQuery($slug: String!, $articleAuthor: String, $nextSlug: String, $prevSlug: String) {
  config: kenticoCloudItemHome{
    elements {
      socialmedia {
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
      date
      tags
    }
    elements {
      title {
        value
      }
      categories {
        value {
          name
        }
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
          ... on KenticoCloudItemQuote {
            system {
              codename
              type
            }
            elements {
              quote {
                resolvedHtml
              }
              source {
                resolvedHtml
              }
            }
          }
          ... on KenticoCloudItemShowcase {
            elements {
              url {
                value
              }
              name {
                value
              }
              items {
                elements {
                  name {
                    value
                  }
                  short_description {
                    value
                  }
                  teaser {
                    value {
                      url
                    }
                  }
                  link {
                    value
                  }
                }
              }
            }
            system {
              codename
              type
            }
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
  },
  nextarticle: kenticoCloudItemArticle(fields: { slug: { eq: $nextSlug } })  {
    ...ArticleListFragment
  },
  prevarticle: kenticoCloudItemArticle(fields: { slug: { eq: $prevSlug } })  {
    ...ArticleListFragment
  }
}
`
  
export default ArticleTemplate;
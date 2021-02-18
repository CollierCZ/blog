import { graphql } from "gatsby";
import React from "react";

import ArticleCategory from "../components/ArticleCategory";
import ArticleDate from "../components/ArticleDate";
import ArticleHeader from "../components/ArticleHeader";
import ArticleFormatting from "../components/ArticleFormatting";
import ArticleFooter from "../components/ArticleFooter";
import ArticleTags from "../components/ArticleTags";
import AuthorImage from "../components/AuthorImage";
import AuthorInfo from "../components/AuthorInfo";
import BlogLogo from "../components/BlogLogo";
import Footer from "../components/Footer";
import Layout from "../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import ReadNext from "../components/ReadNext";
import RichText from "../components/RichText/RichText";
import SEO from "../components/SEO";
import SocialMediaIcons from "../components/SocialMediaIcons";

import Heading from "@kiwicom/orbit-components/lib/Heading";
import Text from "@kiwicom/orbit-components/lib/Text";

const ArticleTemplate = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const socialUrls = data.config.elements.socialmedia.value.split(",");
  const article = data.article;
  const nextArticle = data.nextarticle;
  const prevArticle = data.prevarticle;
  const className = article.article_class ? article.article_class : "article";
  const authorData = data.author.elements;
  const nextData = {
    path: `/articles/${pageContext.nextSlug}`,
    title: nextArticle.elements.title.value,
    cover: nextArticle.elements.teaser.value[0].url,
    excerpt: nextArticle.elements.metadata__description.value,
  };
  const prevData = {
    path: `/articles/${pageContext.prevSlug}`,
    title: prevArticle.elements.title.value,
    cover: prevArticle.elements.teaser.value[0].url,
    excerpt: prevArticle.elements.metadata__description.value,
  };

  return (
    <>
      <SEO articlePath={slug} articleNode={article} />
      <Layout>
        <MainHeader
          headStyle="small"
          cover={article.elements.teaser.value[0].url}
        >
          <MainNav>
            <BlogLogo />
            <SocialMediaIcons urls={socialUrls} />
          </MainNav>
        </MainHeader>
        <ArticleFormatting className={className}>
          <ArticleHeader>
            <Heading element="h1" type="display" spaceAfter="small">
              {article.elements.title.value}
            </Heading>
            <Text spaceAfter="normal">
              <ArticleDate prefix="Published " date={article.fields.date} />
              <ArticleCategory
                prefix=" in "
                category={article.elements.categories.value[0].name}
              />
              <ArticleTags prefix=" on " tags={article.fields.tags} />
            </Text>
          </ArticleHeader>

          <RichText
            content={article.elements.body.value}
            images={article.elements.body.images}
            links={article.elements.body.links}
            linkedItems={article.elements.body.modular_content}
          />

          <ArticleFooter>
            <AuthorImage author={authorData} />
            <AuthorInfo author={authorData} />
          </ArticleFooter>
        </ArticleFormatting>
        {<ReadNext next={nextData} prev={prevData} />}

        <Footer author={authorData.name.value} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query articleQuery(
    $slug: String!
    $articleAuthor: String
    $nextSlug: String
    $prevSlug: String
  ) {
    config: kontentItemHome {
      elements {
        socialmedia {
          value
        }
      }
    }
    author: kontentItemAuthor(system: { codename: { eq: $articleAuthor } }) {
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
    }
    article: kontentItemArticle(fields: { slug: { eq: $slug } }) {
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
            link_id
            type
            url_slug
          }
          images {
            image_id
            url
          }
          modular_content {
            ... on kontent_item_code_block {
              system {
                codename
                type
              }
              elements {
                language {
                  value {
                    name
                  }
                }
                code {
                  value
                }
              }
            }
            ... on kontent_item_quote {
              system {
                codename
                type
              }
              elements {
                quote {
                  value
                }
                source {
                  value
                }
              }
            }
            ... on kontent_item_showcase {
              elements {
                items {
                  value {
                    ... on kontent_item_showcased_thing {
                      id
                      elements {
                        name {
                          value
                        }
                        short_description {
                          value
                          links {
                            link_id
                            type
                            url_slug
                          }
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
          value {
            system {
              name
            }
          }
        }
        metadata__description {
          value
        }
      }
    }
    nextarticle: kontentItemArticle(fields: { slug: { eq: $nextSlug } }) {
      ...ArticleListFragment
    }
    prevarticle: kontentItemArticle(fields: { slug: { eq: $prevSlug } }) {
      ...ArticleListFragment
    }
  }
`;

export default ArticleTemplate;

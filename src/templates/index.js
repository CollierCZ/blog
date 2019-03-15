import React from "react"
import { graphql } from "gatsby"
import ArticleListing from "../components/ArticleListing"
import BlogLogo from "../components/BlogLogo"
import Footer from "../components/Footer";
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import PageTitle from "../components/PageTitle";
import PageDescription from "../components/PageDescription";
import PaginatedContent from "../components/PaginatedContent";
import SEO from "../components/SEO";
import SocialMediaIcons from "../components/SocialMediaIcons";
import SubscribeButton from "../components/SubscribeButton";
import "../layouts/index.css";



class IndexTemplate extends React.Component {
  render() {
    const {
      first,
      group,
      index,
      last,
      pageCount
    } = this.props.pageContext;
    var next = 0
    var prev = 0
    if (!last) {
      next = index + 1;
    }
    if (!first) {
      prev = index - 1
    }

    const nodes = this.props.data.articles.edges;
    const config = this.props.data.config.elements;
    const socialUrls = config.socialmedia.value.split(",");

  return (
    <>
        <SEO />
        <Layout>
          <MainHeader headStyle="medium">
            <MainNav>
              <BlogLogo />
              <SocialMediaIcons
                urls={socialUrls}
                color="currentColor"
              />
              <SubscribeButton />
            </MainNav>
            <div className="vertical">
              <div className="main-header-content inner">
                <PageTitle />
                <PageDescription />
              </div>
            </div>
          </MainHeader>
          <div>
          <PaginatedContent
                page={index}
                pages={pageCount}
                next={next}
                prev={prev}
              >
            <ArticleListing articleEdges={nodes} index={index} count={group.length} />
            </PaginatedContent>
          </div>
          <Footer author="Aaron Collier" />
        </Layout>
      </>
    )
  }
}

export const query = graphql`
  query indexQuery {
    config: kenticoCloudItemHome{
      elements {
        socialmedia {
          value
        }
      }
    },
    articles: allKenticoCloudItemArticle (
        sort: { fields: [fields___date], order: DESC }
      ) {
      edges {
        node {
          fields {
            slug
            tags
            category
            date
          }
          elements {
            metadata__description {
              value
            }
            title {
              value
            }
            teaser {
              value {
                url
              }
            }            
          }
        }
      }
    }
  }
` 

export default IndexTemplate;
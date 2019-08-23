import React from "react"
import { graphql } from "gatsby"
import ArticleListing from "../components/ArticleListing"
import BlogLogo from "../components/BlogLogo"
import Footer from "../components/Footer"
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader"
import MainNav from "../components/MainNav"
import PageTitle from "../components/PageTitle"
import PageDescription from "../components/PageDescription"
import PaginatedContent from "../components/PaginatedContent"
import SEO from "../components/SEO"
import "../layouts/index.css"


class TagTemplate extends React.Component {
  render() {
    const {
      tag,      
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

  return (
    <>
        <SEO />
        <Layout>
          <MainHeader headStyle="small">
            <MainNav>
              <BlogLogo />
            </MainNav>
            <div className="vertical">
              <div className="main-header-content inner">
                <PageTitle text={tag} />
              <PageDescription
                text={tag.description || `Articles tagged with ${tag}`} />
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
  query ($tag: String!) {
    articles: allKenticoCloudItemArticle (
            sort: { fields: [fields___date], order: DESC }
            filter: { fields: {tags: {in: [$tag] } }, elements: {publish_date: {datetime: {gte: "2019-06-03T00:00:00.000Z"}}}} 
        ) {
      edges {
        node {
          fields {
            slug
            date
            tags
          }
          elements {
            metadata__description {
              value
            }
            categories {
              value {
                name
              }
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

export default TagTemplate;
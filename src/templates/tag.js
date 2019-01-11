import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import ArticleListing from "../components/ArticleListing/ArticleListing";
import BlogLogo from "../components/BlogLogo/BlogLogo"
import Drawer from "../components/Drawer/Drawer";
import Layout from "../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import Navigation from "../components/Navigation/Navigation";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SEO from "../components/SEO/SEO";
import "../layouts/index.css"


class TagTemplate extends React.Component {
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
    const {
      tag,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pageContext;
    console.log({
      page,
      pages,
      total,
      limit,
      prev,
      next
    });
    const nodes = this.props.data.articles.edges;
    const config = this.props.data.config.elements;

  return (
    <Drawer isOpen={this.state.menuOpen}>
      <Helmet title={`Articles tagged as "${tag}" | ${config.siteTitle}`} />
        <SEO articleEdges={nodes} seoConfig={config} />

        <Navigation config={config} onClose={this.handleOnClose} />
        <Layout>
          <MainHeader className="tag-head">
                <MainNav overlay={config.splash_image.value[0].url}>
                  <BlogLogo logo={config.blog_logo.value[0].url} title={config.title.value} />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageTitle text={tag} />
                  <PageDescription
                    text={tag.description || `A ${total}-post collection`} />
                  </div>
                </div>
              </MainHeader>
          <div>
          <PaginatedContent
                page={page}
                pages={pages}
                total={total}
                limit={limit}
                prev={prev}
                next={next}
              >
            <ArticleListing articleEdges={nodes} />
            </PaginatedContent>
          </div>
        </Layout>
      </Drawer>
    )
  }
}

export const query = graphql`
  query tagQuery ($tag: String) {
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
    articles: allKenticoCloudItemArticle (
            sort: { fields: [fields___date], order: DESC }
            filter: { fields: { tags: { in: [$tag] } } }
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

export default TagTemplate;
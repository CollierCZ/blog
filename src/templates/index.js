import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet";
import ArticleListing from "../components/ArticleListing/ArticleListing"
import BlogLogo from "../components/BlogLogo/BlogLogo"
import Drawer from "../components/Drawer/Drawer"
import Footer from "../components/Footer/Footer";
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import Navigation from "../components/Navigation/Navigation";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SEO from "../components/SEO/SEO";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import SubscribeButton from "../components/SubscribeButton/SubscribeButton";
import "../layouts/index.css";



class IndexTemplate extends React.Component {
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
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pageContext;
    const nodes = this.props.data.articles.edges;
    const config = this.props.data.config.elements;
    const socialUrls = config.socialmedia.value.split(",");

  return (
    <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.title.value}><html lang="en-US"></html><link rel="icon" type="image/png" href={config.blog_logo.value[0].url}></link></Helmet>
        <SEO articleEdges={nodes} seoConfig={config} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />
        <Layout>
          <MainHeader cover={config.splash_image.value[0].url}>
                <MainNav overlay={config.splash_image.value[0].url}>
                  <BlogLogo logo={config.blog_logo.value[0].url} title={config.title.value} />
                    <SocialMediaIcons
                      urls={socialUrls}
                      color="currentColor"
                    />
                    <SubscribeButton url={config.base_url.value + "rss.xml"} />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageTitle text={config.title.value} />
                    <PageDescription text={config.metadata__description.value} />
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
          <Footer copyrightYear="2018" author="Aaron Collier" />
        </Layout>
      </Drawer>
    )
  }
}

export const query = graphql`
  query indexQuery {
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
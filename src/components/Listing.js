import React from "react"
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
import "../layouts/index.css";

const Listing = ({context, data, headStyle}) => {
  const {
    first,
    group,
    index,
    last,
    pageCount
  } = context;
  const nodes = data.articles.edges;
  const socialUrls = data.config.elements.socialmedia.value.split(",");
  const additionalInfo = context.tag ? context.tag : context.category ? context.category : null;
  const additionalDescription = context.tag ? `Articles tagged with ${context.tag}`: data.header ? data.header.elements.metadata__description.value : null;
  const cover = data.header ? data.header.elements.banner_image.value[0].url : null;

  var next = 0
  var prev = 0
  if (!last) { next = index + 1; }
  if (!first) { prev = index - 1 }

  return (
    <>
      <SEO />
      <Layout>
        <MainHeader cover={cover} headStyle={headStyle}>
          <MainNav>
            <BlogLogo />
            <SocialMediaIcons
              urls={socialUrls}
            />
          </MainNav>
            <div className="main-header-content">
              <PageTitle text={additionalInfo} />
              <PageDescription text={additionalDescription} />
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

export default Listing;
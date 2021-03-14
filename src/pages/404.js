import React from "react"
import ArticleFormatting from "../components/ArticleFormatting"
import ArticleHeader from "../components/ArticleHeader"
import BlogLogo from "../components/BlogLogo"
import Footer from "../components/Footer"
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader"
import MainNav from "../components/MainNav"
import SEO from "../components/SEO"

const NotFoundPage = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        <MainHeader headStyle="small">
          <MainNav>
            <BlogLogo />
          </MainNav>
        </MainHeader>
        <ArticleFormatting>
          <ArticleHeader>
            <h1>404</h1>
            <p>I'm afraid I can't find what you're looking for.</p>
          </ArticleHeader>
        </ArticleFormatting>
        <Footer author="Aaron Collier" />
      </Layout>
    </>
)
}

export default NotFoundPage;
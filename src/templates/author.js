import React from "react"
import { graphql } from "gatsby"
import ArticleFormatting from "../components/ArticleFormatting"
import ArticleHeader from "../components/ArticleHeader"
import AuthorImage from "../components/AuthorImage"
import BlogLogo from "../components/BlogLogo"
import Footer from "../components/Footer"
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader"
import MainNav from "../components/MainNav"
import RichText from "../components/RichText/RichText"
import SEO from "../components/SEO"

export default ({ data }) => {
  const author = data.author
  const bio = author.elements.bio
  const name = author.elements.name.value
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
            <h1>{name}</h1>
          </ArticleHeader>
          <AuthorImage author={author.elements} />
          <RichText
            content={bio.value}
            images={bio.images}
            links={bio.links}
            linkedItems={bio.linked_items}
          />
        </ArticleFormatting>
        <Footer author="Aaron Collier" />
      </Layout>
    </>
)
}

export const query = graphql`
query authorQuery($slug: String!) {
  author: kontentItemAuthor(fields: { slug: { eq: $slug } })  {
    elements {
      name {
        value
      }
      picture {
        value {
          url
        }
      }
      bio {
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
          id
          system {
            type
            codename
          }
        }
      }
      metadata__keywords {
        value
      }
      metadata__description {
        value
      }
    }
  }
}
`
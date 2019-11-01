import { graphql, StaticQuery } from "gatsby"
import React from "react";
import Helmet from "react-helmet";
import PropTypes from 'prop-types';

export const PureSEO = ({ basicInfo, articleProps }) => {
  const articleNode = articleProps ? articleProps.articleNode : null;
  const articlePath = articleProps ? articleProps.articlePath : null;
  const siteTitle = basicInfo.kontentItemHome.elements.title.value;
  const title = articleNode ? articleNode.elements.title.value : '';
  const description = articleNode ? articleNode.elements.metadata__description.value : basicInfo.kontentItemHome.elements.metadata__description.value;
  const image = articleNode ? articleNode.elements.teaser.value[0].url : basicInfo.kontentItemHome.elements.splash_image.value[0].url;
  const blogURL = basicInfo.kontentItemHome.elements.base_url.value;
  const logo = basicInfo.kontentItemHome.elements.blog_logo.value[0].url;
  const articleURL = articleNode ? blogURL+"/articles/"+articlePath+"/" : null;

  var schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: ""
    }
  ];
  if (articleNode) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": articleURL,
              name: title,
              image
            }
          }
        ]
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image
        },
        description
      }
    );
  }
  return (
<Helmet defaultTitle={siteTitle} titleTemplate={"%s | " + siteTitle}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
      ]}
      >
        {/* General tags */}
        <title lang="en">{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        <meta property="og:url" content={articleURL ? articleURL : blogURL} />
        {articleURL ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* no Facebook app
          <meta
            property="fb:app_id"
            content={config.siteFBAppID ? config.siteFBAppID : ""}
          />
        */}

        <meta name="twitter:card" content="summary_large_image" />
         {/* no Twitter creator
          <meta
            name="twitter:creator"
            content={config.userTwitter ? config.userTwitter : ""}
          />
         */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
  )
}

export const SEO = props => (
  <StaticQuery
  query={graphql`
    query {
      kontentItemHome{
        ...MetadataFragment
      }
    }
  `}
  render = {data => 
   <PureSEO  articleProps={props} basicInfo={data} />
  }
  />
)

SEO.propTypes = {
  articlePath: PropTypes.string,
  articleNode: PropTypes.object
};

export default SEO;
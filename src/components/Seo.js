import { useSiteMetadata } from "../hooks/use-metadata";
import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const getJsonLd = (blogUrl, title, isArticle, image, description) => {
  const basicData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: blogUrl,
    name: title,
  };

  if (isArticle) {
    return [
      basicData,
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogUrl,
        name: title,
        alternateName: "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
      },
    ];
  }
  return [basicData];
};

const getMetadata = (isArticle, articleProps, basicInfo) => {
  const articleNode = articleProps?.articleNode;
  const siteTitle = basicInfo.elements.title.value;
  const blogUrl = basicInfo.elements.base_url.value;
  const logo = basicInfo.elements.blog_logo.value[0].url;

  const getArticleMetaData = () => {
    if (isArticle) {
      return {
        articleUrl: `${blogUrl}/articles/${articleProps.articlePath}/`,
        description: articleNode.elements.metadata__description.value,
        image: articleNode.elements.teaser.value[0].url,
        title: articleNode?.elements.title.value,
      };
    }
    return {
      description: basicInfo.elements.metadata__description.value,
      image: basicInfo.elements.splash_image.value[0].url,
      title: siteTitle,
    };
  };

  const articleMetadata = getArticleMetaData();

  return { blogUrl, logo, ...articleMetadata };
};

export const PureSeo = ({ basicInfo, articleProps }) => {
  const articleNode = articleProps?.articleNode;
  const isArticle = Boolean(articleNode);
  const siteTitle = basicInfo.elements.title.value;
  const { articleUrl, blogUrl, description, image, logo, title } = getMetadata(
    isArticle,
    articleProps,
    basicInfo
  );

  const schemaOrgJSONLD = getJsonLd(
    blogUrl,
    title,
    isArticle,
    image,
    description
  );

  return (
    <Helmet
      defaultTitle={siteTitle}
      titleTemplate={"%s | " + siteTitle}
      htmlAttributes={{
        lang: "en-US",
      }}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${logo}` }]}
    >
      {isArticle && <title lang="en">{title}</title>}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={articleUrl ? articleUrl : blogUrl} />
      {articleUrl ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export const Seo = (props) => {
  const siteMetadata = useSiteMetadata();
  return <PureSeo articleProps={props} basicInfo={siteMetadata} />;
};

Seo.propTypes = {
  articlePath: PropTypes.string,
  articleNode: PropTypes.object,
};

export default Seo;

import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const site = useStaticQuery(
    graphql`
      query {
        kontentItemHome {
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
        }
      }
    `
  );
  return site.kontentItemHome;
};

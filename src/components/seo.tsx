import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from '@reach/router';
import { Helmet } from "react-helmet"

type ImageDataType = {
    publicURL: string;
};

export type SeoProps = {
    description?: string;
    title: string;
    featureImage?: ImageDataType;
    lang?: string;
    meta?: Array<{name: string, content: string}>
};

const Seo: React.FC<SeoProps>  = ({description, lang, meta, title, featureImage}:SeoProps) => {
    
    const { site, allFile } = useStaticQuery(
        graphql`
          query SeoMetaData {
            site {
              siteMetadata {
                title
                description
                author
                social {
                    twitter
                }
              }
            }
            allFile(filter: {relativeDirectory: {eq: "social"}}) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
          }
        `)

    const metaDescription = description ?? site.siteMetadata.description
    const metaTitle = title ?? site.siteMetadata.title
    const metaImage = featureImage ?? (allFile.edges[0]?.node?.publicURL);
    const location = useLocation();

    return (
        <Helmet 
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: 'og:url',
                    content: `${site?.siteMetadata?.siteUrl}${location.pathname}`,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    property: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    property: `twitter:creator`,
                    content: site.siteMetadata.social.twitter,
                },
                {
                    property: `twitter:title`,
                    content: metaTitle,
                },
                {
                    property: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: 'twitter:image',
                    content: metaImage,
                },
            ]
        }
        />
    )
}

export default Seo
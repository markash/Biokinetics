import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from '@reach/router';

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

export default function Seo(props: Readonly<SeoProps>) {
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

    const metaDescription = props.description ?? site.siteMetadata.description
    const metaTitle = props.title ?? site.siteMetadata.title
    const metaImage = props.featureImage ?? (allFile.edges[0]?.node?.publicURL);
    const location = useLocation();

    return (
        <>
            <title>{metaTitle}</title>
            <html lang={props.lang ?? "en"} />
            <meta name="description" content={metaDescription} />
            <meta name="og:title" content={metaTitle} />
            <meta name="og:description" content={metaDescription} />
            <meta name="og:image" content={metaImage} />
            <meta name="og:type" content="website" />
            <meta name="og:url" content={`${site?.siteMetadata?.siteUrl}${location.pathname}`} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:creator" content={site.siteMetadata.social.twitter} />
        </>
    )    
}
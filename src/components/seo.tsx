import * as React from "react"
import { useStaticQuery, graphql, Script } from "gatsby"
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
            <Script type="application/ld+json" >
            {`
            {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "image": [
                "https://example.com/photos/1x1/photo.jpg",
                "https://example.com/photos/4x3/photo.jpg",
                "https://example.com/photos/16x9/photo.jpg"
            ],
            "name": "Dave's Steak House",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "148 W 51st St",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10019",
                "addressCountry": "US"
            },
            "review": {
                "@type": "Review",
                "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4",
                "bestRating": "5"
                },
                "author": {
                "@type": "Person",
                "name": "Lillian Ruiz"
                }
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.761293,
                "longitude": -73.982294
            },
            "url": "https://www.example.com/restaurant-locations/manhattan",
            "telephone": "+12122459600",
            "servesCuisine": "American",
            "priceRange": "$$$",
            "openingHoursSpecification": [
                {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday"
                ],
                "opens": "11:30",
                "closes": "22:00"
                },
                {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "11:30",
                "closes": "23:00"
                },
                {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "16:00",
                "closes": "23:00"
                },
                {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "16:00",
                "closes": "22:00"
                }
            ],
            "menu": "https://www.example.com/menu",
            "acceptsReservations": "True"
            }
            `}
            </Script>
        </>
    )    
}
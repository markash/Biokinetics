import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"


//import useSiteMetaData from "../hooks/use-site-metadata"
type SEOProps = {
    description: string
    lang: string
    meta: []
    title: string
}

const SEO: React.FC<SEOProps>  = ({description, lang, meta, title}:SEOProps) => {
    //const { title } = useSiteMetaData()
    const metaDescription = description || `Monique Strydom Biokineticist`
    return (
        <Helmet 
            htmlAttributes={{
                lang,
            }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
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
                    property: `twitter:card`,
                    content: `summary`,
                },
                {
                    property: `twitter:creator`,
                    content: `Monique Strydom`,
                },
                {
                    property: `twitter:title`,
                    content: title,
                },
                {
                    property: `twitter:description`,
                    content: metaDescription,
                }
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

// SEO.propTypes = {
//     description: PropTypes.string,
//     lang: PropTypes.string,
//     meta: PropTypes.arrayOf(PropTypes.object),
//     title: PropTypes.string.isRequired,
// }

export default SEO
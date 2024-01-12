import { useStaticQuery, graphql} from "gatsby"

export const useSiteMetaData = () => {
    const {site} = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    author
                    description
                    siteUrl
                    social {
                        twitter
                    }
                }
            }
        }
    `)

    return site.siteMetadata
}
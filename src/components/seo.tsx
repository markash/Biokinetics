import * as React from "react"

import useSiteMetaData from "../hooks/use-site-metadata"

const SEO: React.HeadFC = () => {
    const { title } = useSiteMetaData()

    return (
        <>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <mata name="author" content={author} />
        </>
    )
}

export default SEO
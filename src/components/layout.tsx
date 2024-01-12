import * as React from "react"
import Header from "./header"
import { graphql, useStaticQuery } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const  data : any = useStaticQuery(graphql` 
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const title = data.site.siteMetadata.title || "Title";

    return (
        <>
            <Header title={title} />
            <main>{children}</main>
        </>
    )
}


export default Layout
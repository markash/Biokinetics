import * as React from "react"
import Header from "./header"
import { Link, graphql, useStaticQuery } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faFacebook,
  faXTwitter, 
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faFacebook,
  faXTwitter, 
  faInstagram,
)

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
            <footer>
              <div className="row bg-body-tertiary social-banner">
                <div className="col-12">
                    <Link to="https://www.facebook.com/MoniqueStrydomBiokineticist?mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" /></Link>
                    <Link to="https://www.instagram.com/msbiokineticist_witbank?igsh=MXhxN3BudmM3bzhlOA%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon"/></Link>
                    <Link to="https://twitter.com/"><FontAwesomeIcon icon={faXTwitter} size="2x" className="social-icon"/></Link>
                </div>
              </div>
            </footer>
        </>
    )
}


export default Layout
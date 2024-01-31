import * as React from "react"
import Header from "./header"
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faFacebook,
  faXTwitter, 
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faFacebook,
  faXTwitter, 
  faInstagram,
  faPhone,
  faEnvelope,
  faLocationDot
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
              <div className="row bg-footer-gray footer-row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <StaticImage src="../images/logo/logo-white.webp" alt="Monique Strydom Biokineticist / Biokinetikus 🥇🧘🏻‍♀️🏌🏻‍♀️" placeholder="blurred" width={377} height={50} />
                      <p className="text-white social-banner">
                      <Link to="https://www.facebook.com/MoniqueStrydomBiokineticist?mibextid=LQQJ4d" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} size="1x" className="social-icon" /></Link>
                      <Link to="https://www.instagram.com/msbiokineticist_witbank?igsh=MXhxN3BudmM3bzhlOA%3D%3D&utm_source=qr" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="1x" className="social-icon"/></Link>
                      <Link to="https://twitter.com/" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} size="1x" className="social-icon"/></Link>
                      </p>
                    </div>
                    <div className="col-6 col-md-3 text-white">
                      <address>
                          <FontAwesomeIcon icon={faLocationDot} size="1x" /> Elizabeth Avenue, Hoërskool Generaal Hertzog Stadium 1035 Witbank, South Africa<br />
                          <FontAwesomeIcon icon={faPhone} size="1x" /> 076 633 6503<br />
                          <FontAwesomeIcon icon={faEnvelope} size="1x" /> Bio.witbank@gmail.com<br />
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
        </>
    )
}


export default Layout
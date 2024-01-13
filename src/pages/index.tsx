import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import './index.css';

import Layout from "../components/layout";
import Banner from "../components/banner";
import Seo from "../components/seo";
import Featurette from "../components/featurette";

const IndexPage: React.FC<PageProps<Queries.BannerQuery>> = ({data}:PageProps<Queries.BannerQuery>) => {
  return (
    <Layout>
      <Seo title="Monique Strydom Biokineticist / Biokinetikus 🥇🧘🏻‍♀️🏌🏻‍♀️" />
      <Banner data={data} />  
      <Featurette />    
    </Layout>
  )
}

export default IndexPage

//export const Head: HeadFC = () => SEO.Head({title: "Home"})

export const pageQuery = graphql`
  query Banner {
    banner: allFile(
      filter: {relativeDirectory: {eq: "carousel"}}
      ) {
        edges {
          node {
            id
            base
            publicURL
            childrenImageSharp {
              gatsbyImageData(quality: 70)
            }
          }
        }
      }
  }
`
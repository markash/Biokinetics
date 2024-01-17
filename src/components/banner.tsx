import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import './carousel.css';

import { Carousel } from 'react-bootstrap';

const Banner: React.FC = () => {
    const { allFile } = useStaticQuery(graphql`
      query Banner {
        allFile(
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
    `)

    

    return (
        <Carousel>
        {allFile.edges.map(({node}: any) => (
          <Carousel.Item key={node.id}>
            
            <GatsbyImage
              image={node.childrenImageSharp[0].gatsbyImageData}
              alt={node.base}
              key={node.id} />
          </Carousel.Item>
        ))}
      </Carousel>
    )
}

export default Banner
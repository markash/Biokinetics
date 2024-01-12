import * as React from "react"
import type { PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import './carousel.css';

import { Carousel } from 'react-bootstrap';

const Banner: React.FC<PageProps<Queries.BannerQuery>> = ({data}:PageProps<Queries.BannerQuery>) => {
    return (
        <Carousel>
        {data.banner.edges.map(({node}) => (
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
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import './index.css';

import Layout from "../components/layout";
import Banner from "../components/banner";
import Featurette from "../components/featurette";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps<Queries.BannerQuery>> = ({data}:PageProps<Queries.BannerQuery>) => {
  return (
    <Layout>      
      <Banner />  
      <Featurette />    
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => Seo({title: "Monique Strydom Biokineticist / Biokinetikus 🥇🧘🏻‍♀️🏌🏻‍♀️"})
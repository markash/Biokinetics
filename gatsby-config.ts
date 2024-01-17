import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Monique Strydom Biokineticist / Biokinetikus`,
    description: `Monique Strydom | Witbank | Biokineticist | BIOKINETICS = Life through movement 🏋🏻‍♀️ Functional Rehab for Optimal Wellness 🧘🏻‍♀️ HPCSA & BASA`,
    author: `Mark Ashworth`,
    social: {
      twitter: `marcus_ashworth`,
    },
    siteUrl: `http://localhost:9000`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {  
      trackingId: "Test",
      head: true
    }
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "Test",
      includeInDevelopment: true
    },
  }
]
};

export default config;

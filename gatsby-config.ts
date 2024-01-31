import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Monique Strydom Biokineticist / Biokinetikus`,
    description: `Monique Strydom | Witbank | Biokineticist | BIOKINETICS = Life through movement 🏋🏻‍♀️ Functional Rehab for Optimal Wellness 🧘🏻‍♀️ HPCSA & BASA`,
    author: `Mark Ashworth`,
    social: {
      twitter: `marcus_ashworth`,
    },
    siteUrl: `http://localhost:9000`,
    mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.9594530317604!2d29.213647712560743!3d-25.870811877188807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaed45bd247d3d%3A0xcb21a966ccc74c98!2sHo%C3%ABrskool%20Generaal%20Hertzog!5e0!3m2!1sen!2sza!4v1705151163444!5m2!1sen!2sza`
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
      trackingId: "G-VR8BV8D7E0",
      head: true
    }
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "G-VR8BV8D7E0",
      includeInDevelopment: true
    },
  }
]
};

export default config;

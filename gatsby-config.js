require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Learning Crises`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_ACCESS_TOKEN
    //   }
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `League Spartan\:300,500,600`,
          `source sans pro\:300,400,400i,700` 
        ],
        display: 'swap'
      }
    }
  ],
};
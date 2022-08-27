module.exports = {
  siteMetadata: {
    title: `Learning Crises`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // plugins: [{
  //   resolve: 'gatsby-source-contentful',
  //   options: {
  //     "accessToken": "",
  //     "spaceId": ""
  //   }
  // }]
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
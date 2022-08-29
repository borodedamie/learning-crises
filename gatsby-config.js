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
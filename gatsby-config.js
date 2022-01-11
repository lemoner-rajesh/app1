// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })


module.exports = {
  siteMetadata: {
    siteUrl: "https://dev-drupal-lemon.pantheonsite.io/",
    title: "app1",
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // apiKey: process.env.API_KEY,
        preview:true,
        baseUrl: `https://dev-drupal-lemon.pantheonsite.io/`,
        fastBuilds: true,
        secret: `123456`
      
      },
      
    },
  ],
};

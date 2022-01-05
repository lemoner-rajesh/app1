module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "app1",
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-drupal-lemon.pantheonsite.io/`,
        // secret: process.env.PREVIEW_SECRET,
        fastBuilds: true,
      },
      
    },
  ],
};

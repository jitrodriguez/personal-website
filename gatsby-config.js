/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Juan Rodriguez`,
    description: `Juan Rodriguez is a front-end engineer passionate about crafting accessible, pixel-perfect interfaces where thoughtful design meets robust engineering.`,
    siteUrl: `https://juanrodriguez.netlify.com`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/assets/personal_logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
  ],
};

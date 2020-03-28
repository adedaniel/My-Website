const config = require("./src/data/config")

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-styled-jsx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        // threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        // disable: false, // Flag for disabling animations

        // Advanced Options
        // selector: '[data-sal]', // Selector of the elements to be animated
        // animateClassName: 'sal-animate', // Class name which triggers animation
        // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        // enterEventName: 'sal:in', // Enter event name
        // exitEventName: 'sal:out', // Exit event name
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.defaultTitle,
        short_name: config.defaultTitle,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/images/adedaniel's-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

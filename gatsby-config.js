module.exports = {
  siteMetadata: {
    title: `Mateusz Kocz ★ Software Developer`,
    description: `My personal website.`,
    author: `@mateuszkocz`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-29046225-1`,
        anonymize: true,
        respectDNT: true,
      },
    },
    // TODO: bring it back when you have an icon.
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Mateusz Kocz ★ Software Developer`,
    //     short_name: `Mateusz Kocz`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#fff`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}

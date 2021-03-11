const title = `Mateusz Kocz ★ Software Developer`

module.exports = {
  siteMetadata: {
    title: title,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: `Mateusz Kocz`,
        start_url: `/`,
        background_color: `#E5E7EB`,
        theme_color: `#268bd2`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

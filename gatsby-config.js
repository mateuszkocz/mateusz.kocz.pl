module.exports = {
  siteMetadata: {
    title: `Mateusz Kocz ★ Software Developer`,
    description: `I create web applications in JavaScript and Typescript. I mostly use React. Sometimes I also write some Angular and server-side Express code.`,
    author: `@mateuszkocz`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateusz Kocz ★ Software Developer`,
        short_name: `Mateusz Kocz`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        // TODO
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}


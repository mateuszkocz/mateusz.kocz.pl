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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-29046225-1`,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `today-i-learned`,
        path: `${__dirname}/src/today-i-learned/`,
      },
    },
    `gatsby-plugin-mdx`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}

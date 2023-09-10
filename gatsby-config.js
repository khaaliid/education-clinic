/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Education clinic`,
    description: `Education clinic site`,
    author: `Education clinic - IT team`,
    siteUrl: `https://eduhub21.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: '@directus/gatsby-source-directus',
			options: {
				url: `http://127.0.0.1:8055/`, // Fill with your Directus instance address
				auth: {
					token: 'cg2AR1p5HDcthtx-bnACVAKd4FoH5b8l', // You can use a static token from an user

					// Or you can use the credentials of an user
					// email: "admin@example.com",
					// password: "d1r3ctu5",
				},
			},
		}
  ],
}

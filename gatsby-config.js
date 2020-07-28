/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Store data here
  siteMetadata: {
    title: 'Gatsby Starter Vanilla',
    description: 'A clean vanilla starter with the essentials for Gatsby',
    author: '@alexperronnet'
  },
  // Init plugins here
  plugins: [
    // Provides drop-in support for server rendering data
    'gatsby-plugin-react-helmet'
  ]
}

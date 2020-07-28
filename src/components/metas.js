import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

// Head document
export default function Metas() {

  // Data from gatsby-config.js
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return(
    <Helmet
      htmlAttributes= {{
        lang: 'en'
      }}
      title= { title }
      /**
       * Add meta tags below
       * see https://www.npmjs.com/package/react-helmet for more informations
       */
      meta= {[
        {
          name: 'description',
          content: description
        }
      ]}
    />
  )
}

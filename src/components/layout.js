import React from 'react'
import Metas from './metas'

import '../styles/index.css'

// Layout template
export default function Layout({ children }) {

  return(
    <div>
      { /** SEO */ }
      <Metas />
      { /** Header */ }
      <header></header>
      { /** main */ }
      <main>
        { children }
      </main>
      { /** Footer */ }
      <footer></footer>
    </div>
  )
}

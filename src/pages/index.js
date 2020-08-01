import React from 'react'
import Layout from '../components/layout'

export default function Index() {

  return(
    <Layout>
      <div className='content'>
        <img alt='Gatsby' src='https://www.gatsbyjs.org/monogram.svg' width='50' />
        <h1>
          Gatsby Starter Vanilla
        </h1>
        <p>
          A vanilla starter with the essentials for Gatsby by <a className='link' href='https://alexperronnet.com' target='_blank' rel='noreferrer' title='alexperronnet.com'>alexperronnet</a>
        </p>
        <a className='button' href='https://github.com/alexperronnet/gatsby-starter-vanilla' target='_blank' rel='noreferrer' title='Under 0BSD License'>
          View source
        </a>
      </div>
    </Layout>
  )
}

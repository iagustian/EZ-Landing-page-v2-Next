import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const TEMPLATE = (props) => {
  return (
    <>
      <div className="template-container">
        <Head>
          <title>
            TEMPLATE - Real Estate Transaction Management & Coordinator Software
            | EZ
          </title>
          <meta
            name="description"
            content="EZ Coordinator is a superior provider of cloud-based real estate transaction management and coordinator software applications. Try it out for FREE today!"
          />
          <meta
            property="og:title"
            content="TEMPLATE - Real Estate Transaction Management &amp; Coordinator Software | EZ"
          />
          <meta
            property="og:description"
            content="EZ Coordinator is a superior provider of cloud-based real estate transaction management and coordinator software applications. Try it out for FREE today!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <ActionBar rootClassName="action-bar-root-class-name1"></ActionBar>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .template-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TEMPLATE

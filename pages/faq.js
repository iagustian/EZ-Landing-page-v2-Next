import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import FAQ from '../components/faq'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const FAQsPage = (props) => {
  return (
    <>
      <div className="fa-qs-page-container">
        <Head>
          <title>
            Real Estate Transaction Management & Coordinator Software | EZ
          </title>
          <meta
            name="description"
            content="EZ Coordinator is a superior provider of cloud-based real estate transaction management and coordinator software applications. Try it out for FREE today!"
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Management &amp; Coordinator Software | EZ"
          />
          <meta
            property="og:description"
            content="EZ Coordinator is a superior provider of cloud-based real estate transaction management and coordinator software applications. Try it out for FREE today!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="FAQs"></Breadcrumb>
        <FAQ rootClassName="faq-root-class-name"></FAQ>
        <ActionBar rootClassName="action-bar-root-class-name4"></ActionBar>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .fa-qs-page-container {
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

export default FAQsPage

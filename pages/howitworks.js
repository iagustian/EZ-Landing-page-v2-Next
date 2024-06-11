import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import HowItWorks from '../components/how-it-works'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const HowItWorksPage = (props) => {
  return (
    <>
      <div className="how-it-works-page-container">
        <Head>
          <title>
            Real Estate Transaction Management Software | How It Works | EZ
          </title>
          <meta
            name="description"
            content="See how EZ Coordinator can work for you. Track your leads from start to finish, and manage all of your real estate transactions. Try it today for free!"
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Management Software | How It Works | EZ"
          />
          <meta
            property="og:description"
            content="See how EZ Coordinator can work for you. Track your leads from start to finish, and manage all of your real estate transactions. Try it today for free!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <HowItWorks rootClassName="how-it-works-root-class-name"></HowItWorks>
        <ActionBar rootClassName="action-bar-root-class-name"></ActionBar>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .how-it-works-page-container {
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

export default HowItWorksPage

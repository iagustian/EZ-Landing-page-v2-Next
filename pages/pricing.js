import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Pricing from '../components/pricing'
import QuoteSimplified from '../components/quote-simplified'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const PricingPage = (props) => {
  return (
    <>
      <div className="pricing-page-container">
        <Head>
          <title>
            EZ Coordinator Pricing | Real Estate Transaction Management Software
          </title>
          <meta
            name="description"
            content="EZ Coordinator has real estate transaction management software plans to meet your needs. Visit this page to learn more about group and individual pricing."
          />
          <meta
            property="og:title"
            content="EZ Coordinator Pricing | Real Estate Transaction Management Software"
          />
          <meta
            property="og:description"
            content="EZ Coordinator has real estate transaction management software plans to meet your needs. Visit this page to learn more about group and individual pricing."
          />
        </Head>
        <NavigationNonHome rootClassName="navigation-non-home-root-class-name1"></NavigationNonHome>
        <Pricing
          rootClassName="pricing-root-class-name"
          planItemDesc2="Perfect for trying EZ and upgrade later on."
        ></Pricing>
        <QuoteSimplified></QuoteSimplified>
        <ActionBar rootClassName="action-bar-root-class-name3"></ActionBar>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .pricing-page-container {
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

export default PricingPage

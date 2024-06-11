import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import QuoteSimplified from '../components/quote-simplified'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const CustomersBrokersPage = (props) => {
  return (
    <>
      <div className="customers-brokers-page-container">
        <Head>
          <title>
            Real Estate Transaction Management & Coordinator Software | Brokers
          </title>
          <meta
            name="description"
            content="Brokers and real estate transaction coordinators benefit from the many features of EZ Coordinator's transaction management software. Learn more today!"
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Management &amp; Coordinator Software | Brokers"
          />
          <meta
            property="og:description"
            content="Brokers and real estate transaction coordinators benefit from the many features of EZ Coordinator's transaction management software. Learn more today!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="For Brokers"></Breadcrumb>
        <div className="customers-brokers-page-container1">
          <span className="customers-brokers-page-text">
            <span className="customers-brokers-page-text1">
              Making sure multiple transactions are accurately managed, that the
              office is running at maximum efficiency, and guaranteeing the
              accuracy of paperwork is no easy task. With EZ Coordinator
              everything is in one easy-to-access location. You can review
              documents for compliance, increase your team’s productivity, and
              know how your office is performing
            </span>
            <br></br>
            <br></br>
            <span>
              Your agents and transaction coordinators will love it because it’s
              easy to enter and track data, and you’ll love it because its
              powerful features will give you more time for the things that are
              important to you and your business.
            </span>
            <br></br>
          </span>
        </div>
        <QuoteSimplified rootClassName="quote-simplified-root-class-name"></QuoteSimplified>
        <ActionBar rootClassName="action-bar-root-class-name7"></ActionBar>
        <Footer rootClassName="footer-root-class-name10"></Footer>
      </div>
      <style jsx>
        {`
          .customers-brokers-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .customers-brokers-page-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .customers-brokers-page-text {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            line-height: 1.5;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
          }
          @media (max-width: 767px) {
            .customers-brokers-page-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .customers-brokers-page-text {
              min-width: auto;
            }
            .customers-brokers-page-text1 {
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .customers-brokers-page-container1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default CustomersBrokersPage

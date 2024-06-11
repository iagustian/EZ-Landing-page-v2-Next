import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import QuoteSimplified from '../components/quote-simplified'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const CustomersTCsPage = (props) => {
  return (
    <>
      <div className="customers-t-cs-page-container">
        <Head>
          <title>
            Real Estate Transaction Coordinator Software | Office Management
          </title>
          <meta
            name="description"
            content="Transaction coordinators use EZ Coordinator to manage the transactions from real estate agents. Learn about the benefits for transaction coordinators here."
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Coordinator Software | Office Management"
          />
          <meta
            property="og:description"
            content="Transaction coordinators use EZ Coordinator to manage the transactions from real estate agents. Learn about the benefits for transaction coordinators here."
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="For Coordinators"></Breadcrumb>
        <div className="customers-t-cs-page-container1">
          <span className="customers-t-cs-page-text">
            <span>
              Managing the transactions from multiple agents means you wear a
              lot of different hats every day. EZ Coordinator will keep you on
              track with its powerful organizational tools and help you
              coordinate agent transactions and the myriad of related tasks.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              You can track important dates and documents in one place, and
              share data, as needed, in real time. No more searching for a
              missing letter of intent, or other documents that can get lost in
              the shuffle.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              EZ Coordinator is like a giant file cabinet that practically
              organizes itself, only this cabinet is cloud-based and accessible
              with the click of a mouse, or a tap on smart devices. You’ll
              wonder how you ever managed without it!
            </span>
            <br></br>
          </span>
        </div>
        <QuoteSimplified rootClassName="quote-simplified-root-class-name2"></QuoteSimplified>
        <ActionBar rootClassName="action-bar-root-class-name9"></ActionBar>
        <Footer rootClassName="footer-root-class-name12"></Footer>
      </div>
      <style jsx>
        {`
          .customers-t-cs-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .customers-t-cs-page-container1 {
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
          .customers-t-cs-page-text {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            line-height: 1.5;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
          }
          @media (max-width: 767px) {
            .customers-t-cs-page-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .customers-t-cs-page-text {
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .customers-t-cs-page-container1 {
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

export default CustomersTCsPage

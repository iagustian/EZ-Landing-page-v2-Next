import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import QuoteSimplified from '../components/quote-simplified'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const CustomersAgentsPage = (props) => {
  return (
    <>
      <div className="customers-agents-page-container">
        <Head>
          <title>
            Real Estate Transaction Management & Coordinator Software | Agents
          </title>
          <meta
            name="description"
            content="Real estate agents can use one program to track leads, documents, and transactions. Try EZ Coordinator's transaction management software for free today!"
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Management &amp; Coordinator Software | Agents"
          />
          <meta
            property="og:description"
            content="Real estate agents can use one program to track leads, documents, and transactions. Try EZ Coordinator's transaction management software for free today!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="For Agents"></Breadcrumb>
        <div className="customers-agents-page-container1">
          <span className="customers-agents-page-text">
            <span>
              The inability to keep track of prospects and real estate listings
              can negatively impact your bottom line. EZ Coordinator is helping
              real estate professionals grow their businesses through basic
              functions that our customers cannot live without.
            </span>
            <br></br>
          </span>
          <ul className="customers-agents-page-ul list">
            <li className="list-item">
              <span>
                Better juggle daily priorities through task reminders for
                listings.
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  Track showings and update listing status while on the go,
                  24/7.
                </span>
                <br></br>
              </span>
            </li>
            <li className="list-item">
              <span>
                <span>
                  Upload documents and collaborate with client and partners
                  through automated communication directly within EZ
                  Coordinator.
                </span>
                <br></br>
              </span>
            </li>
          </ul>
          <span className="customers-agents-page-text10">
            <span>
              Real estate doesn’t have to be hard, we make it EZ. Visit the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <Link href="/real-estate-transaction-management-software">
              <a className="customers-agents-page-link">features page</a>
            </Link>
            <span>
              {' '}
              now to learn about all of the ways EZ Coordinator can help you.
              The best part is it’s totally free.
            </span>
            <br></br>
            <br></br>
            <span>
              Simply put, you’ll love EZ Coordinator because its powerful
              features will give you more time for the things that are important
              to you and your business.
            </span>
            <br></br>
          </span>
        </div>
        <QuoteSimplified rootClassName="quote-simplified-root-class-name1"></QuoteSimplified>
        <ActionBar rootClassName="action-bar-root-class-name8"></ActionBar>
        <Footer rootClassName="footer-root-class-name11"></Footer>
      </div>
      <style jsx>
        {`
          .customers-agents-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .customers-agents-page-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .customers-agents-page-text {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            line-height: 1.5;
          }
          .customers-agents-page-ul {
            list-style-type: disc;
            list-style-position: outside;
          }
          .customers-agents-page-text10 {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            line-height: 1.5;
            padding-top: 0px;
          }
          .customers-agents-page-link {
            text-decoration: underline;
          }
          @media (max-width: 767px) {
            .customers-agents-page-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .customers-agents-page-text {
              min-width: auto;
            }
            .customers-agents-page-text10 {
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .customers-agents-page-container1 {
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

export default CustomersAgentsPage

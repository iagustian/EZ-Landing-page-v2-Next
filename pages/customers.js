import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import AllTestimonals from '../components/all-testimonals'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const CustomersPage = (props) => {
  return (
    <>
      <div className="customers-page-container">
        <Head>
          <title>
            Real Estate Transaction Software | Brokers, Agents & Coordinators
          </title>
          <meta
            name="description"
            content="EZ Coordinator's real estate transaction management and coordinator software is used by agents and brokers nationwide. Visit this page to learn more."
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Software | Brokers, Agents &amp; Coordinators"
          />
          <meta
            property="og:description"
            content="EZ Coordinator's real estate transaction management and coordinator software is used by agents and brokers nationwide. Visit this page to learn more."
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="Customers"></Breadcrumb>
        <div className="customers-page-container1">
          <h1 className="customers-page-text">
            EZCoordinator is the preferred choice by agents from some of the
            nation&apos;s most successful brokerages.*
          </h1>
          <img
            alt="image"
            src="/static/ez-customers-1500w.jpeg"
            className="customers-page-image"
          />
          <img
            alt="image"
            src="/static/map-400h.png"
            className="customers-page-image1"
          />
          <span className="customers-page-text1">
            <span>
              *EZ Coordinator is not in an exclusive partnership with any of the
              below organizations.
            </span>
            <br></br>
          </span>
        </div>
        <AllTestimonals rootClassName="all-testimonals-root-class-name"></AllTestimonals>
        <ActionBar rootClassName="action-bar-root-class-name5"></ActionBar>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .customers-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .customers-page-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .customers-page-text {
            color: var(--dl-color-gray-500);
            font-size: 1.5em;
            max-width: 800px;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .customers-page-image {
            width: auto;
            object-fit: cover;
          }
          .customers-page-image1 {
            width: auto;
            margin-top: var(--dl-space-space-threeunits);
            object-fit: cover;
          }
          .customers-page-text1 {
            color: var(--dl-color-gray-700);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          @media (max-width: 767px) {
            .customers-page-text {
              width: 80%;
              font-size: 1.2em;
            }
            .customers-page-image {
              width: 100%;
            }
            .customers-page-image1 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .customers-page-image1 {
              width: auto;
              height: var(--dl-size-size-large);
            }
            .customers-page-text1 {
              width: 80%;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default CustomersPage

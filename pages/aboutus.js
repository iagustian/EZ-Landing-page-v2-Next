import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'

const AboutPage = (props) => {
  return (
    <>
      <div className="about-page-container">
        <Head>
          <title>
            About EZ Coordinator | Real Estate Transaction Management Software
          </title>
          <meta
            name="description"
            content="The team behind EZ Coordinator is dedicated to making your transaction management software experience easy. Visit this page to learn more about us."
          />
          <meta
            property="og:title"
            content="About EZ Coordinator | Real Estate Transaction Management Software"
          />
          <meta
            property="og:description"
            content="The team behind EZ Coordinator is dedicated to making your transaction management software experience easy. Visit this page to learn more about us."
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="About Us"></Breadcrumb>
        <div className="about-page-container1">
          <span className="about-page-text">
            <span>
              EZCoordinator was foundationally built by a premier real estate
              investment firm whose partners have over 30 years of proven
              success in real estate transactions.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Now, EZ is fully maintained, managed and led by a team of
              experienced SaaS leader, software engineers and product designer
              who have been in the software industry for more than 10 years.
            </span>
          </span>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
      <style jsx>
        {`
          .about-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-page-container1 {
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
          .about-page-text {
            color: var(--dl-color-gray-500);
            min-width: 400px;
          }
          @media (max-width: 767px) {
            .about-page-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-page-text {
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .about-page-container1 {
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

export default AboutPage

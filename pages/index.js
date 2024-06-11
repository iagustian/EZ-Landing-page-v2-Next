import React from 'react'
import Head from 'next/head'

import LimitedOffer from '../components/limited-offer'
import Menu from '../components/menu'
import Features from '../components/features'
import QuoteSimplified from '../components/quote-simplified'
import Statistics from '../components/statistics'
import Banners from '../components/banners'
import HowItWorks from '../components/how-it-works'
import AllTestimonals from '../components/all-testimonals'
import ActionBar from '../components/action-bar'
import FAQ from '../components/faq'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
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
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/56d77030-f3ff-4e59-b91c-141acf367d67/6daabb12-4387-488e-824d-5582e2e2714d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LimitedOffer></LimitedOffer>
        <section className="home-hero">
          <Menu rootClassName="menu-root-class-name"></Menu>
          <header className="home-header">
            <h1 className="home-text">Complete. Simple. Intuitive.</h1>
            <p className="home-text1">
              Never miss important deadlines and close more transactions with
              EZCoordinator
            </p>
            <a
              href="https://app.ezcoordinator.com/register"
              className="home-link"
            >
              <div className="home-get-started">
                <span className="home-text2">Create an Account  </span>
              </div>
            </a>
            <div className="home-container1">
              <a href="#home-testimonials" className="home-link1">
                <span>
                  or
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>See Success Stories 💙</span>
              </a>
            </div>
          </header>
          <div id="dashboard-preview" className="home-dashboard-preview">
            <div className="home-outline">
              <img
                alt="pastedImage"
                src="/static/transaction-list-1400w.png"
                loading="lazy"
                className="home-image"
              />
            </div>
          </div>
        </section>
        <Features rootClassName="features-root-class-name"></Features>
        <QuoteSimplified></QuoteSimplified>
        <Statistics></Statistics>
        <Banners text4="See all features"></Banners>
        <HowItWorks></HowItWorks>
        <div id="home-testimonials" className="home-container2">
          <AllTestimonals></AllTestimonals>
        </div>
        <ActionBar></ActionBar>
        <FAQ></FAQ>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 1000px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-header {
            display: flex;
            margin-top: 120px;
            align-items: center;
            flex-direction: column;
          }
          .home-text {
            color: rgb(38, 38, 38);
            font-size: 54px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text1 {
            color: rgb(140, 140, 140);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-link {
            display: contents;
          }
          .home-get-started {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #246b96;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 4px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #246b96;
          }
          .home-get-started:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text2 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-container1 {
            width: 100%;
            height: 38px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .home-link1 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            margin-top: 0px;
            font-weight: 600;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-dashboard-preview {
            top: 650px;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: center;
            border-color: #2354a9;
            border-width: 30px;
            border-radius: 100px;
            flex-direction: column;
            background-color: #0759ad;
          }
          .home-outline {
            display: flex;
            align-items: center;
            border-color: #8ab7ea;
            border-width: 20px;
            border-radius: 70px;
            flex-direction: column;
            background-color: #7350f7;
          }
          .home-image {
            width: 805px;
            height: 599px;
            z-index: 10;
            object-fit: cover;
            user-select: none;
            border-radius: 50px;
            object-position: left;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-image {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #f7f7f7;
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .home-text {
              color: #000000;
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text1 {
              color: #8c8c8c;
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-dashboard-preview {
              top: 520px;
              width: 90%;
              border-width: 10px;
              border-radius: 45px;
            }
            .home-outline {
              border-width: 10px;
              border-radius: 35px;
            }
            .home-image {
              width: 100%;
              border-radius: 26px;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-bottom: 160px;
            }
            .home-header {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-text1 {
              color: #8c8c8c;
            }
            .home-get-started {
              width: 265px;
              align-self: center;
            }
            .home-dashboard-preview {
              top: 500px;
            }
            .home-image {
              height: var(--dl-size-size-xxlarge);
              object-fit: cover;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

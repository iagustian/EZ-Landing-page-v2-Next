import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import QuoteSimplified from '../components/quote-simplified'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const ErrorsAndOmissionsPage = (props) => {
  return (
    <>
      <div className="errors-and-omissions-page-container">
        <Head>
          <title>
            E & O Insurance | Document Management Advantages | Real Estate
          </title>
          <meta
            name="description"
            content="Papers everywhere? Organize your office with the help of EZ Coordinator's real estate transaction management software! Try it today for FREE!"
          />
          <meta
            property="og:title"
            content="E &amp; O Insurance | Document Management Advantages | Real Estate"
          />
          <meta
            property="og:description"
            content="Papers everywhere? Organize your office with the help of EZ Coordinator's real estate transaction management software! Try it today for FREE!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb
          text="Errors and Omissions"
          rootClassName="breadcrumb-root-class-name1"
        ></Breadcrumb>
        <div className="errors-and-omissions-page-container1">
          <h1 className="errors-and-omissions-page-text">
            <span>
              EZ Coordinator Can Reduce Risk and Help You Save on E &amp; O
              Insurance
            </span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/ez_impact_e%26o_risk_insurance-400h.png"
            className="errors-and-omissions-page-image"
          />
          <span className="errors-and-omissions-page-text03">
            <span>
              Using the EZ Coordinator real estate transaction management system
              has helped agents, brokers, and transaction coordinators to reduce
              the number of errors and omissions that can occur when documents
              are not carefully tracked and stored. E &amp; O insurance
              underwriters will tell you that that the best way to avoid claims
              and lawsuits is to maintain well-documented files.
            </span>
            <br></br>
            <br></br>
            <span>
              The very nature of the real estate business leaves brokers and
              agents exposed to risk, and even the smallest claims can drain the
              bottom line. Sometimes, it can even come down to “He Said/She
              Said…” but when you have the ability to save and share documents
              such as inspection reports, title searches, and letters of intent
              in one cloud-based system, you have the proof you need to prevent
              potential claims from even getting started.
            </span>
            <br></br>
          </span>
          <h1 className="errors-and-omissions-page-text09">
            <span>
              EZ Coordinator Can Help Brokers and Agents Save Time and up to 25%
              on Premiums
            </span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/ez_impact_e%26o_save_time_money-700w.png"
            className="errors-and-omissions-page-image1"
          />
          <span className="errors-and-omissions-page-text12">
            <span>
              Insurance is one of the basic costs of business, but don’t pay
              more than you should. EZ Coordinator is simple to use, and each
              member of your organization can enter their documents in
              real-time. That way, everyone is on the same page and your company
              minimizes exposure to risk.
            </span>
            <br></br>
            <br></br>
            <span>
              Let’s look at a typical scenario. A buyer calls to ask if he
              should ignore the drip under the kitchen sink. You open EZ
              Coordinator, tap on his or her file and open the home inspection
              report. You tell the buyer, “According to the home inspector’s
              report, that leaky pipe must be fixed, or you’ll run the risk of
              developing a mold problem.” Your informed reply has the power to
              mitigate your risk of a possible lawsuit over mold down the road;
              because according to the suit that arrives in your mailbox six
              months later, you told the client, “Don’t worry about it.”
            </span>
            <br></br>
            <br></br>
            <span>
              You immediately contact the buyer’s representative and send them
              the inspection report and your notes on the phone call with the
              buyer. The information you needed was right there, at your
              fingertips, securely documented so you’re prepared at the moment
              you need it most. Imagine what you just saved in worry, time and
              most importantly legal fees!
            </span>
          </span>
        </div>
        <QuoteSimplified rootClassName="quote-simplified-root-class-name4"></QuoteSimplified>
        <ActionBar rootClassName="action-bar-root-class-name13"></ActionBar>
        <Footer rootClassName="footer-root-class-name16"></Footer>
      </div>
      <style jsx>
        {`
          .errors-and-omissions-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .errors-and-omissions-page-container1 {
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
          .errors-and-omissions-page-text {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .errors-and-omissions-page-image {
            width: 468px;
            height: 264px;
            align-self: center;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .errors-and-omissions-page-text03 {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            margin-top: 0px;
            line-height: 1.5;
          }
          .errors-and-omissions-page-text09 {
            margin-top: var(--dl-space-space-threeunits);
          }
          .errors-and-omissions-page-image1 {
            width: 483px;
            height: 280px;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .errors-and-omissions-page-text12 {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            margin-top: var(--dl-space-space-threeunits);
            line-height: 1.5;
          }
          @media (max-width: 991px) {
            .errors-and-omissions-page-image1 {
              flex: 1;
            }
          }
          @media (max-width: 767px) {
            .errors-and-omissions-page-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .errors-and-omissions-page-text03 {
              min-width: auto;
            }
            .errors-and-omissions-page-image1 {
              flex: 1;
            }
            .errors-and-omissions-page-text12 {
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .errors-and-omissions-page-container1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .errors-and-omissions-page-image {
              width: 334px;
              height: 187px;
            }
            .errors-and-omissions-page-image1 {
              flex: 1;
              width: 315px;
              height: 138px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ErrorsAndOmissionsPage

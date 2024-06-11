import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'

const AffiliateProgramToSPage = (props) => {
  return (
    <>
      <div className="affiliate-program-to-s-page-container">
        <Head>
          <title>
            EZ Affiliate Program Terms | Real Estate Transaction Management
          </title>
          <meta
            name="description"
            content="Explore our Affiliate Program's Terms of Service (ToS) at EZ Coordinator. Ideal for real estate agents, brokers, and coordinators."
          />
          <meta
            property="og:title"
            content="EZ Affiliate Program Terms | Real Estate Transaction Management"
          />
          <meta
            property="og:description"
            content="Explore our Affiliate Program's Terms of Service (ToS) at EZ Coordinator. Ideal for real estate agents, brokers, and coordinators."
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb text="Affiliate Program Terms of Service"></Breadcrumb>
        <div className="affiliate-program-to-s-page-container1">
          <div className="affiliate-program-to-s-page-container2">
            <h2 className="affiliate-program-to-s-page-text">
              <span>EZCoordinator’s Affiliate Program Terms of Service</span>
              <br></br>
            </h2>
            <span className="affiliate-program-to-s-page-text03">
              <br></br>
              <span>Welcome to our EZCoordinator’s Affiliate Program!</span>
              <br></br>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                These Terms of Service (the &quot;Agreement&quot;) govern your
                participation in our affiliate program (the &quot;Program&quot;)
                and establish the terms and conditions of the Program. By
                participating in the Program, you agree to abide by these terms.
              </span>
              <br></br>
              <br></br>
              <span className="affiliate-program-to-s-page-text13">
                Self-referrals are not allowed
              </span>
              <br></br>
              <span>
                You are not permitted to sign up for EZCoordinator through your
                own affiliate link. If we detect any self-referrals, your
                account will be permanently banned and any commission earned
                will be forfeited.
              </span>
              <br></br>
              <br></br>
              <span className="affiliate-program-to-s-page-text18">
                Abuse or attempting to mislead
              </span>
              <br></br>
              <span>
                We do not tolerate attempts to abuse our affiliate system. Any
                attempt to mislead, manipulate or defraud us or potential
                customers will result in your account being permanently banned.
                This includes posting fake discounts to coupon-sharing websites
                or engaging in any other activity that violates our policies.
              </span>
              <br></br>
              <br></br>
              <span className="affiliate-program-to-s-page-text23">
                No search engine ads, Facebook ads, or other ads that compete
                with our own marketing
              </span>
              <br></br>
              <span>
                You are not allowed to run any search engine ads (especially on
                branded terms or domain names), Facebook ads, or other ads that
                would compete with our own marketing and potentially cause
                confusion for customers. We reserve the right to terminate your
                account if we detect any such activity.
              </span>
              <br></br>
              <br></br>
              <span className="affiliate-program-to-s-page-text28">
                No pretending to be acting on behalf of us (i.e. as an employee)
              </span>
              <br></br>
              <span>
                You are not allowed to impersonate us or pretend to be acting on
                our behalf. This includes posing as an employee or
                representative of our company.
              </span>
              <br></br>
              <br></br>
              <span className="affiliate-program-to-s-page-text33">
                Changes to the Terms of Service
              </span>
              <br></br>
              <span>
                We reserve the right to change the Terms of Service for our
                affiliate program at any time. We will provide notice of any
                changes to the Terms of Service on our website, and it is your
                responsibility to review the changes and comply with the updated
                terms.
              </span>
              <br></br>
              <br></br>
              <span>
                By participating in our affiliate program, you agree to comply
                with these terms and conditions. We reserve the right to
                terminate your participation in the Program at any time and for
                any reason if you violate these terms. If you have any questions
                about these terms or our affiliate program, please contact us at
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>affiliate@ezcoordinator.com</span>
              <span>.</span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name17"></Footer>
      </div>
      <style jsx>
        {`
          .affiliate-program-to-s-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .affiliate-program-to-s-page-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .affiliate-program-to-s-page-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .affiliate-program-to-s-page-text {
            color: var(--dl-color-gray-500);
          }
          .affiliate-program-to-s-page-text03 {
            color: var(--dl-color-gray-500);
            min-width: 300px;
            margin-top: var(--dl-space-space-unit);
          }
          .affiliate-program-to-s-page-text13 {
            font-weight: 700;
          }
          .affiliate-program-to-s-page-text18 {
            font-weight: 700;
          }
          .affiliate-program-to-s-page-text23 {
            font-weight: 700;
          }
          .affiliate-program-to-s-page-text28 {
            font-weight: 700;
          }
          .affiliate-program-to-s-page-text33 {
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

export default AffiliateProgramToSPage

import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import QuoteSimplified from '../components/quote-simplified'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const DocuSignPage = (props) => {
  return (
    <>
      <div className="docu-sign-page-container">
        <Head>
          <title>
            EZ | Real Estate Transaction Management & Coordinator Software
          </title>
          <meta
            name="description"
            content="Papers everywhere? Organize your office with the help of EZ Coordinator's real estate transaction management software! Try it today for FREE!"
          />
          <meta
            property="og:title"
            content="EZ | Real Estate Transaction Management &amp; Coordinator Software"
          />
          <meta
            property="og:description"
            content="Papers everywhere? Organize your office with the help of EZ Coordinator's real estate transaction management software! Try it today for FREE!"
          />
        </Head>
        <NavigationNonHome></NavigationNonHome>
        <Breadcrumb
          text="DocuSign Integration"
          rootClassName="breadcrumb-root-class-name"
        ></Breadcrumb>
        <div className="docu-sign-page-container1">
          <h1 className="docu-sign-page-text">
            <span>Your Paperless Real Estate Document Management System</span>
            <br></br>
          </h1>
          <div className="docu-sign-page-container2">
            <div className="docu-sign-page-container3">
              <span className="docu-sign-page-text03">
                <span>
                  DocuSign, the global standard for electronic signatures, is
                  now integrated with EZ Coordinator.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Store all your documents in EZ Coordinator and send them out
                  for e-signature with DocuSign, the easiest, fastest, most
                  secure way to send, sign and track documents.
                </span>
                <br></br>
              </span>
            </div>
            <div className="docu-sign-page-container4">
              <img
                alt="image"
                src="/screenshots/custom-functions-and-fields-600w.png"
                className="docu-sign-page-image"
              />
            </div>
          </div>
          <span className="docu-sign-page-text09">
            <span>
              Send out documents for digital signature using DocuSign from your
              EZ Coordinator account.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              All you have to do is select the document, add the parties you
              want to sign, and send it off, DocuSign takes care of the rest.
              When your document has been signed, you can fetch it back into EZ
              Coordinator.
            </span>
            <br></br>
          </span>
        </div>
        <QuoteSimplified rootClassName="quote-simplified-root-class-name3"></QuoteSimplified>
        <ActionBar rootClassName="action-bar-root-class-name10"></ActionBar>
        <Footer rootClassName="footer-root-class-name13"></Footer>
      </div>
      <style jsx>
        {`
          .docu-sign-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .docu-sign-page-container1 {
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
          .docu-sign-page-text {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .docu-sign-page-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .docu-sign-page-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .docu-sign-page-text03 {
            color: var(--dl-color-gray-500);
            line-height: 1.5;
          }
          .docu-sign-page-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            min-height: 150px;
            align-items: flex-start;
            flex-direction: column;
          }
          .docu-sign-page-image {
            width: 417px;
            height: 248px;
            object-fit: cover;
            margin-left: var(--dl-space-space-twounits);
          }
          .docu-sign-page-text09 {
            color: var(--dl-color-gray-500);
            min-width: 400px;
            margin-top: var(--dl-space-space-threeunits);
            line-height: 1.5;
          }
          @media (max-width: 991px) {
            .docu-sign-page-image {
              width: 70%;
            }
          }
          @media (max-width: 767px) {
            .docu-sign-page-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .docu-sign-page-container3 {
              width: 100%;
            }
            .docu-sign-page-container4 {
              display: none;
            }
            .docu-sign-page-text09 {
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .docu-sign-page-container1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .docu-sign-page-container3 {
              width: 100%;
            }
            .docu-sign-page-container4 {
              display: none;
            }
            .docu-sign-page-image {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default DocuSignPage

import React from 'react'
import Head from 'next/head'

import NavigationNoAuthButtons from '../components/navigation-no-auth-buttons'
import AllTestimonals from '../components/all-testimonals'
import Footer from '../components/footer'

const AffiliateProgramPage = (props) => {
  return (
    <>
      <div className="affiliate-program-page-container">
        <Head>
          <title>
            Real Estate Transaction Management Software | Affiliate Program | EZ
          </title>
          <meta
            name="description"
            content="Join our affiliate program and receive a 30% commission on all payments within the first 12 months for paying customers you refer to us!"
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Management Software | Affiliate Program | EZ"
          />
          <meta
            property="og:description"
            content="Join our affiliate program and receive a 30% commission on all payments within the first 12 months for paying customers you refer to us!"
          />
        </Head>
        <NavigationNoAuthButtons rootClassName="navigation-no-auth-buttons-root-class-name"></NavigationNoAuthButtons>
        <div className="affiliate-program-page-container1">
          <div className="affiliate-program-page-centered-container">
            <div className="affiliate-program-page-heading">
              <span className="affiliate-program-page-text">
                Affiliate Program
              </span>
              <span className="affiliate-program-page-text01 title">
                <span>Earn 40% referral commission</span>
                <br></br>
              </span>
            </div>
            <span className="affiliate-program-page-text04">
              <span>
                Join our affiliate program and receive a 40% commission
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                on all payments within the first 12 months for paying customers
                you refer to us!
              </span>
              <br></br>
              <br></br>
            </span>
            <a
              href="https://affiliate.ezcoordinator.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="affiliate-program-page-link"
            >
              <div className="affiliate-program-page-get-started template-button">
                <span className="affiliate-program-page-text10">
                  <span>Join now</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
        </div>
        <section className="affiliate-program-page-container2">
          <div className="affiliate-program-page-container3">
            <div className="affiliate-program-page-step-1 card">
              <span className="affiliate-program-page-text13">Step 1</span>
              <span className="affiliate-program-page-text14">
                <span>Join our affiliate program</span>
                <br></br>
              </span>
              <span className="affiliate-program-page-text17">
                Go ahead to sign up our affiliate program first and get your
                unique referral link
              </span>
            </div>
            <div className="affiliate-program-page-step-2 card">
              <span className="affiliate-program-page-text18">Step 2</span>
              <span className="affiliate-program-page-text19">
                <span>Share your referral link</span>
                <br></br>
              </span>
              <span className="affiliate-program-page-text22">
                <span>
                  Share your referral link with your audience in the video
                  description, a tweet, a link in your newsletter, or FB
                  comments
                </span>
                <br></br>
              </span>
            </div>
            <div className="affiliate-program-page-step-3 card">
              <span className="affiliate-program-page-text25">
                <span className="affiliate-program-page-text26">Step 3</span>
                <br></br>
              </span>
              <span className="affiliate-program-page-text28">
                <span>Get paid</span>
                <br></br>
              </span>
              <span className="affiliate-program-page-text31">
                <span>
                  We&apos;ll send you a commission via PayPal or Wise at the end
                  of every month. The minimum payout is $100.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </section>
        <AllTestimonals></AllTestimonals>
        <section className="affiliate-program-page-action-bar">
          <div className="affiliate-program-page-action">
            <div className="affiliate-program-page-heading1">
              <span className="affiliate-program-page-text34 title">
                <span>Partner with us</span>
                <br></br>
              </span>
              <span className="affiliate-program-page-text37">
                <span>
                  Join our affiliate program to earn a 40% commission
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>up to 12 months!</span>
                <br></br>
              </span>
              <a
                href="https://affiliate.ezcoordinator.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="affiliate-program-page-link1"
              >
                <div className="affiliate-program-page-get-started1 template-button">
                  <span className="affiliate-program-page-text42">
                    <span>Join us now</span>
                    <br></br>
                  </span>
                </div>
              </a>
            </div>
            <div className="affiliate-program-page-images">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwcm9kdWN0aXZlfGVufDB8fHx8MTY3Njk3NzUxOQ&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="affiliate-program-page-image"
              />
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name18"></Footer>
      </div>
      <style jsx>
        {`
          .affiliate-program-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .affiliate-program-page-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #211062;
          }
          .affiliate-program-page-centered-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .affiliate-program-page-heading {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .affiliate-program-page-text {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .affiliate-program-page-text01 {
            color: var(--dl-color-gray-white);
          }
          .affiliate-program-page-text04 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            text-align: center;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .affiliate-program-page-link {
            display: contents;
          }
          .affiliate-program-page-get-started {
            margin-bottom: 0px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .affiliate-program-page-text10 {
            font-size: 18px;
          }
          .affiliate-program-page-container2 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: #000000;
          }
          .affiliate-program-page-container3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .affiliate-program-page-step-1 {
            height: initial;
            padding-top: var(--dl-space-space-twounits);
          }
          .affiliate-program-page-text13 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .affiliate-program-page-text14 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .affiliate-program-page-text17 {
            line-height: 24px;
          }
          .affiliate-program-page-step-2 {
            height: initial;
            padding-top: var(--dl-space-space-twounits);
          }
          .affiliate-program-page-text18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .affiliate-program-page-text19 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .affiliate-program-page-text22 {
            line-height: 24px;
          }
          .affiliate-program-page-step-3 {
            height: initial;
            padding-top: var(--dl-space-space-twounits);
          }
          .affiliate-program-page-text25 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .affiliate-program-page-text26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .affiliate-program-page-text28 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .affiliate-program-page-text31 {
            line-height: 24px;
          }
          .affiliate-program-page-action-bar {
            width: 100%;
            display: flex;
            padding: 120px;
            position: relative;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            justify-content: center;
          }
          .affiliate-program-page-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-ez-main);
          }
          .affiliate-program-page-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .affiliate-program-page-text34 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .affiliate-program-page-text37 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .affiliate-program-page-link1 {
            display: contents;
          }
          .affiliate-program-page-get-started1 {
            margin-bottom: 0px;
            text-decoration: none;
          }
          .affiliate-program-page-text42 {
            font-size: 18px;
          }
          .affiliate-program-page-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .affiliate-program-page-image {
            width: 359px;
            height: 491px;
            object-fit: cover;
            user-select: none;
            border-radius: 50px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          @media (max-width: 991px) {
            .affiliate-program-page-centered-container {
              padding: 0px;
            }
            .affiliate-program-page-container2 {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .affiliate-program-page-text13 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .affiliate-program-page-text14 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .affiliate-program-page-text17 {
              line-height: 21px;
            }
            .affiliate-program-page-text18 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .affiliate-program-page-text19 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .affiliate-program-page-text22 {
              line-height: 21px;
            }
            .affiliate-program-page-text25 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .affiliate-program-page-text28 {
              line-height: 33px;
            }
            .affiliate-program-page-text31 {
              line-height: 21px;
            }
            .affiliate-program-page-action {
              flex-direction: column;
            }
            .affiliate-program-page-heading1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .affiliate-program-page-text34 {
              font-size: 36px;
              line-height: 36px;
            }
            .affiliate-program-page-image {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .affiliate-program-page-centered-container {
              padding: 0px;
            }
            .affiliate-program-page-heading {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .affiliate-program-page-text01 {
              margin-bottom: 0px;
            }
            .affiliate-program-page-text10 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .affiliate-program-page-container2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .affiliate-program-page-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .affiliate-program-page-step-1 {
              margin-right: 0px;
            }
            .affiliate-program-page-text13 {
              font-size: 24px;
            }
            .affiliate-program-page-text14 {
              font-size: 24px;
            }
            .affiliate-program-page-text17 {
              font-size: 14px;
            }
            .affiliate-program-page-step-2 {
              margin-left: 0px;
            }
            .affiliate-program-page-text18 {
              font-size: 24px;
            }
            .affiliate-program-page-text19 {
              font-size: 24px;
            }
            .affiliate-program-page-text22 {
              font-size: 14px;
            }
            .affiliate-program-page-text28 {
              font-size: 24px;
            }
            .affiliate-program-page-text31 {
              font-size: 14px;
            }
            .affiliate-program-page-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .affiliate-program-page-action {
              align-items: center;
            }
            .affiliate-program-page-heading1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .affiliate-program-page-text34 {
              font-size: 28px;
              text-align: left;
            }
            .affiliate-program-page-text42 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .affiliate-program-page-images {
              justify-content: center;
            }
            .affiliate-program-page-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .affiliate-program-page-container1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-sevenunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .affiliate-program-page-centered-container {
              padding-left: 0px;
            }
            .affiliate-program-page-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .affiliate-program-page-step-1 {
              margin-bottom: 0px;
            }
            .affiliate-program-page-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default AffiliateProgramPage

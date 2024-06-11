import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>
            Page - Real Estate Transaction Management & Coordinator Software |
            EZ
          </title>
          <meta
            name="description"
            content="EZ Coordinator is a superior provider of cloud-based real estate transaction management and coordinator software applications. Try it out for FREE today!"
          />
          <meta
            property="og:title"
            content="Page - Real Estate Transaction Management &amp; Coordinator Software | EZ"
          />
          <meta
            property="og:description"
            content="EZ Coordinator is a superior provider of cloud-based real estate transaction management and coordinator software applications. Try it out for FREE today!"
          />
        </Head>
        <div className="page-pricing">
          <div className="page-container1">
            <div className="page-pricing-card">
              <span className="page-text">Free</span>
              <div className="page-container2">
                <span className="page-text01">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="page-text04">0</span>
              </div>
              <div className="page-container3">
                <span className="page-text05">
                  <span>✔ Full access to design tool</span>
                </span>
                <span className="page-text07">
                  <span>✔ Publish with Teleport</span>
                </span>
                <span className="page-text09">
                  <span>✔ Subdomain publish</span>
                </span>
                <span className="page-text11">
                  <span>✔ Download code</span>
                </span>
              </div>
              <button className="page-button button">Learn More</button>
            </div>
            <div className="page-pricing-card1">
              <span className="page-text13">basic</span>
              <div className="page-container4">
                <span className="page-text14">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="page-text17">9</span>
                <span className="page-text18">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="page-text20">
                <span>Billed annualy or $12 month-to-month.</span>
                <span></span>
              </span>
              <div className="page-container5">
                <span className="page-text23">
                  <span>✔ All features of FREE plan</span>
                </span>
                <span className="page-text25">
                  <span>✔ Connect to custom domains</span>
                </span>
                <span className="page-text27">
                  <span>✔ Private projects</span>
                </span>
                <span className="page-text29">
                  <span>✔ No project limitations</span>
                </span>
                <span className="page-text31">
                  <span>✔ Unlimited collabotators</span>
                </span>
              </div>
              <button className="page-button1 button">Learn More</button>
            </div>
            <div className="page-pricing-card2">
              <span className="page-text33">Pro</span>
              <div className="page-container6">
                <span className="page-text34">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="page-text37">29</span>
                <span className="page-text38">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="page-text40">
                <span>Billed annualy or $32 month-to-month.</span>
                <span></span>
              </span>
              <div className="page-container7">
                <span className="page-text43">
                  <span>✔ All features of BASIC plan</span>
                </span>
                <span className="page-text45">
                  <span>✔ Priority support</span>
                </span>
                <span className="page-text47">
                  <span>✔ Premium analytics</span>
                </span>
                <span className="page-text49">
                  <span>✔ Version history</span>
                </span>
              </div>
              <button className="page-button2 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .page-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .page-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .page-pricing-card:hover {
            transform: scale(1.02);
          }
          .page-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .page-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .page-text01 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .page-text04 {
            font-size: 4rem;
            font-weight: 700;
          }
          .page-container3 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .page-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .page-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .page-pricing-card1:hover {
            transform: scale(1.02);
          }
          .page-text13 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .page-container4 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .page-text14 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .page-text17 {
            font-size: 4rem;
            font-weight: 700;
          }
          .page-text18 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .page-text20 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-container5 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .page-text23 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text29 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text31 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .page-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .page-pricing-card2:hover {
            transform: scale(1.02);
          }
          .page-text33 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .page-container6 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .page-text34 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .page-text37 {
            font-size: 4rem;
            font-weight: 700;
          }
          .page-text38 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .page-text40 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-container7 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .page-text43 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text45 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text49 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-button2 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 991px) {
            .page-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
            }
            .page-pricing-card1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .page-pricing-card2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .page-container1 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .page-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .page-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .page-container1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .page-pricing-card2 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page

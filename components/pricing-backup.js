import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import PricingItem from './pricing-item'

const PricingBackup = (props) => {
  return (
    <>
      <section className="pricing-backup-pricing">
        <div className="pricing-backup-centered-container">
          <div className="pricing-backup-heading">
            <span className="pricing-backup-text">{props.text22}</span>
            <span className="pricing-backup-text01 title">{props.text}</span>
            <span className="pricing-backup-text02">{props.text1}</span>
          </div>
          <div className="pricing-backup-cards">
            <div className="pricing-backup-card">
              <div className="pricing-backup-plan-item-header">
                <span className="pricing-backup-text03">
                  {props.planItemName1}
                </span>
                <span className="pricing-backup-text04">
                  Perfect for exploring the product and upgrade later on.
                </span>
                <div className="pricing-backup-container">
                  <h1 className="pricing-backup-text05">{props.currency1}</h1>
                  <h1 className="pricing-backup-text06">0</h1>
                  <h1 className="pricing-backup-text07">
                    {props.priceDetail1}
                  </h1>
                </div>
                <a
                  href="https://app.ezcoordinator.com/register?subscription=2"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pricing-backup-link"
                >
                  <div className="pricing-backup-get-started template-button">
                    <span className="pricing-backup-text08">
                      {props.planBtnText1}
                    </span>
                  </div>
                </a>
                <span className="pricing-backup-text09">
                  {props.whatisincluded1}
                </span>
              </div>
              <div className="pricing-backup-bullet-points">
                <PricingItem text="1 User"></PricingItem>
                <PricingItem text="1 Transaction"></PricingItem>
                <PricingItem text="3 Prospects"></PricingItem>
                <PricingItem text="3 Task Templates"></PricingItem>
                <PricingItem text="1 Custom Section and Fields"></PricingItem>
                <PricingItem text="Task Management"></PricingItem>
                <PricingItem text="Calendar"></PricingItem>
              </div>
            </div>
            <div className="pricing-backup-card1">
              <div className="pricing-backup-plan-item-header1">
                <span className="pricing-backup-text10">EZ Pro</span>
                <span className="pricing-backup-text11">
                  <span>
                    For individual who wants to have a full control of their
                    business.
                  </span>
                  <br></br>
                </span>
                <div className="pricing-backup-container1">
                  <h1 className="pricing-backup-text14">{props.currency2}</h1>
                  <h1 className="pricing-backup-text15">39</h1>
                  <h1 className="pricing-backup-text16">
                    {props.priceDetail2}
                  </h1>
                </div>
                <span className="pricing-backup-text17">14-day free trial</span>
                <a
                  href="https://app.ezcoordinator.com/register?subscription=17"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pricing-backup-link1"
                >
                  <div className="pricing-backup-get-started1 template-button">
                    <span className="pricing-backup-text18">Get Started!</span>
                  </div>
                </a>
                <span className="pricing-backup-text19">
                  All features in Free, plus:
                </span>
              </div>
              <div className="pricing-backup-bullet-points1">
                <PricingItem text="1 User"></PricingItem>
                <PricingItem text="Unlimited transactions"></PricingItem>
                <PricingItem text="Unlimited Prospects"></PricingItem>
                <PricingItem text="Unlimited Document Uploads"></PricingItem>
                <PricingItem text="Unlimited Task Templates"></PricingItem>
                <PricingItem text="Unlimited Custom Sections and Fields"></PricingItem>
                <PricingItem text="3 E-signatures using DocuSign"></PricingItem>
                <PricingItem text="Automated Due Date Feature"></PricingItem>
                <PricingItem text="Link Documents to Tasks"></PricingItem>
              </div>
            </div>
            <div className="pricing-backup-card2">
              <div className="pricing-backup-plan-item-header2">
                <span className="pricing-backup-text20">EZ Team</span>
                <span className="pricing-backup-text21">
                  <span>
                    A collaboration tool for Real Estate Organizations.
                  </span>
                  <br></br>
                </span>
                <div className="pricing-backup-container2">
                  <h1 className="pricing-backup-text24">{props.currency}</h1>
                  <h1 id="team_plan_price" className="pricing-backup-text25">
                    89
                  </h1>
                  <h1 className="pricing-backup-text26">{props.priceDetail}</h1>
                </div>
                <span className="pricing-backup-text27">{props.text4}</span>
                <a
                  href="https://app.ezcoordinator.com/register?subscription=17"
                  className="pricing-backup-link2"
                >
                  <div
                    id="ez_team_plan_button"
                    className="pricing-backup-get-started2 template-button"
                  >
                    <span className="pricing-backup-text28">
                      Choose EZ Team
                    </span>
                  </div>
                </a>
                <span className="pricing-backup-text29">
                  All features in EZ Pro, plus:
                </span>
              </div>
              <div className="pricing-backup-bullet-points2">
                <div className="pricing-backup-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="pricing-backup-icon"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="pricing-backup-text30">1 User + </span>
                  <select
                    id="team_plan_option"
                    name="team_plan_option"
                    className="pricing-backup-select"
                  >
                    <option value="1" selected>
                      5 Sub-users
                    </option>
                    <option value="2">12 Sub-users</option>
                    <option value="3">20 Sub-users</option>
                    <option value="4">40 Sub-users</option>
                  </select>
                </div>
                <PricingItem text="10 E-Signatures using DocuSign"></PricingItem>
                <PricingItem text="Customized User Permissions"></PricingItem>
                <PricingItem text="Assign Leads to Team Members"></PricingItem>
                <PricingItem text="Document Review / Audit"></PricingItem>
                <PricingItem text="Audit Logs"></PricingItem>
              </div>
              <span id="most_popular_button" className="pricing-backup-text31">
                Most Popular
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="pricing-backup-container4">
            <Script
              html={`<script>

</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .pricing-backup-pricing {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #5228f5;
          }
          .pricing-backup-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-backup-heading {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing-backup-text {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .pricing-backup-text01 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .pricing-backup-text02 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-backup-cards {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .pricing-backup-card {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .pricing-backup-plan-item-header {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-backup-text03 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-backup-text04 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-backup-container {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-backup-text05 {
            font-size: 1.25em;
          }
          .pricing-backup-text06 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-backup-text07 {
            font-size: 1.25em;
          }
          .pricing-backup-link {
            display: contents;
          }
          .pricing-backup-get-started {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-backup-text08 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-backup-text09 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-backup-bullet-points {
            width: 254px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-backup-card1 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .pricing-backup-plan-item-header1 {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-backup-text10 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-backup-text11 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-backup-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-backup-text14 {
            font-size: 1.25em;
          }
          .pricing-backup-text15 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-backup-text16 {
            font-size: 1.25em;
          }
          .pricing-backup-text17 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-backup-link1 {
            display: contents;
          }
          .pricing-backup-get-started1 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-backup-text18 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-backup-text19 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-backup-bullet-points1 {
            width: 276px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-backup-card2 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-backup-plan-item-header2 {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-backup-text20 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-backup-text21 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-backup-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-backup-text24 {
            font-size: 1.25em;
          }
          .pricing-backup-text25 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-backup-text26 {
            font-size: 1.25em;
          }
          .pricing-backup-text27 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-backup-link2 {
            display: contents;
          }
          .pricing-backup-get-started2 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .pricing-backup-text28 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-backup-text29 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-backup-bullet-points2 {
            width: 254px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-backup-point {
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .pricing-backup-icon {
            fill: #5228f5;
            width: 15px;
            height: 15px;
          }
          .pricing-backup-text30 {
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            margin-left: var(--dl-space-space-unit);
          }
          .pricing-backup-select {
            margin-left: 0px;
          }
          .pricing-backup-text31 {
            top: 25px;
            right: 25px;
            margin: auto;
            position: absolute;
            font-style: normal;
            font-weight: 600;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #f5aa28;
          }
          .pricing-backup-container4 {
            display: contents;
          }
          @media (max-width: 991px) {
            .pricing-backup-text02 {
              width: 100%;
              max-width: 600px;
            }
            .pricing-backup-cards {
              display: flex;
              flex-direction: column;
            }
            .pricing-backup-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-backup-text04 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-backup-text09 {
              font-size: 16px;
            }
            .pricing-backup-card1 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-backup-text11 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-backup-text19 {
              font-size: 16px;
            }
            .pricing-backup-card2 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-backup-text21 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-backup-text29 {
              font-size: 16px;
            }
          }
          @media (max-width: 767px) {
            .pricing-backup-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .pricing-backup-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-backup-text03 {
              font-size: 28px;
            }
            .pricing-backup-card1 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-backup-text10 {
              font-size: 28px;
            }
            .pricing-backup-card2 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-backup-text20 {
              font-size: 28px;
            }
          }
          @media (max-width: 479px) {
            .pricing-backup-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .pricing-backup-bullet-points {
              width: 370px;
            }
            .pricing-backup-bullet-points1 {
              width: 370px;
            }
          }
        `}
      </style>
    </>
  )
}

PricingBackup.defaultProps = {
  priceDetail1: '/month',
  text: 'Pricing for all kind of businesses',
  whatisincluded1: "What's included",
  text1:
    'Create next-generation solutions for small business customers with pricing options that accommodate everyone.',
  text4: '14-day free trial',
  text22: 'Pricing',
  priceDetail: '/month',
  currency2: '$',
  planBtnText1: 'Start for free',
  rootClassName: '',
  priceDetail2: '/month',
  currency: '$',
  planItemName1: 'Free',
  currency1: '$',
}

PricingBackup.propTypes = {
  priceDetail1: PropTypes.string,
  text: PropTypes.string,
  whatisincluded1: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text22: PropTypes.string,
  priceDetail: PropTypes.string,
  currency2: PropTypes.string,
  planBtnText1: PropTypes.string,
  rootClassName: PropTypes.string,
  priceDetail2: PropTypes.string,
  currency: PropTypes.string,
  planItemName1: PropTypes.string,
  currency1: PropTypes.string,
}

export default PricingBackup

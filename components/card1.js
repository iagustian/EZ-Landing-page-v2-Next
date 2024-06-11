import React, { useState } from 'react'

import PropTypes from 'prop-types'

import PricingItem from './pricing-item'

const Card1 = (props) => {
  const [checkedUser, setCheckedUser] = useState('5')
  return (
    <>
      <div className="card1-card">
        <div className="card1-plan-item-header">
          <span className="card1-text">EZ Team</span>
          <span className="card1-text01">
            <span>
              Perfect for small to medium-sized teams aiming to collaborate
              seamlessly
            </span>
            <br></br>
          </span>
          <div className="card1-container-slider">
            <div className="card1-container">
              <div className="card1-container1">
                <input
                  type="radio"
                  name="user"
                  value="89"
                  checked="true"
                  onClick={() => setCheckedUser('5')}
                  className="card1-radio"
                />
                <input
                  type="radio"
                  name="user"
                  value="119"
                  onClick={() => setCheckedUser('12')}
                  className="card1-radiobutton"
                />
                <input
                  type="radio"
                  name="user"
                  value="159"
                  onClick={() => setCheckedUser('20')}
                  className="card1-radiobutton1"
                />
                <input
                  type="radio"
                  name="user"
                  value="249"
                  onClick={() => setCheckedUser('40')}
                  className="card1-radiobutton2"
                />
                <input
                  type="radio"
                  name="user"
                  value="40+"
                  onClick={() => setCheckedUser('40+')}
                  className="card1-radiobutton3"
                />
              </div>
            </div>
            <div className="card1-container2">
              <span className="card1-text04">{props.text8}</span>
              <span className="card1-text05">{props.text9}</span>
              <span className="card1-text06">{props.text10}</span>
              <span>{props.text6}</span>
              <span className="card1-text08">{props.text11}</span>
            </div>
          </div>
          <div className="card1-container-sub-user">
            <span className="card1-text09">1 User + </span>
            <span className="card1-text10">{checkedUser}</span>
            <span className="card1-text11">Sub Users</span>
          </div>
          <div className="card1-container-price">
            {checkedUser === '5' && (
              <div className="card1-container3">
                <h1 className="card1-text12">{props.currency1}</h1>
                <h1 id="team_plan_price" className="card1-heading">
                  890
                </h1>
                <h1 className="card1-text13">{props.yearlyLabel1}</h1>
              </div>
            )}
            {checkedUser === '12' && (
              <div className="card1-container4">
                <h1 className="card1-text14">{props.currency1}</h1>
                <h1 id="team_plan_price_12" className="card1-heading1">
                  <span className="card1-text15">1190</span>
                  <br></br>
                </h1>
                <h1 className="card1-text17">{props.yearlyLabel1}</h1>
              </div>
            )}
            {checkedUser === '20' && (
              <div className="card1-container5">
                <h1 className="card1-text18">{props.currency1}</h1>
                <h1 id="team_plan_price_20" className="card1-heading2">
                  <span className="card1-text19">1590</span>
                  <br></br>
                </h1>
                <h1 className="card1-text21">{props.yearlyLabel1}</h1>
              </div>
            )}
            {checkedUser === '40' && (
              <div className="card1-container6">
                <h1 className="card1-text22">{props.currency1}</h1>
                <h1 id="team_plan_price_40" className="card1-heading3">
                  2490
                </h1>
                <h1 className="card1-text23">{props.yearlyLabel1}</h1>
              </div>
            )}
          </div>
          <span className="card1-text24">14-day unlimited free trial</span>
          <div className="card1-container7">
            {checkedUser === '5' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=13"
                target="_blank"
                rel="noreferrer noopener"
                className="card1-link"
              >
                <div
                  id="ez_team_plan_button_1"
                  className="card1-get-started template-button"
                >
                  <span className="card1-text25">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '12' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=13"
                target="_blank"
                rel="noreferrer noopener"
                className="card1-link1"
              >
                <div
                  id="ez_team_plan_button_2"
                  className="card1-get-started1 template-button"
                >
                  <span className="card1-text26">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '40+' && (
              <div
                id="ez_team_plan_button_40plus_year"
                className="card1-get-started2 template-button"
              >
                <span className="card1-text27">Choose EZ Team</span>
              </div>
            )}
            {checkedUser === '20' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=13"
                target="_blank"
                rel="noreferrer noopener"
                className="card1-link2"
              >
                <div
                  id="ez_team_plan_button_2_year"
                  className="card1-get-started3 template-button"
                >
                  <span className="card1-text28">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '40' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=13"
                target="_blank"
                rel="noreferrer noopener"
                className="card1-link3"
              >
                <div
                  id="ez_team_plan_button_40_year"
                  className="card1-get-started4 template-button"
                >
                  <span className="card1-text29">Choose EZ Team</span>
                </div>
              </a>
            )}
          </div>
          <span className="card1-text30">
            <span className="card1-text31">
              What&apos;s included:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="card1-text32"></br>
            <br></br>
            <span>All features in EZ Pro, plus:</span>
          </span>
        </div>
        <div className="card1-bullet-points">
          <PricingItem text="10 E-Signatures using DocuSign"></PricingItem>
          <PricingItem text="Customized User Permissions"></PricingItem>
          <PricingItem text="Assign Leads to Team Members"></PricingItem>
          <PricingItem text="Document Review / Audit"></PricingItem>
          <PricingItem text="Audit Logs"></PricingItem>
          <PricingItem text="Personalized Set-Up and Data Migration/Import"></PricingItem>
        </div>
        <span id="most_popular_button" className="card1-text35">
          Most Popular
        </span>
      </div>
      <style jsx>
        {`
          .card1-card {
            flex: 1;
            width: 440px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 50px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .card1-plan-item-header {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .card1-text {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .card1-text01 {
            color: rgb(0, 0, 0);
            min-height: 90px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card1-container-slider {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card1-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .card1-container1 {
            width: 100%;
            height: 15px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .card1-radio {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card1-radiobutton {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card1-radiobutton1 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card1-radiobutton2 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card1-radiobutton3 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card1-container2 {
            height: 28px;
            display: flex;
            position: relative;
            align-self: stretch;
            justify-content: space-between;
          }
          .card1-text04 {
            top: 0px;
            left: 55px;
            position: absolute;
          }
          .card1-text05 {
            top: 0px;
            left: 115px;
            position: absolute;
          }
          .card1-text06 {
            top: 0px;
            left: 173px;
            position: absolute;
          }
          .card1-text08 {
            top: 0px;
            right: -10px;
            position: absolute;
          }
          .card1-container-sub-user {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card1-text09 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .card1-text10 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .card1-text11 {
            color: rgb(0, 0, 0);
            margin-left: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .card1-container-price {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card1-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card1-text12 {
            font-size: 1.25em;
          }
          .card1-heading {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card1-text13 {
            font-size: 1.25em;
          }
          .card1-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card1-text14 {
            font-size: 1.25em;
          }
          .card1-heading1 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card1-text17 {
            font-size: 1.25em;
          }
          .card1-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card1-text18 {
            font-size: 1.25em;
          }
          .card1-heading2 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card1-text21 {
            font-size: 1.25em;
          }
          .card1-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card1-text22 {
            font-size: 1.25em;
          }
          .card1-heading3 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card1-text23 {
            font-size: 1.25em;
          }
          .card1-text24 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card1-container7 {
            width: 100%;
            height: 32px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .card1-link {
            display: contents;
          }
          .card1-get-started {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card1-text25 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card1-link1 {
            display: contents;
          }
          .card1-get-started1 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card1-text26 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card1-get-started2 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card1-text27 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card1-link2 {
            display: contents;
          }
          .card1-get-started3 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card1-text28 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card1-link3 {
            display: contents;
          }
          .card1-get-started4 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card1-text29 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card1-text30 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .card1-bullet-points {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card1-text35 {
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
          @media (max-width: 991px) {
            .card1-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .card1-text01 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .card1-text30 {
              line-height: 27px;
            }
            .card1-text31 {
              color: var(--dl-color-gray-500);
            }
            .card1-text32 {
              color: var(--dl-color-gray-500);
            }
          }
          @media (max-width: 767px) {
            .card1-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .card1-text {
              font-size: 28px;
            }
          }
          @media (max-width: 479px) {
            .card1-container-slider {
              position: relative;
            }
            .card1-heading {
              font-size: 2em;
            }
            .card1-heading1 {
              font-size: 2em;
            }
            .card1-text15 {
              font-size: 2em;
            }
            .card1-heading2 {
              font-size: 2em;
            }
            .card1-text19 {
              font-size: 2em;
            }
            .card1-heading3 {
              font-size: 2em;
            }
          }
        `}
      </style>
    </>
  )
}

Card1.defaultProps = {
  yearlyLabel1: '/year',
  text11: '40+',
  text9: '20',
  text10: '40',
  sliderRailDefaultSrc: '/external/sliderraildefaulti130-ksiy-200h.png',
  radioChecked: '',
  sliderRailDefaultSrc11: '/external/sliderraildefaulti130-3skr-200h.png',
  sliderRailDefaultAlt: 'SliderRailDefaultI130',
  text6: '5',
  text8: '12',
  sliderRailDefaultAlt11: 'SliderRailDefaultI130',
  currency1: '$',
}

Card1.propTypes = {
  yearlyLabel1: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  sliderRailDefaultSrc: PropTypes.string,
  radioChecked: PropTypes.string,
  sliderRailDefaultSrc11: PropTypes.string,
  sliderRailDefaultAlt: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  sliderRailDefaultAlt11: PropTypes.string,
  currency1: PropTypes.string,
}

export default Card1

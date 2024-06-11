import React, { useState } from 'react'

import PropTypes from 'prop-types'

import PricingItem from './pricing-item'

const Card2 = (props) => {
  const [checkedUser, setCheckedUser] = useState('5')
  return (
    <>
      <div className="card2-card">
        <div className="card2-plan-item-header">
          <span className="card2-text">EZ Team</span>
          <span className="card2-text01">
            <span>
              Perfect for small to medium-sized teams aiming to collaborate
              seamlessly
            </span>
            <br></br>
          </span>
          <div className="card2-container-slider">
            <div className="card2-container">
              <div className="card2-container1">
                <input
                  type="radio"
                  name="user"
                  value="89"
                  checked="true"
                  onClick={() => setCheckedUser('5')}
                  className="card2-radio"
                />
                <input
                  type="radio"
                  name="user"
                  value="119"
                  onClick={() => setCheckedUser('12')}
                  className="card2-radiobutton"
                />
                <input
                  type="radio"
                  name="user"
                  value="159"
                  onClick={() => setCheckedUser('20')}
                  className="card2-radiobutton1"
                />
                <input
                  type="radio"
                  name="user"
                  value="249"
                  onClick={() => setCheckedUser('40')}
                  className="card2-radiobutton2"
                />
                <input
                  type="radio"
                  name="user"
                  value="40+"
                  onClick={() => setCheckedUser('40+')}
                  className="card2-radiobutton3"
                />
              </div>
              <div className="card2-container2">
                <span className="card2-text04">{props.text8}</span>
                <span className="card2-text05">{props.text9}</span>
                <span className="card2-text06">{props.text10}</span>
                <span>{props.text6}</span>
                <span className="card2-text08">{props.text11}</span>
              </div>
            </div>
            {checkedUser === '5' && (
              <img
                alt={props.sliderRailDefaultAlt1}
                src={props.sliderRailDefaultSrc}
                className="card2-slider-rail-default"
              />
            )}
            {checkedUser === '12' && (
              <img
                alt={props.sliderRailDefaultAlt11}
                src={props.sliderRailDefaultSrc11}
                className="card2-slider-rail-on1"
              />
            )}
            {checkedUser === '20' && (
              <img
                alt={props.sliderRailDefaultAlt11}
                src={props.sliderRailDefaultSrc11}
                className="card2-slider-rail-on2"
              />
            )}
            {checkedUser === '40' && (
              <img
                alt={props.sliderRailDefaultAlt11}
                src={props.sliderRailDefaultSrc11}
                className="card2-slider-rail-on3"
              />
            )}
            {checkedUser === '40+' && (
              <img
                alt={props.sliderRailOn4Alt}
                src={props.sliderRailDefaultSrc11}
                className="card2-slider-rail-on4"
              />
            )}
          </div>
          <div className="card2-container-sub-user">
            <span className="card2-text09">1 User + </span>
            <span className="card2-text10">{checkedUser}</span>
            <span className="card2-text11">Sub Users</span>
          </div>
          <div className="card2-container-price">
            {checkedUser === '5' && (
              <div className="card2-container3">
                <h1 className="card2-text12">{props.currency1}</h1>
                <h1 id="team_plan_price" className="card2-heading">
                  89
                </h1>
                <h1 className="card2-text13">{props.priceDetail1}</h1>
              </div>
            )}
            {checkedUser === '12' && (
              <div className="card2-container4">
                <h1 className="card2-text14">{props.currency1}</h1>
                <h1 id="team_plan_price_12" className="card2-heading1">
                  <span className="card2-text15">119</span>
                  <br></br>
                </h1>
                <h1 className="card2-text17">{props.priceDetail1}</h1>
              </div>
            )}
            {checkedUser === '20' && (
              <div className="card2-container5">
                <h1 className="card2-text18">{props.currency1}</h1>
                <h1 id="team_plan_price_20" className="card2-heading2">
                  <span className="card2-text19">159</span>
                  <br></br>
                </h1>
                <h1 className="card2-text21">{props.priceDetail1}</h1>
              </div>
            )}
            {checkedUser === '40' && (
              <div className="card2-container6">
                <h1 className="card2-text22">{props.currency1}</h1>
                <h1 id="team_plan_price_40" className="card2-heading3">
                  249
                </h1>
                <h1 className="card2-text23">{props.priceDetail1}</h1>
              </div>
            )}
          </div>
          <span className="card2-text24">14-day unlimited free trial</span>
          <div className="card2-container7">
            {checkedUser === '5' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=13"
                target="_blank"
                rel="noreferrer noopener"
                className="card2-link"
              >
                <div
                  id="ez_team_plan_button"
                  className="card2-get-started template-button"
                >
                  <span className="card2-text25">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '12' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=14"
                target="_blank"
                rel="noreferrer noopener"
                className="card2-link1"
              >
                <div
                  id="ez_team_plan_button_12"
                  className="card2-get-started1 template-button"
                >
                  <span className="card2-text26">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '20' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=15"
                target="_blank"
                rel="noreferrer noopener"
                className="card2-link2"
              >
                <div
                  id="ez_team_plan_button_20"
                  className="card2-get-started2 template-button"
                >
                  <span className="card2-text27">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '40' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=16"
                target="_blank"
                rel="noreferrer noopener"
                className="card2-link3"
              >
                <div
                  id="ez_team_plan_button_40"
                  className="card2-get-started3 template-button"
                >
                  <span className="card2-text28">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '40+' && (
              <a
                href="https://tally.so/r/woAJlx"
                target="_blank"
                rel="noreferrer noopener"
                className="card2-link4"
              >
                <div
                  id="ez_team_plan_button_40plus"
                  className="card2-get-started4 template-button"
                >
                  <span className="card2-text29">Contact Sales</span>
                </div>
              </a>
            )}
          </div>
          <span className="card2-text30">
            <span className="card2-text31">
              What&apos;s included:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="card2-text32"></br>
            <br></br>
            <span>All features in EZ Pro, plus:</span>
          </span>
        </div>
        <div className="card2-bullet-points">
          <PricingItem text="10 E-Signatures using DocuSign"></PricingItem>
          <PricingItem text="Customized User Permissions"></PricingItem>
          <PricingItem text="Assign Leads to Team Members"></PricingItem>
          <PricingItem text="Document Review / Audit"></PricingItem>
          <PricingItem text="Audit Logs"></PricingItem>
          <PricingItem text="Personalized Set-Up and Data Migration/Import"></PricingItem>
        </div>
        <span id="most_popular_button" className="card2-text35">
          Most Popular
        </span>
      </div>
      <style jsx>
        {`
          .card2-card {
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
          .card2-plan-item-header {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .card2-text {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .card2-text01 {
            color: rgb(0, 0, 0);
            min-height: 90px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card2-container-slider {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card2-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .card2-container1 {
            width: 100%;
            height: 15px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .card2-radio {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card2-radiobutton {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card2-radiobutton1 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card2-radiobutton2 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card2-radiobutton3 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card2-container2 {
            height: 28px;
            display: flex;
            position: relative;
            align-self: stretch;
            justify-content: space-between;
          }
          .card2-text04 {
            top: 0px;
            left: 55px;
            position: absolute;
          }
          .card2-text05 {
            top: 0px;
            left: 115px;
            position: absolute;
          }
          .card2-text06 {
            top: 0px;
            left: 173px;
            position: absolute;
          }
          .card2-text08 {
            top: 0px;
            right: -10px;
            position: absolute;
          }
          .card2-slider-rail-default {
            top: 172px;
            left: 2px;
            width: 240px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .card2-slider-rail-on1 {
            top: 172px;
            left: 8px;
            width: 60px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .card2-slider-rail-on2 {
            top: 172px;
            left: 6px;
            width: 120px;
            height: 4px;
            position: absolute;
          }
          .card2-slider-rail-on3 {
            top: 172px;
            left: 8px;
            width: 180px;
            height: 4px;
            position: absolute;
          }
          .card2-slider-rail-on4 {
            top: 172px;
            right: 2px;
            width: 240px;
            height: 4px;
            position: absolute;
          }
          .card2-container-sub-user {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card2-text09 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .card2-text10 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .card2-text11 {
            color: rgb(0, 0, 0);
            margin-left: 6px;
            margin-bottom: 0px;
          }
          .card2-container-price {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card2-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card2-text12 {
            font-size: 1.25em;
          }
          .card2-heading {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card2-text13 {
            font-size: 1.25em;
          }
          .card2-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card2-text14 {
            font-size: 1.25em;
          }
          .card2-heading1 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card2-text17 {
            font-size: 1.25em;
          }
          .card2-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card2-text18 {
            font-size: 1.25em;
          }
          .card2-heading2 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card2-text21 {
            font-size: 1.25em;
          }
          .card2-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card2-text22 {
            font-size: 1.25em;
          }
          .card2-heading3 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card2-text23 {
            font-size: 1.25em;
          }
          .card2-text24 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card2-container7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card2-link {
            display: contents;
          }
          .card2-get-started {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card2-text25 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card2-link1 {
            display: contents;
          }
          .card2-get-started1 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card2-text26 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card2-link2 {
            display: contents;
          }
          .card2-get-started2 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card2-text27 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card2-link3 {
            display: contents;
          }
          .card2-get-started3 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card2-text28 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card2-link4 {
            display: contents;
          }
          .card2-get-started4 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card2-text29 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card2-text30 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .card2-bullet-points {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card2-text35 {
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
            .card2-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .card2-text01 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .card2-text30 {
              line-height: 27px;
            }
            .card2-text31 {
              color: var(--dl-color-gray-500);
            }
            .card2-text32 {
              color: var(--dl-color-gray-500);
            }
          }
          @media (max-width: 767px) {
            .card2-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .card2-text {
              font-size: 28px;
            }
          }
          @media (max-width: 479px) {
            .card2-heading {
              font-size: 2em;
            }
            .card2-heading1 {
              font-size: 2em;
            }
            .card2-text15 {
              font-size: 2em;
            }
            .card2-heading2 {
              font-size: 2em;
            }
            .card2-text19 {
              font-size: 2em;
            }
            .card2-heading3 {
              font-size: 2em;
            }
          }
        `}
      </style>
    </>
  )
}

Card2.defaultProps = {
  sliderRailDefaultAlt1: 'SliderRailDefaultI130',
  text11: '40+',
  text9: '20',
  sliderRailOn4Alt: 'SliderRailDefaultI130',
  text10: '40',
  sliderRailDefaultSrc: '/external/sliderraildefaulti130-ksiy-200h.png',
  radioChecked: '',
  sliderRailDefaultSrc11: '/external/sliderraildefaulti130-3skr-200h.png',
  sliderRailDefaultAlt: 'SliderRailDefaultI130',
  text6: '5',
  text8: '12',
  sliderRailDefaultAlt11: 'SliderRailDefaultI130',
  currency1: '$',
  priceDetail1: '/month',
}

Card2.propTypes = {
  sliderRailDefaultAlt1: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  sliderRailOn4Alt: PropTypes.string,
  text10: PropTypes.string,
  sliderRailDefaultSrc: PropTypes.string,
  radioChecked: PropTypes.string,
  sliderRailDefaultSrc11: PropTypes.string,
  sliderRailDefaultAlt: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  sliderRailDefaultAlt11: PropTypes.string,
  currency1: PropTypes.string,
  priceDetail1: PropTypes.string,
}

export default Card2

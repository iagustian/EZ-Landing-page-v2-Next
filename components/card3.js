import React, { useState } from 'react'

import PropTypes from 'prop-types'

import PricingItem from './pricing-item'

const Card3 = (props) => {
  const [checkedUser, setCheckedUser] = useState('5')
  return (
    <>
      <div className="card3-card">
        <div className="card3-plan-item-header">
          <span className="card3-text">EZ Team</span>
          <span className="card3-text01">
            <span>
              Perfect for small to medium-sized teams aiming to collaborate
              seamlessly
            </span>
            <br></br>
          </span>
          <div className="card3-container-slider">
            <div className="card3-container">
              <div className="card3-container1">
                <input
                  type="radio"
                  name="user"
                  value="89"
                  checked="true"
                  onClick={() => setCheckedUser('5')}
                  className="card3-radio"
                />
                <input
                  type="radio"
                  name="user"
                  value="119"
                  onClick={() => setCheckedUser('12')}
                  className="card3-radiobutton"
                />
                <input
                  type="radio"
                  name="user"
                  value="159"
                  onClick={() => setCheckedUser('20')}
                  className="card3-radiobutton1"
                />
                <input
                  type="radio"
                  name="user"
                  value="249"
                  onClick={() => setCheckedUser('40')}
                  className="card3-radiobutton2"
                />
                <input
                  type="radio"
                  name="user"
                  value="40+"
                  onClick={() => setCheckedUser('40+')}
                  className="card3-radiobutton3"
                />
              </div>
              <div className="card3-container2">
                <span className="card3-text04">{props.text81}</span>
                <span className="card3-text05">{props.text91}</span>
                <span className="card3-text06">{props.text101}</span>
                <span>{props.text61}</span>
                <span className="card3-text08">{props.text111}</span>
              </div>
            </div>
            {checkedUser === '5' && (
              <img
                alt={props.sliderRailDefaultAlt}
                src={props.sliderRailDefaultSrc2}
                className="card3-slider-rail-default"
              />
            )}
            {checkedUser === '12' && (
              <img
                alt={props.sliderRailOn1Alt}
                src="/external/sliderraildefaulti130-3skr-200h-200h.png"
                className="card3-slider-rail-on1"
              />
            )}
            {checkedUser === '20' && (
              <img
                alt={props.sliderRailOn2Alt}
                src="/external/sliderraildefaulti130-3skr-200h-200h.png"
                className="card3-slider-rail-on2"
              />
            )}
            {checkedUser === '40' && (
              <img
                alt={props.sliderRailOn3Alt}
                src="/external/sliderraildefaulti130-3skr-200h-200h.png"
                className="card3-slider-rail-on3"
              />
            )}
            {checkedUser === '40+' && (
              <img
                alt={props.sliderRailOn4Alt}
                src={props.sliderRailDefaultSrc11}
                className="card3-slider-rail-on4"
              />
            )}
          </div>
          <div className="card3-container-sub-user">
            <span className="card3-text09">1 User + </span>
            <span className="card3-text10">{checkedUser}</span>
            <span className="card3-text11">Sub Users</span>
          </div>
          <div className="card3-container-price">
            {checkedUser === '5' && (
              <div className="card3-container3">
                <h1 className="card3-text12">{props.currency12}</h1>
                <h1 id="team_plan_price_40" className="card3-heading">
                  890
                </h1>
                <h1 className="card3-text13">{props.yearslash}</h1>
                <div className="card3-container4">
                  <h1 className="card3-text14">{props.currency12}</h1>
                  <h1 className="card3-heading1">1068</h1>
                </div>
              </div>
            )}
            {checkedUser === '12' && (
              <div className="card3-container5">
                <h1 className="card3-text15">{props.currency12}</h1>
                <h1 id="team_plan_price_40" className="card3-heading2">
                  1190
                </h1>
                <h1 className="card3-text16">{props.yearslash}</h1>
                <div className="card3-container-strike">
                  <h1 className="card3-text17">{props.currency12}</h1>
                  <h1 className="card3-heading3">1428</h1>
                </div>
              </div>
            )}
            {checkedUser === '20' && (
              <div className="card3-container6">
                <h1 className="card3-text18">{props.currency12}</h1>
                <h1 id="team_plan_price_40" className="card3-heading4">
                  1590
                </h1>
                <h1 className="card3-text19">{props.yearslash}</h1>
                <div className="card3-container-strike1">
                  <h1 className="card3-text20">{props.currency12}</h1>
                  <h1 className="card3-heading5">1908</h1>
                </div>
              </div>
            )}
            {checkedUser === '40' && (
              <div className="card3-container7">
                <h1 className="card3-text21">{props.currency12}</h1>
                <h1 id="team_plan_price_40" className="card3-heading6">
                  2490
                </h1>
                <h1 className="card3-text22">{props.yearslash}</h1>
                <div className="card3-container-strike2">
                  <h1 className="card3-text23">{props.currency12}</h1>
                  <h1 className="card3-heading7">2988</h1>
                </div>
              </div>
            )}
          </div>
          <span className="card3-text24">14-day unlimited free trial</span>
          <div className="card3-container8">
            {checkedUser === '5' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=ez-team-5-annual"
                target="_blank"
                rel="noreferrer noopener"
                className="card3-link"
              >
                <div
                  id="ez_team_plan_button"
                  className="card3-get-started template-button"
                >
                  <span className="card3-text25">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '12' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=ez-team-12-annual"
                target="_blank"
                rel="noreferrer noopener"
                className="card3-link1"
              >
                <div
                  id="ez_team_plan_button_12"
                  className="card3-get-started1 template-button"
                >
                  <span className="card3-text26">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '20' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=ez-team-20-annual"
                target="_blank"
                rel="noreferrer noopener"
                className="card3-link2"
              >
                <div
                  id="ez_team_plan_button_20"
                  className="card3-get-started2 template-button"
                >
                  <span className="card3-text27">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '40' && (
              <a
                href="https://app.ezcoordinator.com/register?subscription=ez-team-40-annual"
                target="_blank"
                rel="noreferrer noopener"
                className="card3-link3"
              >
                <div
                  id="ez_team_plan_button_40"
                  className="card3-get-started3 template-button"
                >
                  <span className="card3-text28">Choose EZ Team</span>
                </div>
              </a>
            )}
            {checkedUser === '40+' && (
              <a
                href="https://tally.so/r/woAJlx"
                target="_blank"
                rel="noreferrer noopener"
                className="card3-link4"
              >
                <div
                  id="ez_team_plan_button_40plus"
                  className="card3-get-started4 template-button"
                >
                  <span className="card3-text29">Contact Sales</span>
                </div>
              </a>
            )}
          </div>
          <span className="card3-text30">
            <span className="card3-text31">
              What&apos;s included:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="card3-text32"></br>
            <br></br>
            <span>All features in EZ Pro, plus:</span>
          </span>
        </div>
        <div className="card3-bullet-points">
          <PricingItem text="10 E-Signatures using DocuSign"></PricingItem>
          <PricingItem text="Customized User Permissions"></PricingItem>
          <PricingItem text="Assign Leads to Team Members"></PricingItem>
          <PricingItem text="Document Review / Audit"></PricingItem>
          <PricingItem text="Audit Logs"></PricingItem>
          <PricingItem text="Personalized Set-Up and Data Migration/Import"></PricingItem>
        </div>
        <span id="most_popular_button" className="card3-text35">
          Most Popular
        </span>
      </div>
      <style jsx>
        {`
          .card3-card {
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
          .card3-plan-item-header {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .card3-text {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .card3-text01 {
            color: rgb(0, 0, 0);
            min-height: 90px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card3-container-slider {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card3-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .card3-container1 {
            width: 100%;
            height: 15px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .card3-radio {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card3-radiobutton {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card3-radiobutton1 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card3-radiobutton2 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card3-radiobutton3 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .card3-container2 {
            height: 28px;
            display: flex;
            position: relative;
            align-self: stretch;
            justify-content: space-between;
          }
          .card3-text04 {
            top: 0px;
            left: 55px;
            position: absolute;
          }
          .card3-text05 {
            top: 0px;
            left: 115px;
            position: absolute;
          }
          .card3-text06 {
            top: 0px;
            left: 173px;
            position: absolute;
          }
          .card3-text08 {
            top: 0px;
            right: -10px;
            position: absolute;
          }
          .card3-slider-rail-default {
            top: 172px;
            left: 2px;
            width: 240px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .card3-slider-rail-on1 {
            top: 172px;
            left: 8px;
            width: 60px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .card3-slider-rail-on2 {
            top: 172px;
            left: 6px;
            width: 120px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .card3-slider-rail-on3 {
            top: 172px;
            left: 8px;
            width: 180px;
            height: 4px;
            position: absolute;
          }
          .card3-slider-rail-on4 {
            top: 172px;
            right: 2px;
            width: 240px;
            height: 4px;
            position: absolute;
          }
          .card3-container-sub-user {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card3-text09 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .card3-text10 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .card3-text11 {
            color: rgb(0, 0, 0);
            margin-left: 6px;
            margin-bottom: 0px;
          }
          .card3-container-price {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card3-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card3-text12 {
            font-size: 1.25em;
          }
          .card3-heading {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card3-text13 {
            font-size: 1.25em;
          }
          .card3-container4 {
            display: flex;
            opacity: 0.5;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: line-through;
          }
          .card3-text14 {
            font-size: 1em;
          }
          .card3-heading1 {
            font-size: 1.25em;
          }
          .card3-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card3-text15 {
            font-size: 1.25em;
          }
          .card3-heading2 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card3-text16 {
            font-size: 1.25em;
          }
          .card3-container-strike {
            display: flex;
            opacity: 0.5;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: line-through;
          }
          .card3-text17 {
            font-size: 1em;
          }
          .card3-heading3 {
            font-size: 1.25em;
          }
          .card3-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card3-text18 {
            font-size: 1.25em;
          }
          .card3-heading4 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card3-text19 {
            font-size: 1.25em;
          }
          .card3-container-strike1 {
            display: flex;
            opacity: 0.5;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: line-through;
          }
          .card3-text20 {
            font-size: 1em;
          }
          .card3-heading5 {
            font-size: 1.25em;
          }
          .card3-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card3-text21 {
            font-size: 1.25em;
          }
          .card3-heading6 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .card3-text22 {
            font-size: 1.25em;
          }
          .card3-container-strike2 {
            display: flex;
            opacity: 0.5;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: line-through;
          }
          .card3-text23 {
            font-size: 1em;
          }
          .card3-heading7 {
            font-size: 1.25em;
          }
          .card3-text24 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .card3-container8 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card3-link {
            display: contents;
          }
          .card3-get-started {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card3-text25 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card3-link1 {
            display: contents;
          }
          .card3-get-started1 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card3-text26 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card3-link2 {
            display: contents;
          }
          .card3-get-started2 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card3-text27 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card3-link3 {
            display: contents;
          }
          .card3-get-started3 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card3-text28 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card3-link4 {
            display: contents;
          }
          .card3-get-started4 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .card3-text29 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .card3-text30 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .card3-bullet-points {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card3-text35 {
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
            .card3-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .card3-text01 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .card3-text30 {
              line-height: 27px;
            }
            .card3-text31 {
              color: var(--dl-color-gray-500);
            }
            .card3-text32 {
              color: var(--dl-color-gray-500);
            }
          }
          @media (max-width: 767px) {
            .card3-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .card3-text {
              font-size: 28px;
            }
          }
          @media (max-width: 479px) {
            .card3-heading {
              font-size: 2em;
            }
            .card3-heading1 {
              font-size: 2em;
            }
            .card3-heading2 {
              font-size: 2em;
            }
            .card3-heading3 {
              font-size: 2em;
            }
            .card3-heading4 {
              font-size: 2em;
            }
            .card3-heading5 {
              font-size: 2em;
            }
            .card3-heading6 {
              font-size: 2em;
            }
            .card3-heading7 {
              font-size: 2em;
            }
          }
        `}
      </style>
    </>
  )
}

Card3.defaultProps = {
  sliderRailDefaultSrc2: '/external/sliderraildefaulti130-ksiy-200h.png',
  priceDetail1: '/month',
  sliderRailDefaultAlt: 'SliderRailDefaultI130',
  sliderRailDefaultSrc11: '/external/sliderraildefaulti130-3skr-200h.png',
  currency11: '$',
  text91: '20',
  currency12: '$',
  radioChecked1: '',
  priceDetail12: '/month',
  priceDetail11: '/month',
  sliderRailOn1Alt: '',
  currency1: '$',
  yearslash: '/year',
  text81: '12',
  sliderRailOn2Alt: '',
  sliderRailOn4Alt: 'SliderRailDefaultI130',
  text101: '40',
  text61: '5',
  sliderRailOn3Alt: '',
  text111: '40+',
}

Card3.propTypes = {
  sliderRailDefaultSrc2: PropTypes.string,
  priceDetail1: PropTypes.string,
  sliderRailDefaultAlt: PropTypes.string,
  sliderRailDefaultSrc11: PropTypes.string,
  currency11: PropTypes.string,
  text91: PropTypes.string,
  currency12: PropTypes.string,
  radioChecked1: PropTypes.string,
  priceDetail12: PropTypes.string,
  priceDetail11: PropTypes.string,
  sliderRailOn1Alt: PropTypes.string,
  currency1: PropTypes.string,
  yearslash: PropTypes.string,
  text81: PropTypes.string,
  sliderRailOn2Alt: PropTypes.string,
  sliderRailOn4Alt: PropTypes.string,
  text101: PropTypes.string,
  text61: PropTypes.string,
  sliderRailOn3Alt: PropTypes.string,
  text111: PropTypes.string,
}

export default Card3

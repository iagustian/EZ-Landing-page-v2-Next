import React, { useState } from 'react'

import PropTypes from 'prop-types'

import PricingItem from './pricing-item'
import Card2 from './card2'
import Card3 from './card3'

const Pricing = (props) => {
  const [checkedUser, setCheckedUser] = useState('5')
  const [modalQuote, setModalQuote] = useState(false)
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <section className={`pricing-pricing ${props.rootClassName} `}>
        <div className="pricing-centered-container">
          <div className="pricing-heading">
            <span className="pricing-text">{props.text22}</span>
            <span className="pricing-text01 title">
              Choose the Perfect Plan for Your Real Estate Success
            </span>
            <span className="pricing-text02">
              With EZCoordinator, you have flexible options to choose from:
            </span>
            <div className="pricing-container">
              <div className="pricing-tabs">
                {isMonthly && (
                  <button className="pricing-button thq-button-filled">
                    <span className="pricing-text03 thq-body-small">
                      <span>Monthly</span>
                      <br></br>
                    </span>
                  </button>
                )}
                {!isMonthly && (
                  <button
                    onClick={() => setIsMonthly(true)}
                    className="pricing-button1 thq-button-outline"
                  >
                    <span className="pricing-text06 thq-body-small">
                      Monthly
                    </span>
                  </button>
                )}
                {!isMonthly && (
                  <button className="pricing-button2 thq-button-filled">
                    <span className="thq-body-small">Annually</span>
                  </button>
                )}
                {isMonthly && (
                  <button
                    onClick={() => setIsMonthly(false)}
                    className="pricing-button3 thq-button-outline"
                  >
                    <span className="pricing-text08 thq-body-small">
                      <span>Annually</span>
                      <br></br>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="pricing-container01">
            {isMonthly && (
              <div className="pricing-pricing-group-monthly">
                <div className="pricing-card">
                  <div className="pricing-plan-item-header">
                    <span className="pricing-text11">EZ Starter</span>
                    <span className="pricing-text12">
                      <span>
                        Ideal for individuals looking to get started with
                        essential features at an affordable rate
                      </span>
                      <br></br>
                    </span>
                    <div className="pricing-container02">
                      <h1 className="pricing-text15">{props.currency2}</h1>
                      <h1 className="pricing-text16">19</h1>
                      <h1 className="pricing-text17">{props.priceDetail2}</h1>
                    </div>
                    <span className="pricing-text18">
                      14-day unlimited free trial
                    </span>
                    <a
                      href="https://app.ezcoordinator.com/register?subscription=18"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="pricing-link"
                    >
                      <div className="pricing-get-started template-button">
                        <span className="pricing-text19">Get Started!</span>
                      </div>
                    </a>
                    <span className="pricing-text20">
                      What&apos;s included:
                    </span>
                  </div>
                  <div className="pricing-bullet-points">
                    <PricingItem text="1 User"></PricingItem>
                    <PricingItem text="10 Active Transactions"></PricingItem>
                    <PricingItem text="100 Prospects"></PricingItem>
                    <PricingItem text="5GB of Document Storage"></PricingItem>
                    <PricingItem text="2 Custom Sections and Fields"></PricingItem>
                    <PricingItem text="Powerful and Extensive Customization"></PricingItem>
                    <PricingItem text="Unlimited Task Templates"></PricingItem>
                  </div>
                </div>
                <div className="pricing-card1">
                  <div className="pricing-plan-item-header1">
                    <span className="pricing-text21">EZ Pro</span>
                    <span className="pricing-text22">
                      Tailored for individuals seeking enhanced transaction and
                      task management without limit
                    </span>
                    <div className="pricing-container03">
                      <h1 className="pricing-text23">{props.currency21}</h1>
                      <h1 className="pricing-text24">39</h1>
                      <h1 className="pricing-text25">{props.priceDetail21}</h1>
                    </div>
                    <span className="pricing-text26">
                      14-day unlimited free trial
                    </span>
                    <a
                      href="https://app.ezcoordinator.com/register?subscription=17"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="pricing-link1"
                    >
                      <div className="pricing-get-started1 template-button">
                        <span className="pricing-text27">Try EZ Pro!</span>
                      </div>
                    </a>
                    <span className="pricing-text28">
                      What&apos;s included:
                    </span>
                  </div>
                  <div className="pricing-bullet-points1">
                    <PricingItem text="1 User"></PricingItem>
                    <PricingItem text="Unlimited Transactions"></PricingItem>
                    <PricingItem text="Unlimited Prospects"></PricingItem>
                    <PricingItem text="Unlimited Document Uploads"></PricingItem>
                    <PricingItem text="Unlimited Emails (Gmail, MS 365, and SMTP)"></PricingItem>
                    <PricingItem text="Unlimited Task Templates"></PricingItem>
                    <PricingItem text="Unlimited Custom Sections and Fields"></PricingItem>
                    <PricingItem text="3 E-signatures using DocuSign"></PricingItem>
                    <PricingItem text="Automated Due Date Feature"></PricingItem>
                    <PricingItem text="Link Documents to Tasks"></PricingItem>
                    <PricingItem text="Powerful and Extensive Customization"></PricingItem>
                  </div>
                </div>
                <div className="pricing-card2">
                  <div className="pricing-plan-item-header2">
                    <span className="pricing-text29">EZ Team</span>
                    <span className="pricing-text30">
                      <span>
                        Perfect for small to medium-sized teams aiming to
                        collaborate seamlessly
                      </span>
                      <br></br>
                    </span>
                    <div className="pricing-container-slider">
                      <div className="pricing-container04">
                        <div className="pricing-container05">
                          <input
                            type="radio"
                            name="user"
                            value="89"
                            checked="true"
                            onClick={() => setCheckedUser('5')}
                            className="pricing-radio"
                          />
                          <input
                            type="radio"
                            name="user"
                            value="119"
                            checked="true"
                            onClick={() => setCheckedUser('12')}
                            className="pricing-radiobutton"
                          />
                          <input
                            type="radio"
                            name="user"
                            value="159"
                            checked="true"
                            onClick={() => setCheckedUser('20')}
                            className="pricing-radiobutton1"
                          />
                          <input
                            type="radio"
                            name="user"
                            value="249"
                            checked="true"
                            onClick={() => setCheckedUser('40')}
                            className="pricing-radiobutton2"
                          />
                          <input
                            type="radio"
                            name="user"
                            value="40+"
                            checked="true"
                            onClick={() => setCheckedUser('40+')}
                            className="pricing-radiobutton3"
                          />
                        </div>
                        <div className="pricing-container06">
                          <span className="pricing-text33">{props.text8}</span>
                          <span className="pricing-text34">{props.text9}</span>
                          <span className="pricing-text35">{props.text10}</span>
                          <span>{props.text6}</span>
                          <span className="pricing-text37">{props.text11}</span>
                        </div>
                      </div>
                      {checkedUser === '5' && (
                        <img
                          alt={props.sliderRailDefaultAlt}
                          src={props.sliderRailDefaultSrc}
                          className="pricing-slider-rail-default"
                        />
                      )}
                      {checkedUser === '12' && (
                        <img
                          alt={props.sliderRailDefaultAlt1}
                          src={props.sliderRailDefaultSrc1}
                          className="pricing-slider-rail-on1"
                        />
                      )}
                      {checkedUser === '20' && (
                        <img
                          alt={props.sliderRailDefaultAlt1}
                          src={props.sliderRailDefaultSrc1}
                          className="pricing-slider-rail-on2"
                        />
                      )}
                      {checkedUser === '40' && (
                        <img
                          alt={props.sliderRailDefaultAlt1}
                          src={props.sliderRailDefaultSrc1}
                          className="pricing-slider-rail-on3"
                        />
                      )}
                      {checkedUser === '40+' && (
                        <img
                          alt={props.sliderRailDefaultAlt1}
                          src={props.sliderRailDefaultSrc1}
                          className="pricing-slider-rail-on4"
                        />
                      )}
                    </div>
                    <div className="pricing-container-sub-user">
                      <span className="pricing-text38">1 User + </span>
                      <span className="pricing-text39">{checkedUser}</span>
                      <span className="pricing-text40">Sub Users</span>
                    </div>
                    <div className="pricing-container-price">
                      {checkedUser === '5' && (
                        <div className="pricing-container07">
                          <h1 className="pricing-text41">{props.currency}</h1>
                          <h1 id="team_plan_price" className="pricing-heading1">
                            89
                          </h1>
                          <h1 className="pricing-text42">
                            {props.priceDetail}
                          </h1>
                        </div>
                      )}
                      {checkedUser === '12' && (
                        <div className="pricing-container08">
                          <h1 className="pricing-text43">{props.currency}</h1>
                          <h1
                            id="team_plan_price_12"
                            className="pricing-heading2"
                          >
                            <span className="pricing-text44">119</span>
                            <br></br>
                          </h1>
                          <h1 className="pricing-text46">
                            {props.priceDetail}
                          </h1>
                        </div>
                      )}
                      {checkedUser === '20' && (
                        <div className="pricing-container09">
                          <h1 className="pricing-text47">{props.currency}</h1>
                          <h1
                            id="team_plan_price_20"
                            className="pricing-heading3"
                          >
                            <span className="pricing-text48">159</span>
                            <br></br>
                          </h1>
                          <h1 className="pricing-text50">
                            {props.priceDetail}
                          </h1>
                        </div>
                      )}
                      {checkedUser === '40' && (
                        <div className="pricing-container10">
                          <h1 className="pricing-text51">{props.currency}</h1>
                          <h1
                            id="team_plan_price_40"
                            className="pricing-heading4"
                          >
                            249
                          </h1>
                          <h1 className="pricing-text52">
                            {props.priceDetail}
                          </h1>
                        </div>
                      )}
                    </div>
                    <span className="pricing-text53">
                      14-day unlimited free trial
                    </span>
                    <div className="pricing-container11">
                      {checkedUser === '5' && (
                        <a
                          href="https://app.ezcoordinator.com/register?subscription=13"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="pricing-link2"
                        >
                          <div
                            id="ez_team_plan_button"
                            className="pricing-get-started2 template-button"
                          >
                            <span className="pricing-text54">
                              Choose EZ Team
                            </span>
                          </div>
                        </a>
                      )}
                      {checkedUser === '12' && (
                        <a
                          href="https://app.ezcoordinator.com/register?subscription=13"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="pricing-link3"
                        >
                          <div
                            id="ez_team_plan_button_12"
                            className="pricing-get-started3 template-button"
                          >
                            <span className="pricing-text55">
                              Choose EZ Team
                            </span>
                          </div>
                        </a>
                      )}
                      {checkedUser === '20' && (
                        <a
                          href="https://app.ezcoordinator.com/register?subscription=13"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="pricing-link4"
                        >
                          <div
                            id="ez_team_plan_button_20"
                            className="pricing-get-started4 template-button"
                          >
                            <span className="pricing-text56">
                              Choose EZ Team
                            </span>
                          </div>
                        </a>
                      )}
                      {checkedUser === '40' && (
                        <a
                          href="https://app.ezcoordinator.com/register?subscription=13"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="pricing-link5"
                        >
                          <div
                            id="ez_team_plan_button_40"
                            className="pricing-get-started5 template-button"
                          >
                            <span className="pricing-text57">
                              Choose EZ Team
                            </span>
                          </div>
                        </a>
                      )}
                      {checkedUser === '40+' && (
                        <div
                          id="ez_team_plan_button_40plus"
                          onClick={() => setModalQuote(true)}
                          className="pricing-get-started6 template-button"
                        >
                          <span className="pricing-text58">Choose EZ Team</span>
                        </div>
                      )}
                    </div>
                    <span className="pricing-text59">
                      <span className="pricing-text60">
                        What&apos;s included:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br className="pricing-text61"></br>
                      <br></br>
                      <span>All features in EZ Pro, plus:</span>
                    </span>
                  </div>
                  <div className="pricing-bullet-points2">
                    <PricingItem text="10 E-Signatures using DocuSign"></PricingItem>
                    <PricingItem text="Customized User Permissions"></PricingItem>
                    <PricingItem text="Assign Leads to Team Members"></PricingItem>
                    <PricingItem text="Document Review / Audit"></PricingItem>
                    <PricingItem text="Audit Logs"></PricingItem>
                    <PricingItem text="Personalized Set-Up and Data Migration/Import"></PricingItem>
                  </div>
                  <span id="most_popular_button" className="pricing-text64">
                    Most Popular
                  </span>
                </div>
                <Card2></Card2>
              </div>
            )}
            {!isMonthly && (
              <div className="pricing-pricing-group-yearly">
                <div className="pricing-card3">
                  <div className="pricing-plan-item-header3">
                    <span className="pricing-text65">EZ Starter</span>
                    <span className="pricing-text66">
                      <span>
                        Ideal for individuals looking to get started with
                        essential features at an affordable rate
                      </span>
                      <br></br>
                    </span>
                    <div className="pricing-container12">
                      <h1 className="pricing-text69">{props.currency2}</h1>
                      <h1 className="pricing-text70">190</h1>
                      <h1 className="pricing-text71">
                        <span>/year</span>
                        <br></br>
                      </h1>
                      <div className="pricing-container13">
                        <h1 className="pricing-text74">{props.currency121}</h1>
                        <h1 className="pricing-heading5">228</h1>
                      </div>
                    </div>
                    <span className="pricing-text75">
                      14-day unlimited free trial
                    </span>
                    <a
                      href="https://app.ezcoordinator.com/register?subscription=ez-starter-annual"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="pricing-link6"
                    >
                      <div className="pricing-get-started7 template-button">
                        <span className="pricing-text76">Get Started!</span>
                      </div>
                    </a>
                    <span className="pricing-text77">
                      What&apos;s included:
                    </span>
                  </div>
                  <div className="pricing-bullet-points3">
                    <PricingItem text="1 User"></PricingItem>
                    <PricingItem text="10 Active Transactions"></PricingItem>
                    <PricingItem text="100 Prospects"></PricingItem>
                    <PricingItem text="5GB of Document Storage"></PricingItem>
                    <PricingItem text="2 Custom Sections and Fields"></PricingItem>
                    <PricingItem text="Powerful and Extensive Customization"></PricingItem>
                    <PricingItem text="Unlimited Task Templates"></PricingItem>
                  </div>
                </div>
                <div className="pricing-card4">
                  <div className="pricing-plan-item-header4">
                    <span className="pricing-text78">EZ Pro</span>
                    <span className="pricing-text79">
                      Tailored for individuals seeking enhanced transaction and
                      task management without limit
                    </span>
                    <div className="pricing-container14">
                      <h1 className="pricing-text80">{props.currency21}</h1>
                      <h1 className="pricing-text81">390</h1>
                      <h1 className="pricing-text82">{props.yearlyLabel}</h1>
                      <div className="pricing-container15">
                        <h1 className="pricing-text83">{props.currency12}</h1>
                        <h1 className="pricing-heading6">468</h1>
                      </div>
                    </div>
                    <span className="pricing-text84">
                      14-day unlimited free trial
                    </span>
                    <a
                      href="https://app.ezcoordinator.com/register?subscription=ez-pro-annual"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="pricing-link7"
                    >
                      <div className="pricing-get-started8 template-button">
                        <span className="pricing-text85">Try EZ Pro!</span>
                      </div>
                    </a>
                    <span className="pricing-text86">
                      What&apos;s included:
                    </span>
                  </div>
                  <div className="pricing-bullet-points4">
                    <PricingItem text="1 User"></PricingItem>
                    <PricingItem text="Unlimited Transactions"></PricingItem>
                    <PricingItem text="Unlimited Prospects"></PricingItem>
                    <PricingItem text="Unlimited Document Uploads"></PricingItem>
                    <PricingItem text="Unlimited Emails (Gmail, MS 365, and SMTP)"></PricingItem>
                    <PricingItem text="Unlimited Task Templates"></PricingItem>
                    <PricingItem text="Unlimited Custom Sections and Fields"></PricingItem>
                    <PricingItem text="3 E-signatures using DocuSign"></PricingItem>
                    <PricingItem text="Automated Due Date Feature"></PricingItem>
                    <PricingItem text="Link Documents to Tasks"></PricingItem>
                    <PricingItem text="Powerful and Extensive Customization"></PricingItem>
                  </div>
                </div>
                <Card3></Card3>
              </div>
            )}
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .pricing-pricing {
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
          .pricing-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-heading {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .pricing-text01 {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Inter';
          }
          .pricing-text02 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .pricing-tabs {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: 36px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(36, 150, 216, 0.43);
          }
          .pricing-button {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            background-color: #0050b3;
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing-text03 {
            font-family: 'Inter';
          }
          .pricing-button1 {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            border-width: 0px;
            justify-content: center;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .pricing-text06 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
          }
          .pricing-button2 {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0050b3;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .pricing-button3 {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing-text08 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
          }
          .pricing-container01 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            justify-content: center;
          }
          .pricing-pricing-group-monthly {
            gap: var(--dl-space-space-twounits);
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .pricing-card {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 50px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .pricing-plan-item-header {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-text11 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-text12 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text15 {
            font-size: 1.25em;
          }
          .pricing-text16 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text17 {
            font-size: 1.25em;
          }
          .pricing-text18 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-link {
            display: contents;
          }
          .pricing-get-started {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text19 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-text20 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-bullet-points {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-card1 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 50px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .pricing-plan-item-header1 {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-text21 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-text22 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text23 {
            font-size: 1.25em;
          }
          .pricing-text24 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text25 {
            font-size: 1.25em;
          }
          .pricing-text26 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-link1 {
            display: contents;
          }
          .pricing-get-started1 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text27 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-text28 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-bullet-points1 {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-card2 {
            flex: 1;
            width: 440px;
            display: none;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 50px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-plan-item-header2 {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-text29 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-text30 {
            color: rgb(0, 0, 0);
            min-height: 90px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-container-slider {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-container04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .pricing-container05 {
            width: 100%;
            height: 15px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .pricing-radio {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .pricing-radiobutton {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .pricing-radiobutton1 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .pricing-radiobutton2 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .pricing-radiobutton3 {
            z-index: 2;
            align-self: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .pricing-container06 {
            height: 28px;
            display: flex;
            position: relative;
            align-self: stretch;
            justify-content: space-between;
          }
          .pricing-text33 {
            top: 0px;
            left: 55px;
            position: absolute;
          }
          .pricing-text34 {
            top: 0px;
            left: 115px;
            position: absolute;
          }
          .pricing-text35 {
            top: 0px;
            left: 173px;
            position: absolute;
          }
          .pricing-text37 {
            top: 0px;
            right: -10px;
            position: absolute;
          }
          .pricing-slider-rail-default {
            top: 172px;
            left: 2px;
            width: 240px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .pricing-slider-rail-on1 {
            top: 172px;
            left: 8px;
            width: 60px;
            height: 4px;
            z-index: 1;
            position: absolute;
          }
          .pricing-slider-rail-on2 {
            top: 172px;
            left: 6px;
            width: 120px;
            height: 4px;
            position: absolute;
          }
          .pricing-slider-rail-on3 {
            top: 172px;
            left: 8px;
            width: 180px;
            height: 4px;
            position: absolute;
          }
          .pricing-slider-rail-on4 {
            top: 172px;
            right: 2px;
            width: 240px;
            height: 4px;
            position: absolute;
          }
          .pricing-container-sub-user {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text38 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .pricing-text39 {
            color: rgb(0, 0, 0);
            margin-bottom: 0px;
          }
          .pricing-text40 {
            color: rgb(0, 0, 0);
            margin-left: 6px;
            margin-bottom: 0px;
          }
          .pricing-container-price {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text41 {
            font-size: 1.25em;
          }
          .pricing-heading1 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text42 {
            font-size: 1.25em;
          }
          .pricing-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text43 {
            font-size: 1.25em;
          }
          .pricing-heading2 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text46 {
            font-size: 1.25em;
          }
          .pricing-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text47 {
            font-size: 1.25em;
          }
          .pricing-heading3 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text50 {
            font-size: 1.25em;
          }
          .pricing-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text51 {
            font-size: 1.25em;
          }
          .pricing-heading4 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text52 {
            font-size: 1.25em;
          }
          .pricing-text53 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-link2 {
            display: contents;
          }
          .pricing-get-started2 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .pricing-text54 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-link3 {
            display: contents;
          }
          .pricing-get-started3 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .pricing-text55 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-link4 {
            display: contents;
          }
          .pricing-get-started4 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .pricing-text56 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-link5 {
            display: contents;
          }
          .pricing-get-started5 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }
          .pricing-text57 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-get-started6 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            background-color: var(--dl-color-primary-ez-main);
          }
          .pricing-text58 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-text59 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-bullet-points2 {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-text64 {
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
          .pricing-pricing-group-yearly {
            gap: var(--dl-space-space-twounits);
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .pricing-card3 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 50px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .pricing-plan-item-header3 {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-text65 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-text66 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text69 {
            font-size: 1.25em;
          }
          .pricing-text70 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text71 {
            font-size: 1.25em;
          }
          .pricing-container13 {
            display: flex;
            opacity: 0.5;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: line-through;
          }
          .pricing-text74 {
            font-size: 1em;
          }
          .pricing-heading5 {
            font-size: 1.25em;
          }
          .pricing-text75 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-link6 {
            display: contents;
          }
          .pricing-get-started7 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text76 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-text77 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-bullet-points3 {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-card4 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 50px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .pricing-plan-item-header4 {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-text78 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-text79 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-text80 {
            font-size: 1.25em;
          }
          .pricing-text81 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .pricing-text82 {
            font-size: 1.25em;
          }
          .pricing-container15 {
            display: flex;
            opacity: 0.5;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: line-through;
          }
          .pricing-text83 {
            font-size: 1em;
          }
          .pricing-heading6 {
            font-size: 1.25em;
          }
          .pricing-text84 {
            color: var(--dl-color-gray-700);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-link7 {
            display: contents;
          }
          .pricing-get-started8 {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text85 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing-text86 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-bullet-points4 {
            width: 300px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .pricing-centered-container {
              width: auto;
              max-width: auto;
            }
            .pricing-text02 {
              width: 100%;
              max-width: 600px;
            }
            .pricing-container01 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-sevenunits);
              padding-right: var(--dl-space-space-sevenunits);
              flex-direction: column;
            }
            .pricing-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-text12 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text20 {
              color: var(--dl-color-gray-500);
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 27px;
            }
            .pricing-card1 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-text22 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text28 {
              color: var(--dl-color-gray-500);
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 27px;
            }
            .pricing-card2 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-text30 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text59 {
              line-height: 27px;
            }
            .pricing-text60 {
              color: var(--dl-color-gray-500);
            }
            .pricing-text61 {
              color: var(--dl-color-gray-500);
            }
            .pricing-card3 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-text66 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text77 {
              color: var(--dl-color-gray-500);
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 27px;
            }
            .pricing-card4 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .pricing-text79 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text86 {
              color: var(--dl-color-gray-500);
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 27px;
            }
          }
          @media (max-width: 767px) {
            .pricing-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .pricing-centered-container {
              width: auto;
            }
            .pricing-container01 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .pricing-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text11 {
              font-size: 28px;
            }
            .pricing-card1 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text21 {
              font-size: 28px;
            }
            .pricing-card2 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text29 {
              font-size: 28px;
            }
            .pricing-card3 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text65 {
              font-size: 28px;
            }
            .pricing-card4 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text78 {
              font-size: 28px;
            }
          }
          @media (max-width: 479px) {
            .pricing-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .pricing-centered-container {
              width: auto;
              max-width: auto;
            }
            .pricing-container01 {
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .pricing-bullet-points {
              width: fit-content;
            }
            .pricing-bullet-points1 {
              width: fit-content;
            }
            .pricing-heading1 {
              font-size: 2em;
            }
            .pricing-heading2 {
              font-size: 2em;
            }
            .pricing-text44 {
              font-size: 2em;
            }
            .pricing-heading3 {
              font-size: 2em;
            }
            .pricing-text48 {
              font-size: 2em;
            }
            .pricing-heading4 {
              font-size: 2em;
            }
            .pricing-heading5 {
              font-size: 2em;
            }
            .pricing-bullet-points3 {
              width: fit-content;
            }
            .pricing-heading6 {
              font-size: 2em;
            }
            .pricing-bullet-points4 {
              width: fit-content;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing.defaultProps = {
  yearlyLabel: '/year',
  button: 'Button',
  text11: '40+',
  heading1: '/month',
  text9: '20',
  button1: 'Button',
  currency121: '$',
  text10: '40',
  button2: 'Button',
  sliderRailDefaultSrc: '/external/sliderraildefaulti130-ksiy-200h.png',
  radioChecked: '',
  sliderRailDefaultSrc1: '/external/sliderraildefaulti130-3skr-200h.png',
  sliderRailDefaultAlt: 'SliderRailDefaultI130',
  text6: '5',
  currency12: '$',
  rootClassName2: '',
  text8: '12',
  rootClassName1: '',
  sliderRailDefaultAlt1: 'SliderRailDefaultI130',
  text1:
    'Create next-generation solutions for small business customers with pricing options that accommodate everyone.',
  currency21: '$',
  text5: '',
  whatisincluded: "What's included",
  text3: 'Text',
  price2: '10',
  planItemDesc2: 'Free forever.',
  text: 'Pricing for all kind of businesses',
  currency2: '$',
  whatisincluded2: "What's included",
  rootClassName: '',
  text4: '14-day free trial',
  text2: 'Content',
  priceDetail2: '/month',
  planItemDesc: 'Free forever.',
  currency: '$',
  planItemName: 'Free',
  price: '10',
  text12: 'asd',
  price1: '10',
  planItemDesc1: 'Free forever.',
  priceDetail: '/month',
  planItemName2: 'Free',
  text21: 'Text',
  heading: 'Heading',
  text13: 'Sed ut pespiciatis unde omnis',
  planBtnText2: 'Start for free',
  text22: 'Pricing',
  planBtnText: 'Start for free',
  priceDetail21: '/month',
  text7: 'Pay as you go',
}

Pricing.propTypes = {
  yearlyLabel: PropTypes.string,
  button: PropTypes.string,
  text11: PropTypes.string,
  heading1: PropTypes.string,
  text9: PropTypes.string,
  button1: PropTypes.string,
  currency121: PropTypes.string,
  text10: PropTypes.string,
  button2: PropTypes.string,
  sliderRailDefaultSrc: PropTypes.string,
  radioChecked: PropTypes.string,
  sliderRailDefaultSrc1: PropTypes.string,
  sliderRailDefaultAlt: PropTypes.string,
  text6: PropTypes.string,
  currency12: PropTypes.string,
  rootClassName2: PropTypes.string,
  text8: PropTypes.string,
  rootClassName1: PropTypes.string,
  sliderRailDefaultAlt1: PropTypes.string,
  text1: PropTypes.string,
  currency21: PropTypes.string,
  text5: PropTypes.string,
  whatisincluded: PropTypes.string,
  text3: PropTypes.string,
  price2: PropTypes.string,
  planItemDesc2: PropTypes.string,
  text: PropTypes.string,
  currency2: PropTypes.string,
  whatisincluded2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  priceDetail2: PropTypes.string,
  planItemDesc: PropTypes.string,
  currency: PropTypes.string,
  planItemName: PropTypes.string,
  price: PropTypes.string,
  text12: PropTypes.string,
  price1: PropTypes.string,
  planItemDesc1: PropTypes.string,
  priceDetail: PropTypes.string,
  planItemName2: PropTypes.string,
  text21: PropTypes.string,
  heading: PropTypes.string,
  text13: PropTypes.string,
  planBtnText2: PropTypes.string,
  text22: PropTypes.string,
  planBtnText: PropTypes.string,
  priceDetail21: PropTypes.string,
  text7: PropTypes.string,
}

export default Pricing

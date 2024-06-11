import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
        <Link href="/real-estate-transaction-management-software">
          <a className="navigation-links-link01">{props.text3}</a>
        </Link>
        <Link href="/howitworks">
          <a className="navigation-links-link02">{props.text1}</a>
        </Link>
        <Link href="/pricing">
          <a className="navigation-links-link03">{props.text2}</a>
        </Link>
        <div
          data-thq="thq-dropdown"
          className="navigation-links-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="navigation-links-dropdown-toggle"
          >
            <span className="navigation-links-text">Resources</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="navigation-links-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="navigation-links-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links-dropdown-toggle01"
              >
                <Link href="/customers">
                  <a className="navigation-links-link04">Customers</a>
                </Link>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navigation-links-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navigation-links-icon2"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="navigation-links-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="navigation-links-dropdown1 list-item"
                >
                  <Link href="/customers">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navigation-links-dropdown-toggle02"
                      >
                        <span className="navigation-links-text02">
                          Who uses EZ
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navigation-links-dropdown2 list-item"
                >
                  <Link href="/brokers">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navigation-links-dropdown-toggle03"
                      >
                        <span className="navigation-links-text03">Brokers</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navigation-links-dropdown3 list-item"
                >
                  <Link href="/agents">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navigation-links-dropdown-toggle04"
                      >
                        <span className="navigation-links-text04">Agents</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navigation-links-dropdown4 list-item"
                >
                  <Link href="/transactioncoordinators">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navigation-links-dropdown-toggle05"
                      >
                        <span className="navigation-links-text05">
                          Coordinators
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown5 list-item"
            >
              <Link href="/docusign-integration">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle06"
                  >
                    <span className="navigation-links-text06">DocuSign</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown6 list-item"
            >
              <Link href="/errorsandommissions">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle07"
                  >
                    <span className="navigation-links-text07">E &amp; O</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown7 list-item"
            >
              <Link href="/affiliate-program">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle08"
                  >
                    <span className="navigation-links-text08">
                      Affiliate Program
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown8 list-item"
            >
              <Link href="/faq">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle09"
                  >
                    <span className="navigation-links-text09">FAQs</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            text-decoration: none;
          }
          .navigation-links-link01 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link02 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link03 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 00px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 00px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-links-text {
            color: var(--dl-color-gray-black);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            margin-left: var(--dl-space-space-twounits);
            margin-right: 4px;
            vertical-align: middle;
          }
          .navigation-links-dropdown-arrow {
            transition: 0.3s;
          }
          .navigation-links-icon {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navigation-links-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navigation-links-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-links-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-link04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navigation-links-dropdown-arrow1 {
            position: relative;
            transition: 0.3s;
          }
          .navigation-links-icon2 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navigation-links-dropdown-list1 {
            top: 0;
            left: 100%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navigation-links-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle04 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle04:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle05 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle05:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle06 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown6 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle07 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown7 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle08 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navigation-links-dropdown8 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle09 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-text09 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }

          @media (max-width: 991px) {
            .navigation-links-link02 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link01 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link02 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link03 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text1: 'How it Works',
  text2: 'Pricing',
  text: 'Home',
  rootClassName: '',
  text3: 'Features',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks

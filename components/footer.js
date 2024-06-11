import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <footer className="footer-footer1">
          <div className="footer-container">
            <div className="footer-logo">
              <img
                alt="logo"
                src="/logos/logo-512w-1500h.png"
                className="footer-image"
              />
              <span className="footer-text">
                <span>Real Estate, Simplified.</span>
                <br></br>
              </span>
            </div>
            <div className="footer-links-container">
              <div className="footer-container1">
                <div className="footer-product-container">
                  <span className="footer-text03">Product</span>
                  <Link href="/real-estate-transaction-management-software">
                    <a className="footer-link">Features</a>
                  </Link>
                  <Link href="/pricing">
                    <a className="footer-link01">Pricing</a>
                  </Link>
                  <Link href="/howitworks">
                    <a className="footer-link02">How It Works</a>
                  </Link>
                  <Link href="/customers">
                    <a className="footer-link03">Customers</a>
                  </Link>
                  <Link href="/faq">
                    <a className="footer-link04">FAQs</a>
                  </Link>
                </div>
                <div className="footer-company-container">
                  <span className="footer-text04">Company</span>
                  <Link href="/aboutus">
                    <a className="footer-link05">About</a>
                  </Link>
                  <Link href="/affiliate-program">
                    <a className="footer-link06">
                      <span>Affiliate Program</span>
                      <span> 💰</span>
                    </a>
                  </Link>
                  <a
                    href="https://ezcoordinator.freshdesk.com/support/solutions"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link07"
                  >
                    Help Center
                  </a>
                  <Link href="/privacy">
                    <a className="footer-link08">Privacy Policy</a>
                  </Link>
                  <Link href="/terms">
                    <a className="footer-link09">Terms of Service</a>
                  </Link>
                </div>
              </div>
              <div className="footer-container2">
                <div className="footer-contact">
                  <span className="footer-text07">Contact Us</span>
                  <span className="footer-text08">
                    support@ezcoordinator.com
                  </span>
                  <span>+1 (661) 228-8778</span>
                </div>
                <div className="footer-socials">
                  <span className="footer-text10">Follow Us</span>
                  <div className="footer-icon-group">
                    <a
                      href="https://twitter.com/EZCoordinator"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link10"
                    >
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="footer-icon"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://web.facebook.com/EZCoordinator"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link11"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="footer-icon2"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ez-coordinator/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link12"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="footer-icon4"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-separator"></div>
          <span className="footer-text11">
            © 2024 EZCoordinator, All Rights Reserved.
          </span>
          <a
            href="https://calendly.com/ezcoordinator-v2/20min"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link13 calendly-button button"
          >
            Request a Demo
          </a>
        </footer>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .footer-footer1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
            background-color: #d9d9d9;
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            height: 3em;
          }
          .footer-text {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text03 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link04 {
            text-decoration: none;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text04 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link09 {
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text07 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text10 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link12 {
            display: contents;
          }
          .footer-icon4 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text11 {
            align-self: center;
          }
          .footer-link13 {
            color: var(--dl-color-gray-900);
            border-width: 0px;
            text-decoration: none;
            background-color: var(--dl-color-primary-ez-main);
          }

          @media (max-width: 991px) {
            .footer-footer1 {
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-items: center;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .footer-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: 0px;
            }
            .footer-container2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text11 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

Footer.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer

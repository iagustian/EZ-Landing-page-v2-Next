import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Banners = (props) => {
  return (
    <>
      <section className="banners-banners">
        <div className="banners-banner-manage">
          <div className="banners-container">
            <div className="banners-left">
              <span className="banners-text title">{props.text}</span>
              <span className="banners-text01">{props.text1}</span>
              <a
                href="https://app.ezcoordinator.com/register"
                className="banners-link"
              >
                <div className="banners-get-started template-button">
                  <span className="banners-text02">{props.text2}</span>
                </div>
              </a>
            </div>
            <div className="banners-image-container">
              <img
                alt={props.cardsImageAlt}
                src={props.cardsImageSrc}
                className="banners-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="banners-banner-advanced-analytics">
          <div className="banners-centered-container">
            <div className="banners-image-container1">
              <img
                alt={props.cardsImageAlt1}
                src={props.cardsImageSrc1}
                className="banners-cards-image1"
              />
            </div>
            <div className="banners-right">
              <h2 className="banners-text03 title">{props.heading}</h2>
              <div className="banners-category">
                <span className="banners-text04">
                  Access your transactions, emails, documents and tasks 24/7.
                  Track your tasks and important due dates. Get performance and
                  sales reports and review documents for compliance.
                </span>
                <Link href="/real-estate-transaction-management-software">
                  <a className="banners-link2">{props.text4}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="banners-banner">
          <div className="banners-container1">
            <div className="banners-left1">
              <h2 className="banners-text05 title">{props.heading1}</h2>
              <span className="banners-text06">
                <span>
                  Add your custom fields and sections to all the contracts to
                  best suit your needs.
                </span>
                <br></br>
                <span>
                  Personalize your task templates to supercharge your day-to-day
                  task tracking on each contract.
                </span>
                <br></br>
                <span>
                  Provide more detailed context by adding note in each contract,
                  uploaded document and task.
                </span>
                <br></br>
              </span>
              <a
                href="https://app.ezcoordinator.com/register"
                className="banners-link3"
              >
                <div className="banners-get-started1 template-button">
                  <span className="banners-text13">{props.text5}</span>
                </div>
              </a>
            </div>
            <div className="banners-image-container2">
              <img
                alt={props.cardsImageAlt2}
                src={props.cardsImageSrc2}
                className="banners-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .banners-banners {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banners-banner-manage {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .banners-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .banners-left {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .banners-text {
            text-align: left;
          }
          .banners-text01 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .banners-link {
            display: contents;
          }
          .banners-get-started {
            transition: 0.3s;
            margin-bottom: 0;
            text-decoration: none;
          }
          .banners-get-started:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .banners-text02 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .banners-image-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .banners-cards-image {
            width: 586px;
            height: 347px;
            object-fit: initial;
            user-select: none;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .banners-banner-advanced-analytics {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #eff0f2;
          }
          .banners-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            justify-content: center;
          }
          .banners-image-container1 {
            flex: 1;
            display: flex;
          }
          .banners-cards-image1 {
            width: 550px;
            height: auto;
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .banners-right {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .banners-text03 {
            text-align: left;
          }
          .banners-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .banners-text04 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .banners-link2 {
            color: #211062;
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            border-color: #211062;
            border-width: 1px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .banners-link2:hover {
            color: #000000;
          }
          .banners-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .banners-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .banners-left1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .banners-text05 {
            text-align: left;
          }
          .banners-text06 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .banners-link3 {
            display: contents;
          }
          .banners-get-started1 {
            transition: 0.3s;
            margin-bottom: 0;
            text-decoration: none;
          }
          .banners-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .banners-text13 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .banners-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .banners-cards-image2 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          @media (max-width: 991px) {
            .banners-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .banners-left {
              margin-right: var(--dl-space-space-threeunits);
            }
            .banners-cards-image {
              width: 360px;
            }
            .banners-banner-advanced-analytics {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .banners-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .banners-container {
              flex-direction: column;
            }
            .banners-left {
              margin-right: 0px;
            }
            .banners-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .banners-text01 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .banners-text02 {
              font-size: 16px;
            }
            .banners-image-container {
              justify-content: center;
            }
            .banners-cards-image {
              margin-top: var(--dl-space-space-threeunits);
            }
            .banners-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .banners-centered-container {
              flex-direction: column-reverse;
            }
            .banners-right {
              margin-left: 0px;
            }
            .banners-text03 {
              font-size: 28px;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .banners-text04 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .banners-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .banners-container1 {
              flex-direction: column;
            }
            .banners-left1 {
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .banners-text01 {
              line-height: 24px;
            }
            .banners-cards-image {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Banners.defaultProps = {
  heading: 'Real Time Management of Prospects and Listings',
  cardsImageAlt: 'pastedImage',
  text3:
    'Access your transactions, documents and tasks 24/7. Track your tasks and important due dates. Get performance and sales reports and review documents for compliance.',
  text4: 'Learn More ->',
  cardsImageSrc2: '/screenshots/custom-functions-and-fields-1200w.png',
  cardsImageSrc: '/static/transaction-detail-1200w.png',
  text: 'Essential Real Estate Tools',
  heading1: 'Advanced Features and Functions',
  cardsImageAlt1: 'pastedImage',
  text1:
    'Track buyer and seller leads in the CRM. Track property showings and offers in a fast and simple way. ',
  cardsImageAlt2: 'pastedImage',
  text5: 'Get started\n',
  cardsImageSrc1:
    '/screenshots/screenshot%202023-02-11%20at%2021.48.30-600w.png',
  text2: 'Get started\n',
}

Banners.propTypes = {
  heading: PropTypes.string,
  cardsImageAlt: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  cardsImageSrc2: PropTypes.string,
  cardsImageSrc: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  cardsImageAlt1: PropTypes.string,
  text1: PropTypes.string,
  cardsImageAlt2: PropTypes.string,
  text5: PropTypes.string,
  cardsImageSrc1: PropTypes.string,
  text2: PropTypes.string,
}

export default Banners

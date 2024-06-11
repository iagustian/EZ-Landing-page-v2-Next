import React from 'react'

import PropTypes from 'prop-types'

const PlanItemHeader = (props) => {
  return (
    <>
      <div className="plan-item-header-plan-item-header">
        <span className="plan-item-header-text">{props.planItemName}</span>
        <span className="plan-item-header-text1">{props.planItemDesc}</span>
        <div className="plan-item-header-container">
          <h1 className="plan-item-header-text2">{props.currency}</h1>
          <h1 className="plan-item-header-text3">{props.price}</h1>
          <h1 className="plan-item-header-text4">{props.priceDetail}</h1>
        </div>
        <a
          href="https://app.ezcoordinator.com/register?subscription"
          className="plan-item-header-link"
        >
          <div className="plan-item-header-get-started template-button">
            <span className="plan-item-header-text5">{props.planBtnText}</span>
          </div>
        </a>
        <span className="plan-item-header-text6">{props.whatisincluded}</span>
      </div>
      <style jsx>
        {`
          .plan-item-header-plan-item-header {
            flex: 0 0 auto;
            width: 355px;
            display: flex;
            position: relative;
            max-width: 250px;
            align-items: flex-start;
            flex-direction: column;
          }
          .plan-item-header-text {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .plan-item-header-text1 {
            color: rgb(0, 0, 0);
            min-height: 120px;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .plan-item-header-container {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .plan-item-header-text2 {
            font-size: 1.25em;
          }
          .plan-item-header-text3 {
            font-size: 2em;
            margin-right: var(--dl-space-space-halfunit);
          }
          .plan-item-header-text4 {
            font-size: 1.25em;
          }
          .plan-item-header-link {
            display: contents;
          }
          .plan-item-header-get-started {
            width: 100%;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .plan-item-header-text5 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .plan-item-header-text6 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          @media (max-width: 991px) {
            .plan-item-header-text1 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .plan-item-header-text6 {
              font-size: 16px;
            }
          }
          @media (max-width: 767px) {
            .plan-item-header-text {
              font-size: 28px;
            }
          }
        `}
      </style>
    </>
  )
}

PlanItemHeader.defaultProps = {
  whatisincluded: "What's included",
  planItemDesc: 'Free forever.',
  price: '10',
  planItemName: 'Free',
  planBtnText: 'Start for free',
  currency: '$',
  priceDetail: '/month',
}

PlanItemHeader.propTypes = {
  whatisincluded: PropTypes.string,
  planItemDesc: PropTypes.string,
  price: PropTypes.string,
  planItemName: PropTypes.string,
  planBtnText: PropTypes.string,
  currency: PropTypes.string,
  priceDetail: PropTypes.string,
}

export default PlanItemHeader

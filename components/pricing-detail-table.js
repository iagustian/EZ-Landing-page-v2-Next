import React from 'react'

import PricingColumn from './pricing-column'

const PricingDetailTable = (props) => {
  return (
    <>
      <div className="pricing-detail-table-pricing-detail-table">
        <div className="pricing-detail-table-container">
          <div className="pricing-detail-table-container1">
            <h1>
              <span>The Solution for Real Estate</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="pricing-detail-table-container2">
          <PricingColumn content="-"></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
        </div>
        <div className="pricing-detail-table-container3">
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
        </div>
        <div className="pricing-detail-table-container4">
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
          <PricingColumn></PricingColumn>
        </div>
      </div>
      <style jsx>
        {`
          .pricing-detail-table-pricing-detail-table {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-detail-table-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .pricing-detail-table-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .pricing-detail-table-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .pricing-detail-table-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .pricing-detail-table-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
        `}
      </style>
    </>
  )
}

export default PricingDetailTable

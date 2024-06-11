import React from 'react'

import PropTypes from 'prop-types'

const PricingItem1 = (props) => {
  return (
    <>
      <div className="pricing-item1-point">
        <svg viewBox="0 0 1024 1024" className="pricing-item1-icon">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
        <span className="pricing-item1-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .pricing-item1-point {
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .pricing-item1-icon {
            fill: var(--dl-color-primary-300);
            width: 24px;
            height: 24px;
          }
          .pricing-item1-text {
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            margin-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

PricingItem1.defaultProps = {
  text: 'Content',
}

PricingItem1.propTypes = {
  text: PropTypes.string,
}

export default PricingItem1

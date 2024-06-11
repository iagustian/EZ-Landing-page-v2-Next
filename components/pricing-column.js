import React from 'react'

import PropTypes from 'prop-types'

const PricingColumn = (props) => {
  return (
    <>
      <div className={`pricing-column-container ${props.rootClassName} `}>
        <span>{props.content}</span>
      </div>
      <style jsx>
        {`
          .pricing-column-container {
            flex: 0 0 auto;
            width: 200px;
            height: auto;
            display: flex;
            position: relative;
            min-height: var(--dl-size-size-small);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

PricingColumn.defaultProps = {
  rootClassName: '',
  content: 'Text',
}

PricingColumn.propTypes = {
  rootClassName: PropTypes.string,
  content: PropTypes.string,
}

export default PricingColumn

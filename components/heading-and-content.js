import React from 'react'

import PropTypes from 'prop-types'

const HeadingAndContent = (props) => {
  return (
    <>
      <div className="heading-and-content-container">
        <h2 className="heading-and-content-text">{props.heading}</h2>
        <span className="heading-and-content-text1">{props.content}</span>
      </div>
      <style jsx>
        {`
          .heading-and-content-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .heading-and-content-text {
            color: var(--dl-color-gray-500);
          }
          .heading-and-content-text1 {
            color: var(--dl-color-gray-500);
            min-width: 300px;
            margin-top: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

HeadingAndContent.defaultProps = {
  heading: 'Heading',
  content: 'Text',
}

HeadingAndContent.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
}

export default HeadingAndContent

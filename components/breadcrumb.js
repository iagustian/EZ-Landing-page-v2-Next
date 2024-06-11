import React from 'react'

import PropTypes from 'prop-types'

const Breadcrumb = (props) => {
  return (
    <>
      <div className={`breadcrumb-container ${props.rootClassName} `}>
        <div className="breadcrumb-container1">
          <span className="breadcrumb-text">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .breadcrumb-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .breadcrumb-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .breadcrumb-text {
            color: var(--dl-color-gray-700);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0px;
          }

          @media (max-width: 479px) {
            .breadcrumb-root-class-name {
              margin-top: var(--dl-space-space-sevenunits);
            }
            .breadcrumb-root-class-name1 {
              margin-top: var(--dl-space-space-sevenunits);
            }
          }
        `}
      </style>
    </>
  )
}

Breadcrumb.defaultProps = {
  rootClassName: '',
  text: 'Features',
}

Breadcrumb.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Breadcrumb

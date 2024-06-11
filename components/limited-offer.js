import React from 'react'

import PropTypes from 'prop-types'

const LimitedOffer = (props) => {
  return (
    <>
      <div className={`limited-offer-container ${props.rootClassName} `}>
        <div className="limited-offer-container1">
          <div className="limited-offer-absolute-wrapper">
            <span className="limited-offer-text">
              <span>
                🎄 Enjoy the holidays with 50% OFF for the first 12-month! Use
                code
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="limited-offer-text2">HOLA2024</span>
              <span>
                {' '}
                to unlock the discount at checkout!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .limited-offer-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .limited-offer-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .limited-offer-absolute-wrapper {
            top: 0px;
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: #854af6;
          }
          .limited-offer-text {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-offer-text2 {
            font-weight: 700;
          }
          .limited-offer-root-class-name {
            top: 0px;
            position: absolute;
          }
          @media (max-width: 991px) {
            .limited-offer-absolute-wrapper {
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .limited-offer-text {
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .limited-offer-root-class-name {
              position: static;
            }
          }
          @media (max-width: 767px) {
            .limited-offer-container1 {
              align-items: center;
              justify-content: center;
            }
            .limited-offer-absolute-wrapper {
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .limited-offer-text {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .limited-offer-root-class-name {
              position: static;
            }
          }
          @media (max-width: 479px) {
            .limited-offer-absolute-wrapper {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

LimitedOffer.defaultProps = {
  text: 'Text',
  rootClassName: '',
}

LimitedOffer.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LimitedOffer

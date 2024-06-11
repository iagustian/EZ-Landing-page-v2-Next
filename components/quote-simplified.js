import React from 'react'

import PropTypes from 'prop-types'

const QuoteSimplified = (props) => {
  return (
    <>
      <section
        className={`quote-simplified-quote-container ${props.rootClassName} `}
      >
        <div className="quote-simplified-quote">
          <span className="quote-simplified-message">
            <span>“We really wanted to go paperless and reduce errors...</span>
            <br></br>
            <span>
              EZCordinator has done all of that for us and it’s proved more than
              valuable in closing deals.”
            </span>
          </span>
          <div className="quote-simplified-author">
            <span className="quote-simplified-quote1">
              <span className="quote-simplified-text3">
                — 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Mellisa Z</span>
            </span>
          </div>
        </div>
        <div className="quote-simplified-quote2">
          <span className="quote-simplified-message1">
            <span>
              “EZCoordinator is a great tool to have in my daily client care
              resource
            </span>
            <span>
              . I coordinate on average 35 closing transactions monthly and
              EZCoordinator makes the process efficient.”
            </span>
          </span>
          <div className="quote-simplified-author1">
            <span className="quote-simplified-quote3">
              <span className="quote-simplified-text7">
                — 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Carolyn Nelson-Dobbs</span>
            </span>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .quote-simplified-quote-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: #000000;
          }
          .quote-simplified-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            flex-direction: column;
            justify-content: center;
          }
          .quote-simplified-message {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 32px;
          }
          .quote-simplified-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .quote-simplified-quote1 {
            color: rgb(151, 126, 249);
            width: 100%;
            max-width: 800px;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .quote-simplified-text3 {
            font-style: normal;
          }
          .quote-simplified-quote2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .quote-simplified-message1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 32px;
          }
          .quote-simplified-author1 {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .quote-simplified-quote3 {
            color: rgb(151, 126, 249);
            width: 100%;
            max-width: 800px;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .quote-simplified-text7 {
            font-style: normal;
          }

          @media (max-width: 991px) {
            .quote-simplified-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .quote-simplified-message {
              width: 100%;
              max-width: 800px;
            }
            .quote-simplified-author {
              width: 100%;
              max-width: 800px;
            }
            .quote-simplified-message1 {
              width: 100%;
              max-width: 800px;
            }
            .quote-simplified-author1 {
              width: 100%;
              max-width: 800px;
            }
          }
          @media (max-width: 767px) {
            .quote-simplified-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .quote-simplified-message {
              font-size: 24px;
              line-height: 31px;
            }
            .quote-simplified-author {
              width: 100%;
            }
            .quote-simplified-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .quote-simplified-message1 {
              font-size: 24px;
              line-height: 31px;
            }
            .quote-simplified-author1 {
              width: 100%;
            }
            .quote-simplified-quote3 {
              font-size: 14px;
              max-width: 800px;
            }
          }
        `}
      </style>
    </>
  )
}

QuoteSimplified.defaultProps = {
  rootClassName: '',
}

QuoteSimplified.propTypes = {
  rootClassName: PropTypes.string,
}

export default QuoteSimplified

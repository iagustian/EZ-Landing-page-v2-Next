import React from 'react'

import PropTypes from 'prop-types'

const ActionBar = (props) => {
  return (
    <>
      <section className={`action-bar-action-bar ${props.rootClassName} `}>
        <div className="action-bar-action">
          <div className="action-bar-heading">
            <span className="action-bar-text title">
              <span>Get more done with us</span>
              <span>!</span>
            </span>
            <span className="action-bar-text3">{props.text}</span>
            <a
              href="https://app.ezcoordinator.com/register"
              className="action-bar-link"
            >
              <div className="action-bar-get-started template-button">
                <span className="action-bar-text4">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
          <div className="action-bar-images">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="action-bar-image"
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .action-bar-action-bar {
            width: 100%;
            display: flex;
            padding: 120px;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .action-bar-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-ez-main);
          }
          .action-bar-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .action-bar-text {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .action-bar-text3 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .action-bar-link {
            display: contents;
          }
          .action-bar-get-started {
            margin-bottom: 0px;
            text-decoration: none;
          }
          .action-bar-text4 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .action-bar-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .action-bar-image {
            width: 359px;
            height: 451px;
            object-fit: cover;
            user-select: none;
            border-radius: 50px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }

          @media (max-width: 991px) {
            .action-bar-action {
              flex-direction: column;
            }
            .action-bar-heading {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .action-bar-text {
              font-size: 36px;
              line-height: 36px;
            }
            .action-bar-image {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .action-bar-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .action-bar-action {
              align-items: center;
            }
            .action-bar-heading {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .action-bar-text {
              font-size: 28px;
              text-align: left;
            }
            .action-bar-text4 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .action-bar-images {
              justify-content: center;
            }
            .action-bar-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .action-bar-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ActionBar.defaultProps = {
  rootClassName: '',
  text: 'Close more transactions in less time.',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwcm9kdWN0aXZlfGVufDB8fHx8MTY3Njk3NzUxOQ&ixlib=rb-4.0.3&w=1200',
}

ActionBar.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ActionBar

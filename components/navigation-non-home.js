import React from 'react'

import PropTypes from 'prop-types'

import LimitedOffer from './limited-offer'
import Menu from './menu'

const NavigationNonHome = (props) => {
  return (
    <>
      <section
        className={`navigation-non-home-navigation-non-home ${props.rootClassName} `}
      >
        <LimitedOffer rootClassName="limited-offer-root-class-name"></LimitedOffer>
        <Menu rootClassName="menu-root-class-name1"></Menu>
      </section>
      <style jsx>
        {`
          .navigation-non-home-navigation-non-home {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-gray-white);
          }

          @media (max-width: 991px) {
            .navigation-non-home-navigation-non-home {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .navigation-non-home-navigation-non-home {
              height: auto;
              position: relative;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              background-color: #f7f7f7;
            }
            .navigation-non-home-root-class-name {
              height: auto;
            }
            .navigation-non-home-root-class-name1 {
              height: auto;
            }
            .navigation-non-home-root-class-name2 {
              height: auto;
            }
            .navigation-non-home-root-class-name3 {
              height: auto;
            }
            .navigation-non-home-root-class-name4 {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .navigation-non-home-navigation-non-home {
              height: 89px;
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .navigation-non-home-root-class-name {
              height: var(--dl-size-size-small);
            }
            .navigation-non-home-root-class-name1 {
              height: var(--dl-size-size-small);
            }
            .navigation-non-home-root-class-name2 {
              height: var(--dl-size-size-small);
            }
            .navigation-non-home-root-class-name3 {
              height: var(--dl-size-size-small);
            }
            .navigation-non-home-root-class-name4 {
              height: var(--dl-size-size-small);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationNonHome.defaultProps = {
  rootClassName: '',
}

NavigationNonHome.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavigationNonHome

import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const NavigationNoAuthButtons = (props) => {
  return (
    <>
      <section
        className={`navigation-no-auth-buttons-navigation-non-home ${props.rootClassName} `}
      >
        <div className="navigation-no-auth-buttons-menu">
          <div
            id="mobile-menu"
            className="navigation-no-auth-buttons-mobile-navigation"
          >
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="navigation-no-auth-buttons-logo"
            />
            <div className="navigation-no-auth-buttons-links">
              <span className="Link">{props.text}</span>
              <span className="Link">{props.text1}</span>
              <span className="Link">{props.text2}</span>
            </div>
            <div
              id="close-mobile-menu"
              className="navigation-no-auth-buttons-close-mobile-menu"
            >
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="navigation-no-auth-buttons-icon"
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <header
            data-role="Header"
            className="navigation-no-auth-buttons-header"
          >
            <Link href="/">
              <a className="navigation-no-auth-buttons-link">
                <img
                  alt="logo"
                  src="/logos/logo-512w-1500h.png"
                  className="navigation-no-auth-buttons-image"
                />
              </a>
            </Link>
            <div className="navigation-no-auth-buttons-nav">
              <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
            </div>
            <div
              id="auth-button-group"
              className="navigation-no-auth-buttons-btn-group"
            >
              <a
                href="https://app.ezcoordinator.com/login"
                className="navigation-no-auth-buttons-login button"
              >
                Login
              </a>
              <a
                href="https://app.ezcoordinator.com/register"
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-no-auth-buttons-register button"
              >
                Register
              </a>
            </div>
            <div
              data-role="BurgerMenu"
              className="navigation-no-auth-buttons-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="navigation-no-auth-buttons-icon2"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              id="MobileMenu_1"
              data-role="MobileMenu"
              className="navigation-no-auth-buttons-mobile-menu"
            >
              <div className="navigation-no-auth-buttons-nav1">
                <div className="navigation-no-auth-buttons-container">
                  <img
                    alt="image"
                    src="/logos/logo1-1500h.png"
                    className="navigation-no-auth-buttons-image1"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="navigation-no-auth-buttons-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navigation-no-auth-buttons-icon4"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName9"></NavigationLinks>
              </div>
            </div>
          </header>
          <div>
            <div className="navigation-no-auth-buttons-container2">
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .navigation-no-auth-buttons-navigation-non-home {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
            background-color: var(--dl-color-gray-white);
          }
          .navigation-no-auth-buttons-menu {
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .navigation-no-auth-buttons-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .navigation-no-auth-buttons-logo {
            width: 64px;
          }
          .navigation-no-auth-buttons-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-no-auth-buttons-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .navigation-no-auth-buttons-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .navigation-no-auth-buttons-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .navigation-no-auth-buttons-link {
            display: contents;
          }
          .navigation-no-auth-buttons-image {
            height: 3.5em;
            text-decoration: none;
          }
          .navigation-no-auth-buttons-nav {
            display: flex;
          }
          .navigation-no-auth-buttons-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navigation-no-auth-buttons-login {
            display: none;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navigation-no-auth-buttons-register {
            color: #ffffff;
            display: none;
            border-width: 0px;
            text-decoration: none;
            background-color: #246b96;
          }
          .navigation-no-auth-buttons-burger-menu {
            display: none;
          }
          .navigation-no-auth-buttons-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-no-auth-buttons-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 102;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navigation-no-auth-buttons-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-no-auth-buttons-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-no-auth-buttons-image1 {
            height: 2rem;
          }
          .navigation-no-auth-buttons-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-no-auth-buttons-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-no-auth-buttons-container2 {
            display: contents;
          }

          @media (max-width: 991px) {
            .navigation-no-auth-buttons-navigation-non-home {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navigation-no-auth-buttons-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .navigation-no-auth-buttons-btn-group {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .navigation-no-auth-buttons-navigation-non-home {
              height: auto;
              position: relative;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              background-color: #f7f7f7;
            }
            .navigation-no-auth-buttons-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navigation-no-auth-buttons-nav {
              display: none;
            }
            .navigation-no-auth-buttons-btn-group {
              display: none;
            }
            .navigation-no-auth-buttons-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navigation-no-auth-buttons-mobile-menu {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navigation-no-auth-buttons-navigation-non-home {
              height: 89px;
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .navigation-no-auth-buttons-logo {
              margin-left: 0px;
            }
            .navigation-no-auth-buttons-icon {
              align-items: center;
              justify-content: center;
            }
            .navigation-no-auth-buttons-header {
              padding: var(--dl-space-space-unit);
            }
            .navigation-no-auth-buttons-nav {
              display: none;
            }
            .navigation-no-auth-buttons-btn-group {
              display: none;
            }
            .navigation-no-auth-buttons-mobile-menu {
              display: none;
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationNoAuthButtons.defaultProps = {
  logoAlt: 'pastedImage',
  logoSrc: '/pastedimage-no9b-1500h.png',
  rootClassName1: '',
  text1: 'How it works',
  rootClassName: '',
  text: 'Solutions',
  text2: 'Prices',
}

NavigationNoAuthButtons.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  rootClassName1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationNoAuthButtons

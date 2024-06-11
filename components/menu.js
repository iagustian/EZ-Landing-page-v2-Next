import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Menu = (props) => {
  return (
    <>
      <div className={`menu-menu ${props.rootClassName} `}>
        <div id="mobile-menu" className="menu-mobile-navigation">
          <img alt={props.logoAlt} src={props.logoSrc} className="menu-logo" />
          <div className="menu-links">
            <span className="Link">{props.text}</span>
            <span className="Link">{props.text1}</span>
            <span className="Link">{props.text2}</span>
          </div>
          <div id="close-mobile-menu" className="menu-close-mobile-menu">
            <svg viewBox="0 0 804.5714285714286 1024" className="menu-icon">
              <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
            </svg>
          </div>
        </div>
        <header data-role="Header" className="menu-header">
          <Link href="/">
            <a className="menu-link">
              <img
                alt="logo"
                src="/logos/logo-512w-1500h.png"
                className="menu-image"
              />
            </a>
          </Link>
          <div className="menu-nav">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
          <div id="auth-button-group" className="menu-btn-group">
            <a
              href="https://app.ezcoordinator.com/login"
              className="menu-login button"
            >
              Login
            </a>
            <a
              href="https://app.ezcoordinator.com/register"
              target="_blank"
              rel="noreferrer noopener"
              className="menu-register button"
            >
              Register
            </a>
          </div>
          <div data-role="BurgerMenu" className="menu-burger-menu">
            <svg viewBox="0 0 1024 1024" className="menu-icon2">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            id="MobileMenu_1"
            data-role="MobileMenu"
            className="menu-mobile-menu"
          >
            <div className="menu-nav1">
              <div className="menu-container">
                <img
                  alt="image"
                  src="/logos/logo1-1500h.png"
                  className="menu-image1"
                />
                <div data-role="CloseMobileMenu" className="menu-menu-close">
                  <svg viewBox="0 0 1024 1024" className="menu-icon4">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
          </div>
        </header>
        <div>
          <div className="menu-container2">
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
      <style jsx>
        {`
          .menu-menu {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .menu-mobile-navigation {
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
          .menu-logo {
            width: 64px;
          }
          .menu-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .menu-close-mobile-menu {
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
          .menu-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .menu-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .menu-link {
            display: contents;
          }
          .menu-image {
            height: 3.5em;
            text-decoration: none;
          }
          .menu-nav {
            display: flex;
          }
          .menu-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .menu-login {
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .menu-register {
            color: #ffffff;
            border-width: 0px;
            text-decoration: none;
            background-color: #246b96;
          }
          .menu-burger-menu {
            display: none;
          }
          .menu-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .menu-mobile-menu {
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
          .menu-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .menu-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .menu-image1 {
            height: 2rem;
          }
          .menu-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .menu-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .menu-container2 {
            display: contents;
          }

          .menu-root-class-name1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .menu-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .menu-btn-group {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .menu-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .menu-nav {
              display: none;
            }
            .menu-btn-group {
              display: none;
            }
            .menu-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .menu-mobile-menu {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .menu-logo {
              margin-left: 0px;
            }
            .menu-icon {
              align-items: center;
              justify-content: center;
            }
            .menu-header {
              padding: var(--dl-space-space-unit);
            }
            .menu-nav {
              display: none;
            }
            .menu-btn-group {
              display: none;
            }
            .menu-mobile-menu {
              display: none;
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Menu.defaultProps = {
  logoSrc: '/pastedimage-no9b-1500h.png',
  logoAlt: 'pastedImage',
  rootClassName: '',
  text: 'Solutions',
  text2: 'Prices',
  text1: 'How it works',
}

Menu.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default Menu

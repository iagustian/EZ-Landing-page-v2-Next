import React from 'react'

import PropTypes from 'prop-types'

const FreeQuoteModal = (props) => {
  return (
    <>
      <div
        className={`free-quote-modal-free-quote-modal ${props.rootClassName} `}
      >
        <div className="free-quote-modal-frame2183">
          <span className="free-quote-modal-text">
            Questions About Pricing?
          </span>
          <span className="free-quote-modal-text01 Content">
            <span>Get your free quote today</span>
          </span>
        </div>
        <div className="free-quote-modal-frame2178">
          <img
            alt="IconOutlinedClose1596"
            src="/external/iconoutlinedclose1596-i8zh.svg"
            className="free-quote-modal-icon-outlined-close"
          />
        </div>
        <div className="free-quote-modal-frame2181 Content">
          <div className="free-quote-modal-frame2182">
            <span className="free-quote-modal-text03 Content">
              <span>Title</span>
            </span>
            <select name="title" className="free-quote-modal-select">
              <option
                hidden="true"
                disabled="true"
                className="free-quote-modal-option"
              >
                Select Your Title
              </option>
              <option value="Mr." className="free-quote-modal-option1">
                Mr.
              </option>
              <option value="Mrs." className="free-quote-modal-option2">
                Mrs.
              </option>
              <option value="Miss" className="free-quote-modal-option3">
                Miss
              </option>
              <option value="Ms." className="free-quote-modal-option4">
                Ms.
              </option>
            </select>
          </div>
          <div className="free-quote-modal-frame2179">
            <span className="free-quote-modal-text05 Content">
              <span>Name</span>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="free-quote-modal-input-basic"
            />
          </div>
          <div className="free-quote-modal-frame2180">
            <span className="free-quote-modal-text07 Content">
              <span>Email</span>
            </span>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="free-quote-modal-input-basic1 Content"
            />
          </div>
          <div className="free-quote-modal-frame21811">
            <span className="free-quote-modal-text09 Content">
              <span>Phone Number</span>
            </span>
            <input
              type="text"
              name="phone_number"
              placeholder="Enter your Phone Number"
              className="free-quote-modal-input-basic2 Content"
            />
          </div>
        </div>
        <button className="free-quote-modal-button">
          <div className="free-quote-modal-content">
            <span className="free-quote-modal-text11">
              <span>Get Your Free Quote</span>
            </span>
          </div>
        </button>
      </div>
      <style jsx>
        {`
          .free-quote-modal-free-quote-modal {
            width: 673px;
            height: 813px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px -4px 24px 0px rgba(145, 213, 255, 0.10000000149011612);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(105, 192, 255, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 1);
          }
          .free-quote-modal-frame2183 {
            gap: 16px;
            top: 394px;
            left: 24px;
            width: 299px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .free-quote-modal-text {
            color: var(--dl-color-gray-gray9);
            height: auto;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 1.15;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .free-quote-modal-text01 {
            color: var(--dl-color-gray-gray9);
            height: auto;
            font-style: normal;
            text-align: left;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .free-quote-modal-frame2178 {
            width: 680px;
            height: 362px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_8zhwpyuncj-lnkd-400h.png');
          }
          .free-quote-modal-icon-outlined-close {
            top: 24px;
            left: 632px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .free-quote-modal-frame2181 {
            gap: 16px;
            top: 506px;
            left: 24px;
            width: 632px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .free-quote-modal-frame2182 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .free-quote-modal-text03 {
            color: var(--dl-color-gray-gray9);
            height: auto;
            font-style: normal;
            text-align: left;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .free-quote-modal-select {
            color: rgba(140, 140, 140, 1);
            width: 438px;
            height: auto;
            font-weight: 400;
            padding-top: 8px;
            border-color: rgba(217, 217, 217, 1);
            border-width: 1px;
            padding-left: 12px;
            padding-right: 12px;
            padding-bottom: 8px;
          }
          .free-quote-modal-option {
            color: rgba(140, 140, 140, 1);
          }
          .free-quote-modal-option1 {
            color: rgba(140, 140, 140, 1);
          }
          .free-quote-modal-option2 {
            color: rgba(140, 140, 140, 1);
          }
          .free-quote-modal-option3 {
            color: rgba(140, 140, 140, 1);
          }
          .free-quote-modal-option4 {
            color: rgba(140, 140, 140, 1);
          }
          .free-quote-modal-frame2179 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .free-quote-modal-text05 {
            color: var(--dl-color-gray-gray9);
            height: auto;
            font-style: normal;
            text-align: left;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .free-quote-modal-input-basic {
            gap: 10px;
            color: rgba(140, 140, 140, 1);
            width: 438px;
            display: flex;
            padding: 8px 12px;
            font-size: 16px;
            text-align: left;
            align-items: center;
            flex-shrink: 0;
            font-family: Inter;
            font-weight: 400;
            line-height: 1.15;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
            flex-direction: row;
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-gray-gray1);
          }
          .free-quote-modal-frame2180 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .free-quote-modal-text07 {
            color: var(--dl-color-gray-gray9);
            height: auto;
            font-style: normal;
            text-align: left;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .free-quote-modal-input-basic1 {
            gap: 10px;
            color: rgba(140, 140, 140, 1);
            width: 438px;
            display: flex;
            padding: 8px 12px;
            text-align: left;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
            background-color: var(--dl-color-gray-gray1);
          }
          .free-quote-modal-frame21811 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .free-quote-modal-text09 {
            color: var(--dl-color-gray-gray9);
            height: auto;
            font-style: normal;
            text-align: left;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .free-quote-modal-input-basic2 {
            gap: 10px;
            color: rgba(140, 140, 140, 1);
            width: 438px;
            display: flex;
            padding: 8px 12px;
            text-align: left;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(217, 217, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
            background-color: var(--dl-color-gray-gray1);
          }
          .free-quote-modal-button {
            gap: 8px;
            top: 741px;
            left: 24px;
            width: 632px;
            display: flex;
            padding: 8px 16px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 2px;
            flex-direction: column;
            background-color: var(--dl-color-daybreakblue-blue8);
          }
          .free-quote-modal-content {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .free-quote-modal-text11 {
            color: var(--dl-color-gray-gray1);
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 1.15;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

FreeQuoteModal.defaultProps = {
  rootClassName: '',
}

FreeQuoteModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default FreeQuoteModal

import React from 'react'

import PropTypes from 'prop-types'

const HowItWorks = (props) => {
  return (
    <>
      <section className={`how-it-works-how-it-works ${props.rootClassName} `}>
        <div className="how-it-works-centered-container">
          <div className="how-it-works-heading">
            <span className="how-it-works-text">{props.text}</span>
            <span className="how-it-works-text01 title">{props.text1}</span>
          </div>
          <div className="how-it-works-category">
            <div className="how-it-works-headng">
              <span className="how-it-works-text02">{props.text2}</span>
              <span className="how-it-works-text03">{props.text3}</span>
            </div>
            <div className="how-it-works-container">
              <img
                alt={props.pastedImageAlt}
                src={props.pastedImageSrc}
                className="how-it-works-pasted-image"
              />
            </div>
          </div>
          <div className="how-it-works-row">
            <div className="how-it-works-category1">
              <div className="how-it-works-headng1">
                <span className="how-it-works-text04">{props.text5}</span>
                <span className="how-it-works-text05">{props.text6}</span>
              </div>
              <img
                alt={props.pastedImageAlt1}
                src={props.pastedImageSrc1}
                className="how-it-works-pasted-image1"
              />
            </div>
            <div className="how-it-works-category2">
              <div className="how-it-works-headng2">
                <span className="how-it-works-text06">{props.text7}</span>
                <span className="how-it-works-text07">
                  <span>
                    Keep track of important due dates in each transaction on
                    your calendar. Set up email alerts so you are reminded when
                    as task or critical date is about to expire.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt={props.pastedImageAlt2}
                src={props.pastedImageSrc2}
                className="how-it-works-pasted-image2"
              />
            </div>
          </div>
          <div className="how-it-works-category3">
            <div className="how-it-works-container1">
              <img
                alt={props.pastedImageAlt3}
                src={props.pastedImageSrc3}
                className="how-it-works-pasted-image3"
              />
            </div>
            <div className="how-it-works-headng3">
              <span className="how-it-works-text10">{props.text4}</span>
              <span className="how-it-works-text11">
                <span>
                  Ready to close? Review your documents for compliance to make
                  sure everything is in perfect order. You can easily ensure the
                  file is complete, and then close the deal and get paid!
                </span>
                <br></br>
              </span>
              <a
                href="https://app.ezcoordinator.com/register"
                className="how-it-works-link"
              >
                <div className="how-it-works-get-started template-button">
                  <span className="how-it-works-text14">{props.text8}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .how-it-works-how-it-works {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #211062;
          }
          .how-it-works-centered-container {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .how-it-works-heading {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .how-it-works-text {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .how-it-works-text01 {
            color: var(--dl-color-gray-white);
          }
          .how-it-works-category {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-primary-ez-main);
          }
          .how-it-works-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .how-it-works-text02 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-it-works-text03 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: 40px;
          }
          .how-it-works-container {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .how-it-works-pasted-image {
            flex: 0 0 auto;
            width: 436px;
            height: 394px;
            object-fit: contain;
          }
          .how-it-works-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
          }
          .how-it-works-category1 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .how-it-works-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-it-works-text04 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-it-works-text05 {
            color: rgb(30, 30, 30);
            line-height: 24px;
          }
          .how-it-works-pasted-image1 {
            width: 100%;
            margin-top: var(--dl-space-space-twounits);
            object-fit: fill;
          }
          .how-it-works-category2 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .how-it-works-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-it-works-text06 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-it-works-text07 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .how-it-works-pasted-image2 {
            width: 100%;
            margin-top: var(--dl-space-space-threeunits);
            object-fit: contain;
          }
          .how-it-works-category3 {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-primary-ez-main);
          }
          .how-it-works-container1 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .how-it-works-pasted-image3 {
            flex: 0 0 auto;
            width: 452px;
            height: 362px;
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .how-it-works-headng3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .how-it-works-text10 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-it-works-text11 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: 40px;
          }
          .how-it-works-link {
            display: contents;
          }
          .how-it-works-get-started {
            margin-bottom: 0px;
            text-decoration: none;
          }
          .how-it-works-get-started:hover {
            color: black;
            background-color: #ffffff;
          }
          .how-it-works-text14 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }

          @media (max-width: 991px) {
            .how-it-works-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .how-it-works-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .how-it-works-container {
              width: 100%;
            }
            .how-it-works-pasted-image {
              height: auto;
            }
            .how-it-works-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .how-it-works-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .how-it-works-category3 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .how-it-works-container1 {
              width: 100%;
            }
            .how-it-works-pasted-image3 {
              height: auto;
            }
            .how-it-works-headng3 {
              margin-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .how-it-works-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .how-it-works-heading {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .how-it-works-text01 {
              margin-bottom: 0px;
            }
            .how-it-works-headng {
              padding-bottom: 0px;
            }
            .how-it-works-container {
              width: 100%;
            }
            .how-it-works-row {
              height: auto;
              flex-direction: column;
            }
            .how-it-works-container1 {
              width: 100%;
            }
            .how-it-works-headng3 {
              padding-bottom: 0px;
            }
            .how-it-works-get-started {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .how-it-works-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .how-it-works-category3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

HowItWorks.defaultProps = {
  pastedImageSrc1:
    '/screenshots/screenshot%202023-02-11%20at%2022.05%201-1200w.png',
  text1: 'See how EZ Coordinator can help manage your listing',
  pastedImageSrc:
    '/screenshots/screenshot%202023-02-11%20at%2022.02.45-500w.png',
  pastedImageAlt2: 'pastedImage',
  text5: '2 — Upload, share, sign your documents',
  text: 'How it works',
  text3:
    "Setting up a new transaction is quick and easy. The first thing you'll do is enter your relevant transaction information (address, agents, buyer/seller, etc...). Next, you can add additional contacts that are related to the transaction such as title, escrow, lenders, etc...",
  pastedImageAlt1: 'pastedImage',
  pastedImageSrc3:
    '/screenshots/screenshot%202023-02-11%20at%2022.10.14-600w.png',
  pastedImageAlt3: 'pastedImage',
  pastedImageAlt: 'pastedImage',
  text4: '4 — Review documents for compliance',
  rootClassName: '',
  text6:
    'The drag-and-drop feature allows you to upload the documents, or move them around. Collect e-signatures with DocuSign®, which is directly integrated into the program, and share data in real time with your team, or other appropriate parties.',
  text2: '1 — Add new transaction',
  text8: 'Get started\n',
  pastedImageSrc2:
    '/screenshots/screenshot%202023-02-11%20at%2022.06.48-1200w.png',
  text7: '3 — Schedule tasks',
}

HowItWorks.propTypes = {
  pastedImageSrc1: PropTypes.string,
  text1: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt2: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  pastedImageAlt1: PropTypes.string,
  pastedImageSrc3: PropTypes.string,
  pastedImageAlt3: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  pastedImageSrc2: PropTypes.string,
  text7: PropTypes.string,
}

export default HowItWorks

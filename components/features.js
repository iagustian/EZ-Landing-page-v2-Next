import React from 'react'

import PropTypes from 'prop-types'

const Features = (props) => {
  return (
    <>
      <section className={`features-features ${props.rootClassName} `}>
        <div id="summarized-feature" className="features-title">
          <span id="summarized-feature-main" className="features-text">
            EZCOORDINATOR works for brokers, agents, and transaction
            coordinators
          </span>
          <span className="features-text01">
            Put the power to organize transactions, emails, documents,
            signatures and task management at your fingertips.
          </span>
        </div>
        <div className="features-cards">
          <div className="features-container">
            <div className="features-analyze card">
              <svg viewBox="0 0 1024 1024" className="features-icon">
                <path d="M810 298v-84h-426v84h426zM640 640v-86h-256v86h256zM810 470v-86h-426v86h426zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h512zM170 256v598h598v84h-598q-34 0-59-25t-25-59v-598h84z"></path>
              </svg>
              <span className="features-text02">{props.text2}</span>
              <span className="features-text03">
                <span>
                  Access your transactions, documents, emails, and tasks 24/7.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Get performance and sales reports and review documents for
                  compliance.
                </span>
                <br></br>
              </span>
            </div>
            <div className="features-publish card">
              <svg viewBox="0 0 1024 1024" className="features-icon2">
                <path d="M726 726v-64q0-48-73-78t-141-30-141 30-73 78v64h428zM512 288q-40 0-68 28t-28 68 28 68 68 28 68-28 28-68-28-68-68-28zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684zM170 1024v-86h684v86h-684zM854 0v86h-684v-86h684z"></path>
              </svg>
              <span className="features-text12">
                Task and Deadline Management
              </span>
              <span className="features-text13">
                <span>
                  Our intuitive task and deadline management feature helps you
                  organize, prioritize, and meet your crucial milestones;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>Focus on what matters most!</span>
              </span>
            </div>
            <div className="features-get-leads card">
              <svg viewBox="0 0 1024 1024" className="features-icon4">
                <path d="M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z"></path>
              </svg>
              <span className="features-text18">{props.text3}</span>
              <span className="features-text19">
                <span>
                  Tailor EZCoordinator to fit your unique real estate needs with
                  our powerful customization feature.
                </span>
                <br></br>
                <br></br>
                <span>
                  Customize task due dates, templates, and settings to match
                  your preferences and workflow, making EZCoordinator truly your
                  own for a personalized and efficient experience
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .features-features {
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-items: center;
            padding-top: 400px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            background-color: #5228f5;
          }
          .features-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features-text {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 32px;
          }
          .features-text01 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .features-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .features-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .features-analyze {
            height: initial;
            padding-top: var(--dl-space-space-twounits);
          }
          .features-icon {
            width: 45px;
            height: 36px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .features-text02 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .features-text03 {
            line-height: 24px;
          }
          .features-publish {
            height: initial;
            padding-top: var(--dl-space-space-twounits);
          }
          .features-icon2 {
            width: 45px;
            height: 34px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .features-text12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .features-text13 {
            line-height: 24px;
          }
          .features-get-leads {
            height: initial;
            padding-top: var(--dl-space-space-twounits);
          }
          .features-icon4 {
            width: 45px;
            height: 34px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .features-text18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .features-text19 {
            line-height: 24px;
          }
          .features-root-class-name {
            background-color: #211062;
          }
          @media (max-width: 991px) {
            .features-features {
              padding-top: 260px;
            }
            .features-title {
              width: 100%;
              max-width: 1200px;
            }
            .features-text {
              font-size: 36px;
              line-height: 40px;
            }
            .features-text01 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .features-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .features-text03 {
              line-height: 21px;
            }
            .features-text13 {
              line-height: 21px;
            }
            .features-text18 {
              font-size: 24px;
            }
            .features-text19 {
              line-height: 21px;
            }
          }
          @media (max-width: 767px) {
            .features-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .features-text {
              font-size: 32px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-weight: 700;
              line-height: 40px;
            }
            .features-container {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .features-analyze {
              margin-right: 0px;
            }
            .features-text02 {
              font-size: 24px;
            }
            .features-text03 {
              font-size: 14px;
            }
            .features-publish {
              margin-left: 0px;
            }
            .features-text12 {
              font-size: 24px;
            }
            .features-text13 {
              font-size: 14px;
            }
            .features-text19 {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .features-features {
              padding-top: 200px;
            }
            .features-text {
              font-size: 26px;
              margin-top: var(--dl-space-space-halfunit);
            }
            .features-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .features-container {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .features-analyze {
              margin-bottom: 0px;
            }
            .features-root-class-name {
              margin-top: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  text: 'EZCOORDINATOR works for brokers, agents, and transaction coordinators',
  text2: 'Transaction Management',
  iconSrc1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/39622a11-b838-43d2-9bdc-3ba79420cf0d/2eeb51d9-6527-4d1d-a618-f7091dbc1ed4?org_if_sml=11077',
  rootClassName: '',
  iconAlt2: 'pastedImage',
  text1:
    'Put the power to organize leads, documents, signatures and task management at your fingertips.',
  iconSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/39622a11-b838-43d2-9bdc-3ba79420cf0d/2b3a1b67-104a-4861-94a6-e3b5d56dbc8a?org_if_sml=1985',
  iconAlt: 'pastedImage',
  iconSrc2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/39622a11-b838-43d2-9bdc-3ba79420cf0d/e003cbdf-d612-4276-a23e-a581d64c4a38?org_if_sml=11077',
  text3: 'Flexible custom functions',
  iconAlt1: 'pastedImage',
}

Features.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  iconSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  iconAlt2: PropTypes.string,
  text1: PropTypes.string,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconSrc2: PropTypes.string,
  text3: PropTypes.string,
  iconAlt1: PropTypes.string,
}

export default Features

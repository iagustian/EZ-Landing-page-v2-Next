import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const FAQ = (props) => {
  return (
    <>
      <section className={`faq-faq ${props.rootClassName} `}>
        <div className="faq-heading">
          <span className="faq-text title">{props.text}</span>
        </div>
        <div className="faq-accordion">
          <div className="accordionContainer">
            <div className="faq-header">
              <span className="faq-text01">{props.text2}</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="faq-text02">
                <span>
                  If you&apos;re tired of having piles of paper all over your
                  desk or not knowing what folder your documents are stored on
                  your computer.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  If you can&apos;t keep track of all the emails going back and
                  forth about your transaction.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  If you can&apos;t access your transaction info when
                  you&apos;re away from the office.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  If you need all your transaction information, in one location,
                  accessible from anywhere, then you need EZ Coordinator.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  We promise that we will make your business easier to run.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="faq-header1">
              <span className="faq-text13">{props.text3}</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="faq-text14">
                <span>
                  Setting up a new transaction is quick and easy. The first
                  thing you&apos;ll do is enter your relevant transaction
                  information (address, agents, buyer/seller, etc...).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Next, you can add additional contacts that are related to the
                  transaction such as title, escrow, lenders, etc...
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  After that you can start uploading your transaction document
                  by emailing them to the system or scanning and uploading them
                  directly from your computer.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Once your documents are in, you can flag them if they are
                  missing information such as signatures, initials, or if
                  you&apos;re missing a document.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  After that you can set up your task lists, which are
                  completely customizable.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  And finally, once your file is complete you can do a broker
                  review. All parties have access to confirm the file is
                  complete.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="faq-header2">
              <span className="faq-text26">{props.text4}</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="faq-text27">
                <span>
                  Yes we do.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  EZ Coordinator premium accounts integrate with DocuSign, the
                  easiest, fastest, most secure way to send, sign, track and
                  store documents in the cloud. It&apos;s the global standard
                  for electronic signature.
                </span>
                <br></br>
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
          <div data-faq="closed" className="accordionContainer">
            <div className="faq-header3">
              <span className="faq-text34">{props.text5}</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="faq-text35">
                <span>
                  Your data is always password protected and backed up daily.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  And for an extra layer of protection, you can backup your
                  files at any time by saving a copy on your computer. All your
                  data is encrypted and with our permission based roles.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  You decide who sees and edits what. Our servers are located in
                  different states for emergency preparedness and back ups. They
                  all mirror data so if one goes down another pops on.
                </span>
                <br></br>
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
          <div data-faq="closed" className="accordionContainer">
            <div className="faq-header4">
              <span className="faq-text44">{props.text6}</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="faq-text45">
                <span>
                  Our software is sold on a month-to-month basis with no long
                  term commitments.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  You can cancel at anytime and you can download all your data
                  before cancelling so nothing will be lost.
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
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="faq-header5">
              <span className="faq-text51">
                <span>— Do I need any software to run EZ Coordinator?</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="faq-text54">
                <span>
                  No. EZ Coordinator lives in the cloud on our servers. That way
                  you can access EZ Coordinator anywhere you have an internet
                  connection.
                </span>
                <br></br>
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
        <div>
          <div className="faq-container1">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .faq-faq {
            width: 100%;
            display: flex;
            padding: 120px;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .faq-heading {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .faq-text {
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .faq-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .faq-text01 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .faq-text02 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .faq-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .faq-text13 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .faq-text14 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .faq-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .faq-text26 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .faq-text27 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .faq-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .faq-text34 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .faq-text35 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .faq-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .faq-text44 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .faq-text45 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .faq-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .faq-text51 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .faq-text54 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .faq-container1 {
            display: contents;
          }

          @media (max-width: 991px) {
            .faq-accordion {
              width: 100%;
              max-width: 1200px;
            }
          }
          @media (max-width: 767px) {
            .faq-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .faq-heading {
              width: 100%;
            }
            .faq-text {
              font-size: 36px;
              line-height: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ.defaultProps = {
  text: 'Frequently asked questions',
  text3: '— How do I set up a transaction in EZ Coordinator?',
  text1: '— How is EZ Coordinator free for agents? ',
  text2: '— Why do I need EZ Coordinator?',
  rootClassName: '',
  text5: '— Is my data safe and secure with EZ Coordinator?',
  text4: '— Do you have an e-signature option?',
  text6: '— What is your cancellation policy?',
}

FAQ.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
}

export default FAQ

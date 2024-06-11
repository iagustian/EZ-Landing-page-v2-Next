import React from 'react'
import Head from 'next/head'

import NavigationNonHome from '../components/navigation-non-home'
import Breadcrumb from '../components/breadcrumb'
import ActionBar from '../components/action-bar'
import Footer from '../components/footer'

const FeaturesPage = (props) => {
  return (
    <>
      <div className="features-page-container">
        <Head>
          <title>Real Estate Transaction Management Tools | CRM Software</title>
          <meta
            name="description"
            content="EZ Coordinator's Real Estate Transaction Management Software includes CRM, document management, and more. Try it for free today!"
          />
          <meta
            property="og:title"
            content="Real Estate Transaction Management Tools | CRM Software"
          />
          <meta
            property="og:description"
            content="Save the planet by going paperless. Try it for free today!"
          />
        </Head>
        <NavigationNonHome rootClassName="navigation-non-home-root-class-name"></NavigationNonHome>
        <Breadcrumb></Breadcrumb>
        <section className="features-page-feature-1">
          <div className="features-page-header">
            <h2 className="features-page-heading section-heading">
              Essential Real Estate Tools
            </h2>
            <span className="features-page-text">
              <span>
                Save the planet by going paperless and never forget about a
                prospect or listing again, whether you simply want to remember a
                prospect&apos;s pet name and anniversary or be aware of all the
                listings you or your team are managing.
              </span>
              <br></br>
            </span>
          </div>
          <div className="features-page-note">
            <div className="features-page-image">
              <div className="features-page-container1">
                <img
                  alt="image"
                  src="/screenshots/essential-re-tools-600h.png"
                  className="features-page-image1"
                />
              </div>
            </div>
            <div className="features-page-content">
              <div className="features-page-heading1">
                <div
                  data-role="accordion-container"
                  className="features-page-element accordion-element"
                >
                  <div className="features-page-details">
                    <span className="features-page-text03">CRM</span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text04 default-show"
                    >
                      Store and organize customer data, helping you quickly
                      identify customer needs and provide better services. It
                      also helps businesses track customer interactions and
                      conversations, making it easy for businesses to follow up
                      with customers and keep them informed.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element01 accordion-element"
                >
                  <div className="features-page-details01">
                    <span className="features-page-text05">
                      Transaction Information
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text06"
                    >
                      Customize your dashboard so only the relevant information
                      is easily viewable. Info for buyers, sellers, agents,
                      commissions, contracts and contingency dates, and whatever
                      else you need to close the deal.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon02"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element02 accordion-element"
                >
                  <div className="features-page-details02">
                    <span className="features-page-text07">Documents</span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text08"
                    >
                      With unlimited document storage, store and organize your
                      documents and folders in the cloud, giving you access to
                      them anytime, anywhere, from any device. Use our simple
                      drag-and-drop functions to place your documents and files
                      directly into the system. You and the parties of the
                      transaction have 24/7 access.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon04"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element03 accordion-element"
                >
                  <div className="features-page-details03">
                    <span className="features-page-text09">
                      Email Integration
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text10"
                    >
                      Seamlessly integrate your existing email accounts, such as
                      Gmail or Outlook, with our software. This allows you to
                      send and manage all your transaction-related emails
                      directly within the software interface. Save time by using
                      pre-written templates.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon06"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-page-feature-2">
          <div className="features-page-header1">
            <h2 className="features-page-heading2 section-heading">
              Real Time Management of Prospects and Listings
            </h2>
            <span className="features-page-text11">
              <span>
                Close your listings faster through improved collaboration,
                communication, and task management with internal team members
                and your clients through task lists, alerts, reminders, calendar
                syncing, etc.
              </span>
              <br></br>
            </span>
          </div>
          <div className="features-page-note1">
            <div className="features-page-image2">
              <div className="features-page-container2">
                <img
                  alt="image"
                  src="/screenshots/real-time-management-of-prospects-listing-600h.png"
                  className="features-page-image3"
                />
              </div>
            </div>
            <div className="features-page-content1">
              <div className="features-page-heading3">
                <div
                  data-role="accordion-container"
                  className="features-page-element04 accordion-element"
                >
                  <div className="features-page-details04">
                    <span className="features-page-text14">Tasks</span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text15 default-show"
                    >
                      EZ Coordinator’s open platform lets you create unlimited
                      custom task lists to help you manage your to-dos with
                      specific due dates, assign priorities, and schedule
                      automatic email alerts &amp; notes to relay information to
                      all parties about the status of your tasks.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon08"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element05 accordion-element"
                >
                  <div className="features-page-details05">
                    <span className="features-page-text16">Note</span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text17"
                    >
                      Enter notes about your transaction, and then email them to
                      the various parties to keep everyone informed. The notes
                      section will also keep an up-to-date log of your actions,
                      so you&apos;ll always be able to track changes that have
                      been made.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon10"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element06 accordion-element"
                >
                  <div className="features-page-details06">
                    <span className="features-page-text18">Changelogs</span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text19"
                    >
                      See all the important audit logs of your transaction at a
                      glance. See who had access to what, when, and why.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon12"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element07 accordion-element"
                >
                  <div className="features-page-details07">
                    <span className="features-page-text20">
                      Additional Contacts
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text21"
                    >
                      Store additional contact information, such as name,
                      address, phone number, and email address, in one
                      convenient place. You can also add notes to each contact,
                      allowing you to quickly reference important notes before
                      contacting them.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon14"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-page-feature-3">
          <div className="features-page-header2">
            <h2 className="features-page-heading4 section-heading">
              <span>Advanced Features and Functions</span>
              <br></br>
            </h2>
            <span className="features-page-text24">
              <span>
                Every client should be able to make their process the process,
                which is why EZ Coordinator allows fully customizable fields,
                permissions, task lists, etc. because your business is unique.
              </span>
              <br></br>
            </span>
          </div>
          <div className="features-page-note2">
            <div className="features-page-image4">
              <div className="features-page-container3">
                <img
                  alt="image"
                  src="/screenshots/custom-functions-and-fields-600h.png"
                  className="features-page-image5"
                />
              </div>
            </div>
            <div className="features-page-content2">
              <div className="features-page-heading5">
                <div
                  data-role="accordion-container"
                  className="features-page-element08 accordion-element"
                >
                  <div className="features-page-details08">
                    <span className="features-page-text27">
                      <span>Customized Fields</span>
                      <br></br>
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text30 default-show"
                    >
                      <span>
                        Our design provides the opportunity to leverage fully
                        customizable fields so that you can create as many
                        custom fields as you desire. Best of all, there’s no
                        additional cost and our team is available to assist with
                        customization.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon16"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element09 accordion-element"
                >
                  <div className="features-page-details09">
                    <span className="features-page-text33">
                      <span>DocuSign Integration</span>
                      <br></br>
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text36"
                    >
                      EZ Coordinator has partnered with DocuSign to provide the
                      convenience of e-signatures. You can send documents for
                      signatures directly from your document folder.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon18"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element10 accordion-element"
                >
                  <div className="features-page-details10">
                    <span className="features-page-text37">
                      <span>Advanced User Permissions</span>
                      <br></br>
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text40"
                    >
                      EZ Coordinator’s permission settings allow you to control
                      who sees or interacts with each part of a transaction.
                      This ensures both privacy and security of information
                      based on the internal and external stakeholder needs.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon20"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-page-feature-4">
          <div className="features-page-header3">
            <h2 className="features-page-heading6 section-heading">
              A collaboration tool for Real Estate Organizations
            </h2>
            <span className="features-page-text41">
              <span>
                EZCoordinator is designed and built to make it easier for teams
                to work together. It allows members to securely store, share,
                and collaborate on documents and other important information.
              </span>
              <br></br>
            </span>
          </div>
          <div className="features-page-note3">
            <div className="features-page-image6">
              <div className="features-page-container4">
                <img
                  alt="image"
                  src="/screenshots/online-collaboration%20%5B1%5D-600h.png"
                  className="features-page-image7"
                />
              </div>
            </div>
            <div className="features-page-content3">
              <div className="features-page-heading7">
                <div
                  data-role="accordion-container"
                  className="features-page-element11 accordion-element"
                >
                  <div className="features-page-details11">
                    <span className="features-page-text44">
                      Document Review
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text45 default-show"
                    >
                      Easily review your documents for compliance, and once they
                      are complete, mark them approved or send a note back to
                      your agents for revisions.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon22"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element12 accordion-element"
                >
                  <div className="features-page-details12">
                    <span className="features-page-text46">
                      Task Management
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text47"
                    >
                      Track progress, set deadline, and keep everyone on the
                      same page. Stay organized and efficient by providing a
                      central place to store and share information.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon24"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="features-page-element13 accordion-element"
                >
                  <div className="features-page-details13">
                    <span className="features-page-text48">
                      Automated Task Creation
                    </span>
                    <span
                      data-role="accordion-content"
                      className="features-page-text49"
                    >
                      Apply task templates to transactions with a single click.
                      Our software will automatically generate all the necessary
                      tasks and assign them to the appropriate team members.
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="features-page-icon26"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ActionBar rootClassName="action-bar-root-class-name2"></ActionBar>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .features-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .features-page-feature-1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .features-page-header {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading {
            color: var(--dl-color-gray-black);
          }
          .features-page-text {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            text-align: center;
          }
          .features-page-note {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .features-page-image {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 466px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-container1 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .features-page-image1 {
            width: 520px;
            height: 515px;
            object-fit: cover;
            border-color: var(--dl-color-gray-900);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            object-position: left;
          }
          .features-page-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 483px;
            display: flex;
            max-width: 726px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-element {
            width: 527px;
            user-select: none;
          }
          .features-page-details {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text03 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text04 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element01 {
            width: 527px;
            user-select: none;
          }
          .features-page-details01 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text05 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text06 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon02 {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element02 {
            width: 527px;
            user-select: none;
          }
          .features-page-details02 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text07 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text08 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon04 {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element03 {
            width: 527px;
            user-select: none;
          }
          .features-page-details03 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text09 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text10 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon06 {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-feature-2 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-primary-100);
          }
          .features-page-header1 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading2 {
            color: var(--dl-color-gray-white);
          }
          .features-page-text11 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
          }
          .features-page-note1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .features-page-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 466px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-container2 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .features-page-image3 {
            width: 589px;
            height: 583px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            object-position: left;
          }
          .features-page-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 483px;
            display: flex;
            max-width: 726px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-element04 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details04 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text14 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text15 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element05 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details05 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text16 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text17 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element06 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details06 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text18 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text19 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element07 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details07 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text20 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text21 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-feature-3 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .features-page-header2 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading4 {
            color: var(--dl-color-gray-black);
          }
          .features-page-text24 {
            color: var(--dl-color-gray-500);
            font-size: 18px;
            text-align: center;
          }
          .features-page-note2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .features-page-image4 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 466px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-container3 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .features-page-image5 {
            width: 520px;
            height: 515px;
            object-fit: cover;
            border-color: var(--dl-color-gray-900);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            object-position: left;
          }
          .features-page-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 483px;
            display: flex;
            max-width: 726px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-element08 {
            width: 527px;
            user-select: none;
          }
          .features-page-details08 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text27 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text30 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon16 {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element09 {
            width: 527px;
            user-select: none;
          }
          .features-page-details09 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text33 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text36 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon18 {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element10 {
            width: 527px;
            user-select: none;
          }
          .features-page-details10 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text37 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text40 {
            color: var(--dl-color-gray-500);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon20 {
            fill: var(--dl-color-gray-black);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-feature-4 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-template-blue-bg);
          }
          .features-page-header3 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading6 {
            color: var(--dl-color-gray-white);
          }
          .features-page-text41 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
          }
          .features-page-note3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .features-page-image6 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 466px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-container4 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .features-page-image7 {
            width: 589px;
            height: 583px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            object-position: left;
          }
          .features-page-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 483px;
            display: flex;
            max-width: 726px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-heading7 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-element11 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details11 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text44 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text45 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon22 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element12 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details12 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text46 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text47 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon24 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .features-page-element13 {
            width: 527px;
            user-select: none;
            border-color: var(--dl-color-gray-700);
          }
          .features-page-details13 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features-page-text48 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .features-page-text49 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .features-page-icon26 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 991px) {
            .features-page-feature-1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .features-page-note {
              flex-direction: column-reverse;
            }
            .features-page-image {
              margin-top: var(--dl-space-space-threeunits);
            }
            .features-page-content {
              width: 100%;
              max-width: auto;
              align-items: center;
            }
            .features-page-feature-2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .features-page-note1 {
              flex-direction: column-reverse;
            }
            .features-page-image2 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .features-page-content1 {
              width: 100%;
              max-width: auto;
              align-items: center;
            }
            .features-page-feature-3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .features-page-note2 {
              flex-direction: column-reverse;
            }
            .features-page-image4 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .features-page-content2 {
              width: 100%;
              max-width: auto;
              align-items: center;
            }
            .features-page-feature-4 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .features-page-note3 {
              flex-direction: column-reverse;
            }
            .features-page-image6 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .features-page-content3 {
              width: 100%;
              max-width: auto;
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .features-page-content {
              width: 100%;
            }
            .features-page-element {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text03 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element01 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text05 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element02 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text07 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element03 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text09 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-content1 {
              width: 100%;
            }
            .features-page-element04 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text14 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element05 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element06 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text18 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element07 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text20 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-content2 {
              width: 100%;
            }
            .features-page-element08 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text27 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element09 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text33 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element10 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text37 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-content3 {
              width: 100%;
            }
            .features-page-element11 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text44 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element12 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text46 {
              font-size: 16px;
              line-height: 24px;
            }
            .features-page-element13 {
              width: 100%;
              max-width: 560px;
            }
            .features-page-text48 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .features-page-header {
              width: 100%;
              margin-right: 0px;
            }
            .features-page-heading {
              text-align: center;
            }
            .features-page-text {
              text-align: center;
            }
            .features-page-container1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .features-page-element {
              width: 350px;
              max-width: auto;
            }
            .features-page-element01 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element02 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element03 {
              width: 350px;
              max-width: auto;
            }
            .features-page-header1 {
              width: 100%;
              margin-right: 0px;
            }
            .features-page-heading2 {
              text-align: center;
            }
            .features-page-text11 {
              text-align: center;
            }
            .features-page-container2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .features-page-element04 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element05 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element06 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element07 {
              width: 350px;
              max-width: auto;
            }
            .features-page-header2 {
              width: 100%;
              margin-right: 0px;
            }
            .features-page-heading4 {
              text-align: center;
            }
            .features-page-text24 {
              text-align: center;
            }
            .features-page-container3 {
              margin-top: var(--dl-space-space-twounits);
            }
            .features-page-element08 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element09 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element10 {
              width: 350px;
              max-width: auto;
            }
            .features-page-header3 {
              width: 100%;
              margin-right: 0px;
            }
            .features-page-heading6 {
              text-align: center;
            }
            .features-page-text41 {
              text-align: center;
            }
            .features-page-container4 {
              margin-top: var(--dl-space-space-twounits);
            }
            .features-page-element11 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element12 {
              width: 350px;
              max-width: auto;
            }
            .features-page-element13 {
              width: 350px;
              max-width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default FeaturesPage

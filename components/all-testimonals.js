import React from 'react'

import PropTypes from 'prop-types'

import Testimonal from './testimonal'

const AllTestimonals = (props) => {
  return (
    <>
      <section
        id="testimonials-section"
        className={`all-testimonals-all-testimonals ${props.rootClassName} `}
      >
        <div className="all-testimonals-left">
          <span className="all-testimonals-text">{props.text}</span>
          <span className="all-testimonals-text1 title">{props.text1}</span>
        </div>
        <div className="all-testimonals-right">
          <div className="all-testimonals-column">
            <Testimonal
              from="Kent, WA"
              name="Josh Hall"
              quote='"I have been using EZ coordinator and it has made my business much more organized. The thing I like most about EZ over may of the other platforms is how customized I can make it"'
            ></Testimonal>
            <Testimonal
              from="San Diego, CA"
              name="Jeannette Johnson"
              quote='"It helps me stay on top of timelines and track tasks and documents in my files. I like the flexibility."'
              avatarSrc="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              from="San Marcos, CA"
              name="Jennifer Ash"
              quote='"In a few words I describe the program as fabulous, easy to use and cutting edge - meaning that the staff at EZ-Coordinator are constantly improving the program by taking suggestions from their customers as to what can be made better and/or more useful to their clients."'
              avatarSrc="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              from="n/a"
              name="Leeza Morriz"
              quote='"I spent two years searching for real estate software that could fit my need for instant access to all the tasks and information. Luckily, I finally stumbled upon EZCoordinator."'
              avatarSrc="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="all-testimonals-column1">
            <Testimonal
              from="Austin, TX"
              name="Mark R"
              quote='"Using EZ Coordinator has really made a difference in the number of deals I can manage at once. It&apos;s like a personal assistant that reminds me of what I need to do and handles my transactions for me."'
              avatarSrc="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              from="Rougemont, NC"
              name="Carolyn Nelson-Dobbs"
              quote='"I coordinate on average 35 closing transactions monthly and EZ Coordinator makes the process efficient by helping me track my property data, buyer and seller side information, transaction notes, and my contractual actions and contingencies daily"'
              avatarSrc="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              from="n/a"
              name="Melissa Z"
              quote="“We really wanted to go paperless and reduce errors...EZCordinator has done all of that for us and it’s proved more than valuable in closing deals.”"
              avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
          </div>
        </div>
        <span className="all-testimonals-text2">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <style jsx>
        {`
          .all-testimonals-all-testimonals {
            width: 100%;
            display: flex;
            position: relative;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .all-testimonals-left {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .all-testimonals-text {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .all-testimonals-text1 {
            text-align: left;
          }
          .all-testimonals-right {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .all-testimonals-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .all-testimonals-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .all-testimonals-text2 {
            cursor: pointer;
            display: none;
          }

          @media (max-width: 991px) {
            .all-testimonals-all-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .all-testimonals-left {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .all-testimonals-text1 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .all-testimonals-right {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .all-testimonals-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .all-testimonals-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .all-testimonals-all-testimonals {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .all-testimonals-right {
              width: 100%;
              flex-direction: column;
            }
            .all-testimonals-column1 {
              display: none;
            }
            .all-testimonals-text2 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
          }
          @media (max-width: 479px) {
            .all-testimonals-all-testimonals {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

AllTestimonals.defaultProps = {
  text: 'Testimonals',
  rootClassName: '',
  text1: 'What people say about us',
}

AllTestimonals.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default AllTestimonals

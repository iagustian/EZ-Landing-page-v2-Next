import React from 'react'

import PropTypes from 'prop-types'

const Testimonal = (props) => {
  return (
    <>
      <div className="testimonal-testimonal testimonal">
        <span className="testimonal-text">{props.quote}</span>
        <div className="testimonal-author">
          <div className="testimonal-user">
            <span className="testimonal-name">{props.name}</span>
            <span className="testimonal-divider">—</span>
            <span className="testimonal-from">{props.from}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonal-testimonal {
            position: relative;
          }
          .testimonal-text {
            line-height: 24px;
          }
          .testimonal-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .testimonal-user {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonal-name {
            color: rgb(0, 0, 0);
            font-style: normal;
            font-weight: 600;
          }
          .testimonal-divider {
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .testimonal-from {
            color: rgb(0, 0, 0);
          }
          @media (max-width: 767px) {
            .testimonal-text {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonal-name {
              font-size: 14px;
            }
            .testimonal-from {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonal.defaultProps = {
  from: 'Vista Social',
  name: 'Andy Smith',
  quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
}

Testimonal.propTypes = {
  from: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
}

export default Testimonal

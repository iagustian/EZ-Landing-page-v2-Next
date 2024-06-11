import React from 'react'

import PropTypes from 'prop-types'

const Testimonal1 = (props) => {
  return (
    <>
      <div className="testimonal1-testimonal testimonal">
        <span className="testimonal1-text">{props.quote}</span>
        <div className="testimonal1-author">
          <div className="testimonal1-user">
            <span className="testimonal1-name">{props.name}</span>
            <span className="testimonal1-divider">—</span>
            <span className="testimonal1-from">{props.from}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonal1-testimonal {
            position: relative;
          }
          .testimonal1-text {
            line-height: 24px;
          }
          .testimonal1-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .testimonal1-user {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonal1-name {
            color: rgb(0, 0, 0);
            font-style: normal;
            font-weight: 600;
          }
          .testimonal1-divider {
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .testimonal1-from {
            color: rgb(0, 0, 0);
          }
          @media (max-width: 767px) {
            .testimonal1-text {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonal1-name {
              font-size: 14px;
            }
            .testimonal1-from {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonal1.defaultProps = {
  name: 'Andy Smith',
  quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
  from: 'Vista Social',
}

Testimonal1.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  from: PropTypes.string,
}

export default Testimonal1

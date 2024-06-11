import React from 'react'

import PropTypes from 'prop-types'

const YouTube = (props) => {
  return (
    <>
      <div className="you-tube-you-tube">
        <img
          alt={props.pastedImageAlt}
          src={props.pastedImageSrc}
          className="you-tube-pasted-image"
        />
      </div>
      <style jsx>
        {`
          .you-tube-you-tube {
            width: 240px;
            height: 120px;
            display: flex;
            align-items: center;
            border-radius: 200px;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .you-tube-pasted-image {
            width: 120px;
          }
          @media (max-width: 479px) {
            .you-tube-you-tube {
              width: 120px;
              height: 60px;
              align-items: center;
            }
            .you-tube-pasted-image {
              width: 80px;
            }
          }
        `}
      </style>
    </>
  )
}

YouTube.defaultProps = {
  pastedImageSrc: '/logos/pastedimage-smjb.svg',
  pastedImageAlt: 'pastedImage',
}

YouTube.propTypes = {
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default YouTube

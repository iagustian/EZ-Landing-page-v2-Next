import React from 'react'

import ActiveUsers from './active-users'

const Statistics = (props) => {
  return (
    <>
      <section className="statistics-statistics">
        <div className="statistics-container">
          <ActiveUsers
            caption="— RE Transactions"
            statistic="250K"
          ></ActiveUsers>
          <ActiveUsers caption="— Documents" statistic="2.5M"></ActiveUsers>
          <ActiveUsers caption="— Task Added" statistic="8M"></ActiveUsers>
        </div>
      </section>
      <style jsx>
        {`
          .statistics-statistics {
            width: 100%;
            height: 264px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            justify-content: center;
            background-color: #211062;
          }
          .statistics-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .statistics-statistics {
              height: 800px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .statistics-container {
              height: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .statistics-statistics {
              height: 100%;
            }
            .statistics-container {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .statistics-statistics {
              height: 500px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Statistics

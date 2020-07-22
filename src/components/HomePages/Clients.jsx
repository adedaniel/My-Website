import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { colors } from "../styles/styles"

export default function Clients() {
  const data = useStaticQuery(graphql`
    query {
      ClientsImages: allFile(filter: { relativeDirectory: { eq: "clients" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG ##Adds B/W Preloader
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="pt-1 bgPrimaryGrey">
        <div className="text-center py-5" id="worked-with">
          <h1 className="mb-1 bgGrey mt20">Clients</h1>
          <div className="lineWrapper mb-4">
            <div className="innerLine"></div>
          </div>
          <div className="container mt-5 text-left">
            <div className="row bgGrey">
              <div className="col-sm-5">
                <div className="d-table hImage captionParent">
                  <div className="captionArea captionPadding">
                    <h1 className="clientsCaption">
                      Some of the people I've worked with...
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="d-table captionParent hImage">
                  <div className="captionArea ">
                    <div className="container">
                      <div className="row">
                        {data.ClientsImages.nodes.map(clientImage => (
                          <div
                            key={clientImage.id}
                            className="col-sm-6 h150 mb-4"
                          >
                            <div className="clientWrapper">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://${clientImage.name}`}
                              >
                                <Img
                                  fluid={clientImage.childImageSharp.fluid}
                                  durationFadeIn={800}
                                />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .h150 {
          height: 150px;
        }

        .clientWrapper {
          margin: 0 auto;
          width: 120px;
          padding: 15px 0;
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
          transition: 0.5s;
        }
        .clientWrapper:hover {
          -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
          filter: grayscale(0%);
        }
        .captionPadding {
          padding: 0 50px;
        }
        .clientsCaption {
          font-weight: bold;
          font-size: 3rem;
        }
        .hImage {
          height: 110vh;
        }
        .captionArea {
          display: table-cell;
          vertical-align: middle;
        }
        .mt20 {
          margin-top: 25px;
        }

        @media (min-width: 1200px) {
          .h150 {
            padding-right: 20%;
          }
        }
        @media (max-width: 1200px) {
          .clientsCaption {
            font-size: 2.5rem;
          }
        }
        @media (max-width: 991px) and (min-width: 768px) {
          .clientsCaption {
            font-size: 2rem;
          }
        }
        @media (max-width: 767px) {
          .clientsCaption {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 575px) {
          .clientsCaption {
            text-align: center;
          }
          .hImage {
            height: auto;
          }
          .h150 {
            height: 150px;
            width: 50%;
          }
        }
        .bgSecondary {
          background-color: var(--bg) !important;
        }
        .fontBold {
          font-weight: bold;
        }
        .bgPrimaryGrey {
          background-color: var(--bgGrey);
        }
        .lineWrapper {
          width: 180px;
          height: 3px;
          background: lightgray;
          margin: 0 auto;
        }
        .innerLine {
          width: 50px;
          background: var(--primary);
          height: 3px;
          margin: 0 auto;
        }
        .invNeutral {
          color: var(--inverseNeutral);
        }
        .bgGrey {
          color: var(--greyText);
        }
        .hoverEffect {
          background: linear-gradient(
            to bottom,
            ${colors.primary} 0%,
            ${colors.primary} 100%
          );
          background-position: 0 80%;
          background-repeat: repeat-x;
          background-size: 10px 12px;
          color: var(--inverseNeutral);
          text-decoration: none;
          transition: all 0.5s;
        }
        .hoverEffect:hover {
          background-size: 9px 80px;
          color: var(--inverseNeutral);
        }
      `}</style>
    </>
  )
}

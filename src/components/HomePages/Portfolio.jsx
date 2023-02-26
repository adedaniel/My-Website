import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Paypool1Image from "../ImageExports/Paypool1Image"
import Paypool2Image from "../ImageExports/Paypool2Image"
import PaypoolMainImage from "../ImageExports/PaypoolMainImage"
import Emerald1Image from "../ImageExports/Emerald1Image"
import Emerald2Image from "../ImageExports/Emerald2Image"
import EmeraldMainImage from "../ImageExports/EmeraldMainImage"
import Swapbase1Image from "../ImageExports/Swapbase1Image"
import Swapbase2Image from "../ImageExports/Swapbase2Image"
import SwapbaseMainImage from "../ImageExports/SwapbaseMainImage"
import MCB1Image from "../ImageExports/MCB1Image"
import MCB2Image from "../ImageExports/MCB2Image"
import MCBMainImage from "../ImageExports/MCBMainImage"

// import AniLink from "gatsby-plugin-transition-link/AniLink";

import { OutboundLink } from "gatsby-plugin-google-analytics"
import { colors } from "../styles/styles"
export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              date
              title
              category
              link
              code
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="pt-1 bgColor">
        <div className="text-center py-5" id="made">
          <h1 className="mb-1 bgGrey mt20">Featured Projects</h1>
          <div className="lineWrapper mb-4">
            <div className="innerLine"></div>
          </div>
          {data.allMarkdownRemark.edges.map(project => (
            <div key={project.node.id} className="eachProjectList my-5">
              <Link
                className="text-decoration-none"
                to={project.node.frontmatter.path}
              >
                <div className="container my-5">
                  <div className="row text-left portfolioWrapper py5 pl5 bgPrimaryGrey">
                    <div className="col-md-4 caption">
                      <h1 className="h1 inverseNeutral">
                        {project.node.frontmatter.title}
                      </h1>
                      <p className="greyText float-left">
                        {project.node.frontmatter.category}
                      </p>
                      <div className="verticalLine"></div>
                      <p className="greyText float-left">
                        {project.node.frontmatter.date}
                      </p>
                      <h5 className="hoverEffect position-absolute mt-4">
                        Details
                      </h5>
                    </div>

                    {project.node.frontmatter.code === "mcb" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <MCB2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <MCBMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <MCB1Image />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.node.frontmatter.code === "paypool" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <Paypool2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <PaypoolMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <Paypool1Image />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.node.frontmatter.code === "swapbase" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <Swapbase2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <SwapbaseMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <Swapbase1Image />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.node.frontmatter.code === "emerald" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <Emerald2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <EmeraldMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <Emerald1Image />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="container text-left extra">
            <h5 className="text-left inverseNeutral mt-5">
              I've also got some personal projects where I put into action some
              of the things I have recently learned:
              <br />-{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/adedaniel/graphql-apollo-shopping-cart"
              >
                GraphQL-Apollo Shopping Cart
              </a>
              <br />-{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/adedaniel/Next.js-Firebase-Boilerplate"
              >
                Next.js & Firebase/Firestore Boilerplate
              </a>
              <br />-{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/adedaniel/currency-exchange-app"
              >
                Currency exchange app with Typescript and Tailwind CSS
              </a>
              <br />-{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/adedaniel/formik-yup-signup-form"
              >
                Simple signup form using Formik and Yup validation
              </a>
              <br />-{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/adedaniel/react-native-music-player"
              >
                React Native Music Player
              </a>
              <br />
              <br />{" "}
              <OutboundLink
                href="https://github.com/adedaniel?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span className="hoverSmallEffect">
                  <strong>And a lot more here.</strong>
                </span>
              </OutboundLink>
            </h5>
            <h5 className="text-left inverseNeutral">
              I'm very willing to tell you anything you need to know about my
              works. Do reach out!
            </h5>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mt20 {
          margin-top: 25px;
        }
        .eachProjectList:nth-child(even) .col-md-8 {
          left: -40%;
        }
        .eachProjectList:nth-child(even) .col-md-4 {
          right: -60%;
        }
        .extra {
          padding: 30px 10%;
        }
        .verticalLine {
          width: 2px;
          height: 20px;
          background-color: var(--primary);
          float: left;
          margin: 0 7px;
        }
        .py5 {
          padding: 45px 0;
        }
        .pl5 {
          padding-left: 55px;
        }
        .greyText {
          color: var(--greyText);
        }
        .image1 {
          position: absolute;
          margin-top: 25px;
          margin-left: 65px;
        }
        .image2 {
          position: absolute;
          z-index: 1;
          margin-top: -26px;
          margin-left: 110px;
        }

        .mainImgWrapper {
          width: 190px;
          height: 100px;
        }
        .caption {
          padding: 20px 0;
        }
        .inverseNeutral {
          color: var(--inverseNeutral);
        }
        .h1 {
          font-size: 40px;
          font-weight: bold;
        }
        .portfolioWrapper {
          margin: 0 100px;
          box-shadow: 0;
          cursor: pointer;
          transition: 0.3s;
        }
        .portfolioWrapper:hover {
          box-shadow: -5px 8px 15px rgba(0, 0, 0, 0.1),
            0 47px 50px rgba(0, 0, 0, 0.03);
        }
        .gwd-p-1miv {
          height: auto;
          left: 0px;
          position: relative;
          top: 0px;
          transform-style: preserve-3d;
          transform-origin: 78.5446px 18px 0px;
          transform: translate3d(12px, 10px, -7px) rotateZ(-31.805deg)
            rotateY(37.7127deg) rotateX(33.7036deg);
          box-shadow: -9px 7px 15px rgba(0, 0, 0, 0.4),
            0 47px 50px rgba(0, 0, 0, 0.03);
        }
        @media (min-width: 992px) and (max-width: 1035px) {
          .portfolioWrapper {
            margin: 0 !important;
          }
          .pl5 {
            padding-left: 12px;
          }
        }

        @media (min-width: 768px) and (max-width: 1085px) {
          .portfolioWrapper {
            margin: 0 !important;
          }
        }
        @media (min-width: 781px) and (max-width: 991px) {
          .eachProjectList:nth-child(even) .col-md-8 {
            left: -50%;
          }
        }
        @media (min-width: 1086px) and (max-width: 1220px) {
          .eachProjectList:nth-child(even) .col-md-8 {
            left: -60%;
          }
        }
        @media (min-width: 768px) and (max-width: 780px) {
          .pl5 {
            padding-left: 12px;
          }
        }
        @media (max-width: 768px) {
          .eachProjectList:nth-child(even) .col-md-8 {
            left: auto;
          }
          .eachProjectList:nth-child(even) .col-md-4 {
            right: auto;
          }
          .h1 {
            font-size: x-large;
          }
          .portfolioWrapper {
            margin: 0 !important;
          }
          .caption {
            padding-bottom: 0;
          }
          .pl5 {
            padding: 30px 25px 90px 25px;
          }
          .mainImgWrapper {
            width: 150px;
          }
          .col-md-8 {
            padding: 0 !important;
          }
        }
        @media (max-width: 575px) {
          .mainImgWrapper {
            width: 40% !important;
          }
          .image1 {
            margin-top: -5%;
          }
          .image2 {
            margin-left: 33%;
          }
        }
        .bgSecondary {
          background-color: var(--bg) !important;
        }
        .invNeutral {
          color: var(--inverseNeutral);
        }
        .bgGrey {
          color: var(--greyText);
        }
        .bgColor {
          background-color: var(--bg);
        }
        .lineWrapper {
          width: 280px;
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
        .hoverEffect {
          background: linear-gradient(
            to bottom,
            ${colors.primary} 0%,
            ${colors.primary} 100%
          );
          background-position: 0 80%;
          background-repeat: repeat-x;
          background-size: 10px 6px;
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

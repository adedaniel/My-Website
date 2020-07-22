import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HNYMainImage from "../ImageExports/HNYMainImage"
import HNY1Image from "../ImageExports/HNY1Image"
import HNY2Image from "../ImageExports/HNY2Image"
import Corvs2Image from "../ImageExports/Corvs2Image"
import CorvsMainImage from "../ImageExports/CorvsMainImage"
import Corvs1Image from "../ImageExports/Corvs1Image"
import Portfolio2Image from "../ImageExports/Portfolio2Image"
import PortfolioMainImage from "../ImageExports/PortfolioMainImage"
import Portfolio1Image from "../ImageExports/Portfolio1Image"
import YemiBat2Image from "../ImageExports/YemiBat2Image"
import YemiBatMainImage from "../ImageExports/YemiBatMainImage"
import YemiBat1Image from "../ImageExports/YemiBat1Image"
import Basemailer2Image from "../ImageExports/Basemailer2Image"
import BasemailerMainImage from "../ImageExports/BasemailerMainImage"
import Basemailer1Image from "../ImageExports/Basemailer1Image"

// import AniLink from "gatsby-plugin-transition-link/AniLink";

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
          <h1 className="mb-1 bgGrey mt20">Projects</h1>
          <div className="lineWrapper mb-4">
            <div className="innerLine"></div>
          </div>
          {data.allMarkdownRemark.edges.map(project => (
            <div key={project.node.id} className="eachProjectList my-5">
              <a
                className="text-decoration-none"
                href={project.node.frontmatter.path}
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

                    {project.node.frontmatter.code === "basemailer" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <Basemailer2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <BasemailerMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <Basemailer1Image />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.node.frontmatter.code === "hny" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <HNY2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <HNYMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <HNY1Image />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.node.frontmatter.code === "portfolio" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <Portfolio2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <PortfolioMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <Portfolio1Image />
                          </div>
                        </div>
                      </div>
                    )}
                    {project.node.frontmatter.code === "corvs" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <Corvs2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <CorvsMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <Corvs1Image />
                          </div>
                        </div>
                      </div>
                    )}
                    {project.node.frontmatter.code === "yemibat" && (
                      <div className="col-md-8">
                        <div className="mainImgWrapper image2">
                          <div className="gwd-p-1miv">
                            <YemiBat2Image />
                          </div>
                        </div>
                        <div className="mainImgWrapper">
                          <div className="gwd-p-1miv">
                            <YemiBatMainImage />
                          </div>
                        </div>
                        <div className="mainImgWrapper image1">
                          <div className="gwd-p-1miv">
                            <YemiBat1Image />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
          <div className="container text-left extra  mt-5">
            <h5 className="text-left inverseNeutral">
              I have also worked on a bitcoin rate converter, an online event
              ticketing system, school and property management platforms, a
              roboadvisor for a popular investment company, a modern payment
              gateway application, an election prediction system among many
              others I may not be able to showcase here cos, yunno, they're not
              live yet. <br />
              <br />
              Nevertheless, I'm very willing to tell you anything you need to
              know about them if you're interested. Just reach out!
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

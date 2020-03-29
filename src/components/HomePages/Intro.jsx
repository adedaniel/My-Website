import React from "react"
import Typed from "react-typed"
import { colors } from "../styles/styles"

export default function Intro({ queryData }) {
  return (
    <div>
      <div className=" w-100 bgColor" id="start">
        <div className=" vh100 d-table-cell vAlign ">
          <div className="container captions">
            <h2 className="textColor">HI THERE, </h2>
            <h1 className="textColor fontTwo">
              I'M{" "}
              <strong className="font-weight-bold">
                <span className="hoverEffect biggerText">
                  <Typed
                    strings={[
                      "ADEDANIEL^3000",
                      "ADEVELOPER",
                      "ADESIGNER",
                      "ADEBONAIR",
                    ]}
                    typeSpeed={80}
                    backSpeed={250}
                    backDelay={2000}
                    smartBackspace={true}
                    cursorChar={"_"}
                    loop={true}
                  />
                </span>
              </strong>
            </h1>
            <hr className="mb-1" />
            <div className="contacts">
              <a target="_blank" href={queryData.twitter}>
                <div className="eachLink d-inline-block">
                  <div className="innerTwitterLink">
                    <div className="hoverIcon">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div className=" hoverIcon">
                      <i
                        className="fa fa-twitter text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </a>
              <a target="_blank" href={queryData.linkedin}>
                <div className="eachLink d-inline-block">
                  <div className="innerLinkedInLink">
                    <div className="hoverIcon">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div className=" hoverIcon">
                      <i
                        className="fa fa-linkedin text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </a>
              <a target="_blank" href={queryData.youtube}>
                <div className="eachLink d-inline-block">
                  <div className="innerYouTubeLink">
                    <div className="hoverIcon">
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </div>
                    <div className=" hoverIcon">
                      <i
                        className="fa fa-youtube text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </a>
              <a target="_blank" href={queryData.github}>
                <div className="eachLink d-inline-block">
                  <div className="innerGithubLink">
                    <div className="hoverIcon">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </div>
                    <div className=" hoverIcon">
                      <i
                        className="fa fa-github text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </a>
              <a target="_blank" href={queryData.facebook}>
                <div className="eachLink d-inline-block">
                  <div className="innerFacebookLink">
                    <div className="hoverIcon">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div className=" hoverIcon">
                      <i
                        className="fa fa-facebook text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <a href={`mailto:${queryData.email}`}>
              <button className="outlinedButton">Get in Touch</button>
            </a>
          </div>
        </div>
        <div className="text-center w-100">
          <div className="animated infinite bounce slow">
            <i className="fa fa-angle-down angles" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div></div>
      <style jsx>{`
        .angles {
          color: ${colors.primary};
          font-size: 40px;
        }
        .outlinedButton {
          background-color: transparent;
          border: 2px solid ${colors.primary};
          width: 260px;
          margin: 10px 0;
          height: 55px;
          color: var(--inverseNeutral);
          font-size: 20px;
          border-radius: 40px;
          outline: 0 !important;
          transition: 0.3s;
        }
        .outlinedButton:hover {
          background-color: ${colors.primary};
          transition: 0.3s;
          color: var(--neutral);
        }
        .innerTwitterLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerTwitterLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #00acee;
        }
        .innerLinkedInLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerLinkedInLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #0e76a8;
        }
        .innerYouTubeLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerYouTubeLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #c4302b;
        }
        .innerGithubLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerGithubLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #211f1f;
        }
        .innerFacebookLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerFacebookLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #3b5998;
        }

        .hoverIcon {
          font-size: 25px;
          padding: 15px 0;
          text-align: center;
          color: var(--greyText);
        }
        .eachLink {
          overflow: hidden;
          width: 50px;
          height: 60px;
        }
        .bgTwitter {
          background-color: lightblue;
        }
        .break {
          display: block;
        }
        .vh100 {
          height: calc(95vh - 49px);
        }
        .captions {
          width: calc(100vw - 0px);
        }
        @media (min-width: 1069px) {
          .fontTwo {
            font-size: 10vh;
          }
          .captions {
            padding: 0px 13%;
          }
        }
        @media (min-width: 768px) and (max-width: 1068px) {
          .fontTwo {
            font-size: 8vh;
          }
        }
        @media (min-width: 992px) {
          .vh100 {
            height: calc(95vh - 0px);
          }
          .captions {
            width: calc(100vw - 282px);
          }
        }
        @media (max-width: 991px) {
          .vAlign {
            width: 100vw;
          }
        }
        @media (max-width: 767px) {
          .fontTwo {
            font-size: 6vh;
          }
        }
        .textColor {
          color: var(--inverseNeutral);
        }
        .biggerText {
          font-weight: 800;
        }
        .bgColor {
          background-color: var(--bg);
        }
        .vAlign {
          vertical-align: middle;
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
    </div>
  )
}

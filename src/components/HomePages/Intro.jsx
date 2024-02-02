import React, { useContext } from "react"
import Typed from "react-typed"
import { colors } from "../styles/styles"
import Button from "../button"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import BGImageBackground from "../ImageExports/BGImageBackground"
import BGImageDarkBackground from "../ImageExports/BGImageDarkBackground"
import MyContext from "../Context"

export default function Intro({ queryData }) {
  const { theme } = useContext(MyContext)
  return (
    <>
      <div className="bgColor">
        <div className="w-100 backgroundCover">
          {theme === "dark" ? (
            <BGImageDarkBackground>
              <div>
                <div className=" w-100">
                  <div className=" bg-vh100 d-table-cell vAlign "></div>
                </div>
                <div></div>
              </div>
            </BGImageDarkBackground>
          ) : (
            <BGImageBackground>
              <div>
                <div className=" w-100">
                  <div className=" bg-vh100 d-table-cell vAlign "></div>
                </div>
                <div></div>
              </div>
            </BGImageBackground>
          )}
        </div>
      </div>
      <div className="overLay">
        <div className=" w-100" id="home">
          <div className=" vh100 d-table-cell vAlign ">
            <div className="container captions">
              <div className="typeWrapper">
                <h1 className="textColor fontTwo">
                  <strong className="font-weight-bold">
                    <span className=" biggerText">
                      <Typed
                        strings={[
                          "SENIOR <br/> SOFTWARE ENGINEER",
                          "BUILDING <br/> TOMORROW'S TECH",
                          "I AM <br/> ADEDANIEL^5000",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        // fadeOut='true'
                        // fadeOutDelay={500}
                        backDelay={2000}
                        smartBackspace={true}
                        cursorChar={"_"}
                        loop={true}
                      />
                    </span>
                  </strong>
                </h1>
              </div>
              <hr className="m-0" />
              <div className="contacts">
                <OutboundLink
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={queryData.twitter}
                >
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
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={queryData.linkedin}
                >
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
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={queryData.youtube}
                >
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
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={queryData.github}
                >
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
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={queryData.whatsapp}
                >
                  <div className="eachLink d-inline-block">
                    <div className="innerWhatsappLink">
                      <div className="hoverIcon">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </div>
                      <div className=" hoverIcon">
                        <i
                          className="fa fa-whatsapp text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </OutboundLink>
              </div>
              <OutboundLink href={`mailto:${queryData.email}`}>
                <Button
                  text="Get in Touch"
                  radius="40px"
                  width="260px"
                  margin="10px 0"
                  height="55px"
                />
              </OutboundLink>
            </div>
          </div>
          <div className="text-center arrow w-100">
            <div className="animated infinite bounce slow">
              <i className="fa fa-angle-down angles" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <style jsx>{`
        .overLay {
          margin-top: -93.6vh;
          position: absolute;
        }
        .backgroundCover {
          opacity: 0.1;
        }
        .typeWrapper {
          height: 150px;
        }
        .arrow {
          height: 70px;
        }
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
        .innerWhatsappLink {
          margin-top: 0px;
          transition: 0.3s;
          background-color: transparent;
        }
        .innerWhatsappLink:hover {
          margin-top: -70px;
          transition: 0.3s;
          background-color: #25d366;
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
          height: calc(95vh - 110px);
        }
        .bg-vh100 {
          height: calc(95vh - 7px);
        }

        .captions {
          width: calc(100vw - 0px);
        }
        @media (min-width: 1069px) {
          .fontTwo {
            font-size: 9vh;
          }
          .captions {
            padding: 0px 3%;
          }
        }
        @media (min-width: 1440px) {
          .fontTwo {
            font-size: 7vh !important;
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
          .bg-vh100 {
            height: calc(100vh - 0px);
          }
          .overLay {
            margin-top: -101.6vh;
          }
          .captions {
            width: calc(100vw - 282px);
          }
        }
        @media (max-width: 991px) {
          .vAlign {
            width: 100vw;
          }
          .typeWrapper {
            height: 140px;
          }
        }
        @media (max-width: 767px) {
          .fontTwo {
            font-size: 5vh;
          }
          .typeWrapper {
            height: 86px;
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
    </>
  )
}

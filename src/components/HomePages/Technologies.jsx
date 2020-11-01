import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { colors } from "../styles/styles"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

export default function Technologies() {
  const data = useStaticQuery(graphql`
    query {
      JavascriptImages: allFile(
        filter: { relativeDirectory: { eq: "javascript" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid ##Adds blur-in Preloader
            }
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG ##Adds B/W Preloader
            }
          }
        }
      }
      CssImages: allFile(
        filter: { relativeDirectory: { eq: "css-frameworks" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid ##Adds blur-in Preloader
            }
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG ##Adds B/W Preloader
            }
          }
        }
      }
      DevHostingImages: allFile(
        filter: { relativeDirectory: { eq: "dev-hosting" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid ##Adds blur-in Preloader
            }
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG ##Adds B/W Preloader
            }
          }
        }
      }

      TestingImages: allFile(filter: { relativeDirectory: { eq: "testing" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid ##Adds blur-in Preloader
            }
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG ##Adds B/W Preloader
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="pt-1 bgPrimaryGrey">
        <div className="text-center py-5" id="uses">
          <h1 className="mb-1 bgGrey mt20">Technologies</h1>
          <div className="lineWrapper mb-4">
            <div className="innerLine"></div>
          </div>

          <div className="container mt-5 text-left">
            <p className="bgGrey text-center">
              With a variety of technologies to work with, you can be sure to
              get the very best
            </p>
            <div className="row mt-5">
              <div className="col-sm-6 p0 textLeftPadding">
                <div className="techCaption d-table">
                  <div className="captionArea">
                    <h3 className="fontBold">JAVASCRIPT</h3>
                    <p className="text-justify">
                      I have a vast amount of experience building websites and
                      web applications with modern frameworks such as Vanilla
                      JS, jQuery, React, Redux (Toolkit), Electron, React
                      Native, Typescript, Next JS for server side rendering, and
                      JAMstack with Gatsby JS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 imageLeftPadding">
                <div className="bgSecondary">
                  <Carousel
                    autoPlay={1200}
                    slidesPerPage={2}
                    animationSpeed={1100}
                    infinite
                  >
                    {data.JavascriptImages.nodes.map(jsImage => (
                      <div key={jsImage.id} className="carouselWrapper h250">
                        <Img
                          fluid={jsImage.childImageSharp.fluid}
                          durationFadeIn={500}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6 imageRightPadding">
                <div className="bgSecondary">
                  <Carousel
                    autoPlay={1200}
                    slidesPerPage={2}
                    rtl
                    animationSpeed={1100}
                    infinite
                  >
                    {data.CssImages.nodes.map(cssImage => (
                      <div key={cssImage.id} className="carouselWrapper h250">
                        <Img
                          fluid={cssImage.childImageSharp.fluid}
                          durationFadeIn={500}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="col-sm-6 p0 ">
                <div className="techCaption d-table">
                  <div className="captionArea">
                    <h3 className="fontBold">CSS</h3>
                    <p className="text-justify">
                      I produce responsive markup styles with an emphasis on
                      accessibility and performance. I'm also familiar with many
                      CSS frameworks and extensions like Bootstrap, Chakra UI,
                      Material UI, Styled Components, styled-jsx, Sass, Ant
                      Design and many others
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6 p0 textLeftPadding">
                <div className="techCaption d-table">
                  <div className="captionArea">
                    <h3 className="fontBold">DEV OPS</h3>
                    <p className="text-justify">
                      I have a passion for scripting and coding and improving
                      the planning of test and deployment in order to build,
                      test, and release software faster and more reliably.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 imageLeftPadding">
                <div className="bgSecondary">
                  <Carousel
                    autoPlay={1200}
                    slidesPerPage={2}
                    animationSpeed={1100}
                    infinite
                  >
                    {data.DevHostingImages.nodes.map(devHostingImage => (
                      <div
                        key={devHostingImage.id}
                        className="carouselWrapper h250"
                      >
                        <Img
                          fluid={devHostingImage.childImageSharp.fluid}
                          durationFadeIn={500}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-6 imageRightPadding">
                <div className="bgSecondary">
                  <Carousel
                    autoPlay={1200}
                    slidesPerPage={2}
                    animationSpeed={1100}
                    infinite
                    rtl
                  >
                    {data.TestingImages.nodes.map(testingImage => (
                      <div
                        key={testingImage.id}
                        className="carouselWrapper h250"
                      >
                        <Img
                          fluid={testingImage.childImageSharp.fluid}
                          durationFadeIn={500}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className="col-sm-6 p0 ">
                <div className="techCaption d-table">
                  <div className="captionArea">
                    <h3 className="fontBold">TESTING AND LINTING</h3>
                    <p className="text-justify">
                      I strive to follow best practices using Test Driven
                      Development with Jest and linting with ESLint, Prettier
                      among others
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .mt20{
          margin-top: 25px
        }
        .bgSecondary {
          background-color: var(--bg) !important;
        }
        .carouselWrapper{
          width: 200px;
          padding-top: 30px;
          margin: 0 auto;
          background-color: transparent
        }
        .h250{
          height: 250px;
        }
        .imageLeftPadding{
          padding-left: 0;
        }
        .imageRightPadding{
          padding-right: 0;
        }
        .fontBold{
          font-weight: bold
        }
        .p0{
          padding: 0
        }
        .techCaption{
          width: inherit;
          padding: 10px 20px;
          height: 250px;
          background-color: ${colors.primary};
        }
        .invNeutral{
          color: var(--inverseNeutral)
        }
          .bgGrey{
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
          .hImage {
            height: 567px;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .captionArea {
            display: table-cell;
            vertical-align: middle;
          }
          .pFont{
            font-size: 18px;
            padding-right: 20px
          
          }
          @media(max-width: 767px){
            .imageLeftPadding{
              padding: 0px;
            }
          }
          @media(max-width: 575px){
            .imageLeftPadding{
              padding: 0px;
            position: absolute;
            }
            .imageRightPadding{
              padding: 0;
            }
            .textLeftPadding{
              margin-top: 150px
            }
            .techCaption{
              
              height: 200px;
            }
            .h250{
              height: 150px;
            }
            .carouselWrapper{
              width: 100px;
             
            }
          }
      .bgPrimaryGrey{
        background-color: var(--bgGrey)
      }
      .lineWrapper{
        width: 180px;
        height: 3px;
        background: lightgray;
        margin: 0 auto;
      }
      .innerLine{
        width: 50px;
      background: var(--primary);
      height: 3px;
      margin: 0 auto;
      }
      `}
      </style>
    </>
  )
}

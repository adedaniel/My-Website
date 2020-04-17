import React from "react"
import PortraitImage from "../ImageExports/PortraitImage"
import { colors } from "../styles/styles"
export default function About() {
  return (
    <>
      <div className="pt-1 bgPrimaryGrey">
        <div className="text-center pt-5" id="is">
          <h1 className="mb-1 bgGrey mt20">About Me</h1>
          <div className="lineWrapper">
            <div className="innerLine"></div>
          </div>
          <div className="container text-left mt-5">
            <div className="row">
              <div className="col-md-5 px-0 overflow-hidden">
                <PortraitImage />
              </div>

              <div className="col-md-7 d-table captionParent hImage">
                <div className="captionArea">
                  <h1 className="invNeutral h1">
                    I make <span className="hoverEffect">things</span> <br />{" "}
                    that <strong> make</strong> a{" "}
                    <span className="hoverEffect">difference</span>.
                  </h1>

                  <p className="pFont text-justify invNeutral">
                    <br />
                    Hi, my name is Adetola Daniel. <br />
                    <br />
                    I'm basically a really creative, fun and talented guy. I'm
                    also an expert front-end web developer who's really good in
                    React, Next, Gatsby and Vanilla JS as well. I've been coding
                    for about 4 years or so now.
                    <br />
                    <br />
                    I’m very passionate about building excellent software that
                    improves the lives of those around me. So I create powerful
                    software for clients ranging from your friendly neighbour all the way to large
                    corporations.
                    <br />
                    <br />
                    When I'm not smacking a keyboard, you can bet I'm either
                    playing a piano or a video game, eating or spending time
                    with my family.
                    <br />
                    <br />
                    You can also check out my CV <a href="#" className='text-decoration-none'> <span className="hoverSmallEffect"><strong>here</strong></span></a>
                  </p>
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
        .hoverSmallEffect {
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
        
        }
        @media(max-width: 767px){
          .pFont{
            padding-right: 0px
          
          }
        }
        @media(max-width: 437px){
          .h1{
        font-size: 2.0rem;
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

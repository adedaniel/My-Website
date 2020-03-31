import React from "react"
import { colors } from "../styles/styles"

export default function Technologies() {
  return (
    <>
      <div className="pt-1 bgPrimaryGrey">
        <div className="text-center mt-5" id="me">
          <h1 className="mb-1 bgGrey">Technologies</h1>
          <div className="lineWrapper">
            <div className="innerLine"></div>
          </div>

          <div className="mt-5 invNeutral">Hello</div>
        </div>
      </div>

      <style>
        {`
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

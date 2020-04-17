import React from 'react'
import { colors } from "./styles/styles"
import HNY2Image from './ImageExports/HNY2Image'
import HNYMainImage from './ImageExports/HNYMainImage'
import HNY1Image from './ImageExports/HNY1Image'
import Corvs2Image from './ImageExports/Corvs2Image'
import CorvsMainImage from './ImageExports/CorvsMainImage'
import Corvs1Image from './ImageExports/Corvs1Image'
import Portfolio2Image from './ImageExports/Portfolio2Image'
import PortfolioMainImage from './ImageExports/PortfolioMainImage'
import Portfolio1Image from './ImageExports/Portfolio1Image'
import YemiBat2Image from './ImageExports/YemiBat2Image'
import YemiBatMainImage from './ImageExports/YemiBatMainImage'
import YemiBat1Image from './ImageExports/YemiBat1Image'

import Button from './button'

export default function ProjectDetails({ html, frontmatter }) {
  return (
    <div>
      <div>
        <div className='overflow-hidden bg'>
          <div className='container '>
            <div className="vh100">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 pl-4 overflow-hidden">
                    <div className=" vh100 d-table-cell vAlign ">
                      <div className="captions">
                        <h1 className='h1 invNeutral'>{frontmatter.title}</h1>
                        <p className='greyText float-left'>{frontmatter.category}</p>
                        <div className="verticalLine"></div>
                        <p className='greyText float-left'>{frontmatter.date}</p>
                        <a target='_blank' rel="noopener noreferrer" href={frontmatter.link}>
                          <Button text='View Website' radius='40px'
                            width='200px'
                            margin='10px 0'
                            height='50px'
                            font='18px'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 d-table captionParent hImage">
                    <div className="captionArea">

                      {frontmatter.code === 'hny' ?
                        <div className="captionArea">
                          <div className="mainImgWrapper image2">
                            <div className='gwd-p-1miv'>
                              <HNY2Image />
                            </div>
                          </div>
                          <div className="mainImgWrapper">
                            <div className='gwd-p-1miv'>
                              <HNYMainImage />
                            </div>
                          </div>
                          <div className="mainImgWrapper image1">
                            <div className='gwd-p-1miv'>
                              <HNY1Image />
                            </div>
                          </div>

                        </div>

                        : ""}

                      {frontmatter.code === 'portfolio' ?
                        <div className="captionArea">
                          <div className="mainImgWrapper image2">
                            <div className='gwd-p-1miv'>
                              <Portfolio2Image />
                            </div>
                          </div>
                          <div className="mainImgWrapper">
                            <div className='gwd-p-1miv'>
                              <PortfolioMainImage />
                            </div>
                          </div>
                          <div className="mainImgWrapper image1">
                            <div className='gwd-p-1miv'>
                              <Portfolio1Image />
                            </div>
                          </div>

                        </div>

                        : ""}
                      {frontmatter.code === 'corvs' ?
                        <div className="captionArea">
                          <div className="mainImgWrapper image2">
                            <div className='gwd-p-1miv'>
                              <Corvs2Image />
                            </div>
                          </div>
                          <div className="mainImgWrapper">
                            <div className='gwd-p-1miv'>
                              <CorvsMainImage />
                            </div>
                          </div>
                          <div className="mainImgWrapper image1">
                            <div className='gwd-p-1miv'>
                              <Corvs1Image />
                            </div>
                          </div>

                        </div>

                        : ""}

                      {frontmatter.code === 'yemibat' ?
                        <div className="captionArea">
                          <div className="mainImgWrapper image2">
                            <div className='gwd-p-1miv'>
                              <YemiBat2Image />
                            </div>
                          </div>
                          <div className="mainImgWrapper">
                            <div className='gwd-p-1miv'>
                              <YemiBatMainImage />
                            </div>
                          </div>
                          <div className="mainImgWrapper image1">
                            <div className='gwd-p-1miv'>
                              <YemiBat1Image />
                            </div>
                          </div>

                        </div>

                        : ""}

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bgPrimaryGrey py-5 ">
        <div className="container">
          <div className='invNeutral details'>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            <a href='/#made' className='text-decoration-none'>
              <h5 className="invNeutral text-center my-5">
                <span className="hoverEffect">View other projects</span>
              </h5>
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
                .details{
                    padding: 0 170px
                }
                .gwd-p-1miv {
                    height: auto;
                    left: 0px;
                    position: relative;
                    top: 0px;
                    transform-style: preserve-3d;
                    transform-origin: 78.5446px 18px 0px;
                    transform: translate3d(12px,10px,-7px) rotateZ(-31.805deg) rotateY(37.7127deg) rotateX(33.7036deg);
                    box-shadow: -9px 7px 15px rgba(0,0,0,0.4), 0 47px 50px rgba(0,0,0,0.03);
                  }
             
.image1{
    position: absolute;
    margin-top: 25px;
    margin-left: 65px;
  }
  .image2{
    position: absolute;
  z-index: 1;
  margin-top: -26px;
  margin-left: 110px;
}
    
    .mainImgWrapper{
      width: 22vw;
      height: 100px;
    }
    .caption{
      padding: 20px 0
    }
                .greyText{
                    color: var(--greyText);
                  }
                .verticalLine{
                    width: 2px;
                height: 20px;
                background-color: var(--primary);
                float: left;
                margin: 0 7px;
                  }
                .h1{
                    font-size: 50px;
                    font-weight: bold
                  }
                .textColor {
                    color: var);
                  }
                .vAlign {
                    vertical-align: middle;
                  }
          .vh100{
              height: calc(100vh - 49px)
          }
          @media (min-width: 992px) and (max-width: 1035px){
            .portfolioWrapper{
              margin: 0 !important;
            }
            .pl5{
              padding-left: 12px
    
            }
          }
          @media (min-width: 992px) and (max-width: 1085px){
            .details {
                padding: 0 105px;
            }
          }
    
          @media (min-width: 768px) and (max-width: 1085px){
            .portfolioWrapper{
              margin: 0 !important;
            }
            .details {
                padding: 0 50px;
            }
          }
          @media (min-width: 768px) and (max-width: 780px){
          
            .pl5{
              padding-left: 12px
    
            }
          }
          @media (max-width: 768px){
            .details {
                padding: 0 20px;
            }
            .captionArea {
                padding-top: 70px;
                display: block !important;
            }
            .h1 {
              font-size: xx-large;
          }
            .portfolioWrapper{
              margin: 0 !important;
            }
            .caption {
              padding-bottom: 0;
          }
            .pl5{
              padding: 30px 25px 90px 25px;
            }
            .mainImgWrapper{
              width: 30vw;
          }
          .col-md-8 {
            padding: 0 !important
          }
          }
          @media (max-width: 575px){
            .mainImgWrapper{
              width: 40% !important;
          }
          .image1 {
            margin-top: -5%;
        }
        .image2 {
          margin-left: 33%;
      }
    
      }   
          .invNeutral{
            color: var(--inverseNeutral)
          }
            .bgGrey{
              color: var(--greyText);
            }
            .bg{
                background-color: var(--bg);
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
            .hImage {
              height: 70vh;
             
            }
            .captionArea {
              display: table-cell;
              vertical-align: middle;
            }
            .pFont{
              font-size: 18px;
            
            }
            @media(max-width: 767px){
                .hImage {
                    height: 54vh;
                  }
.vh100{
    padding-top: 60px;
    height: auto
}
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
    </div >
  )
}

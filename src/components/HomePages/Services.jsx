import React from "react"
import DevelopmentImage from "../ImageExports/DevelopmentImage"
import UpdateImage from "../ImageExports/UpdateImage"
import UIImage from "../ImageExports/UIImage"
import FastImage from "../ImageExports/FastImage"

export default function Services() {
  return (
    <div className="bgColor">
      <div className=" w-100 container  py-5" id="because">
        <div className="text-center" >
          <h1 className="mb-1 bgGrey mt-20">Services</h1>
          <div className="lineWrapper">
            <div className="innerLine"></div>
          </div>

          <div className="main-timeline respMargin">
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <div className="iconWrapper">
                      <DevelopmentImage />
                    </div>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Web Development</h5>
                <p className="description">
                  I create fast, beautiful, cost-effective and efficient
                  websites and web applications with perfect scores in
                  Performance, Accessibility, SEO and Best Practices. All web
                  apps are built with the latest and sophisticated technologies
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <div className="iconWrapper">
                      <UpdateImage />
                    </div>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">State of the Art Solutions</h5>
                <p className="description">
                  It's 2020 and you and your clients should see that in your
                  final product. This involves best practices regarding
                  performance, accessibility, security and usability. This
                  results in appropriate design, secure websites and fast load
                  times.
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <div className="iconWrapper">
                      <UIImage />
                    </div>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">User Interface Design</h5>
                <p className="description">
                  I have an eye for detail, passion for color theory &amp;
                  psychology, enjoy playing with type and breaking the grid. I
                  value simplicity and clarity so I design easy to use and
                  engaging interfaces for desktop and mobile.
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <div className="iconWrapper">
                      <FastImage />
                    </div>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Speed</h5>
                <p className="description">
                  You can be rest assured of Continuous Integration and Delivery
                  at the fastest possible time frames without having to lose out
                  on product quality. So you get what you want, how you want it,{" "}
                  <strong>when you want it.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .mt20{
          margin-top: 20px
        }
          .iconWrapper {
            width: 60px;
            margin: 0 auto;
          }
          .bgColor {
            background-color: var(--bg);
          }

          .main-timeline .timeline:nth-child(1n) .timeline-content {
            padding: 20px 0px 20px 50px;
            text-align: left;
          }
          .main-timeline {
            position: relative;
            color: var(--inverseNeutral);
          }

          .main-timeline:before {
            content: "";
            display: block;
            width: 2px;
            height: 100%;
            background: #c6c6c6;
            margin: 0 auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }

          .main-timeline .timeline {
            margin-bottom: 40px;
            position: relative;
          }

          .main-timeline .timeline:after {
            content: "";
            display: block;
            clear: both;
          }

          .main-timeline .icon {
            width: 18px;
            height: 18px;
            line-height: 18px;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }

          .main-timeline .icon:before,
          .main-timeline .icon:after {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.33s ease-out 0s;
          }

          .main-timeline .icon:before {
            background: #fff;
            border: 2px solid #232323;
            left: -3px;
          }

          .main-timeline .icon:after {
            border: 2px solid #c6c6c6;
            left: 3px;
          }

          .main-timeline .timeline:hover .icon:before {
            left: 3px;
          }

          .main-timeline .timeline:hover .icon:after {
            left: -3px;
          }

          .main-timeline .date-content {
            width: 50%;
            float: left;
            margin-top: 22px;
            position: relative;
          }

          .main-timeline .date-content:before {
            content: "";
            width: 36.5%;
            height: 2px;
            background: #c6c6c6;
            margin: auto 0;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
          }

          .main-timeline .date-outer {
            width: 125px;
            height: 125px;
            font-size: 16px;
            text-align: center;
            margin: auto;
            z-index: 1;
          }

          .main-timeline .date-outer:before,
          .main-timeline .date-outer:after {
            content: "";
            width: 125px;
            height: 125px;
            margin: 0 auto;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            transition: all 0.33s ease-out 0s;
          }

          .main-timeline .date-outer:before {
            background: var(--bg);
            border: 2px solid var(--inverseGreyText);
            left: -6px;
          }

          .main-timeline .date-outer:after {
            border: 2px solid #c6c6c6;
            left: 6px;
          }

          .main-timeline .timeline:hover .date-outer:before {
            left: 6px;
          }

          .main-timeline .timeline:hover .date-outer:after {
            left: -6px;
          }

          .main-timeline .date {
            width: 100%;
            margin: auto;
            position: absolute;
            top: 27%;
            left: 0;
          }

          .main-timeline .month {
            font-size: 18px;
            font-weight: 700;
          }

          .main-timeline .year {
            display: block;
            font-size: 30px;
            font-weight: 700;
            color: #232323;
            line-height: 36px;
          }

          .main-timeline .timeline-content {
            width: 50%;
            padding: 20px 0 20px 50px;
            float: right;
          }

          .main-timeline .title {
            font-size: 22px;
            font-weight: 700;
            line-height: 24px;
            margin: 0 0 15px 0;
          }

          .main-timeline .description {
            margin-bottom: 0;
          }

          .main-timeline .timeline:nth-child(2n) .date-content {
            float: right;
          }

          .main-timeline .timeline:nth-child(2n) .date-content:before {
            left: 10px;
          }

          .main-timeline .timeline:nth-child(2n) .timeline-content {
            padding: 20px 50px 20px 0;
            text-align: right;
          }

          @media only screen and (max-width: 991px) {
            .main-timeline .date-content {
              margin-top: 35px;
            }
            .main-timeline .date-content:before {
              width: 22.5%;
            }
            .main-timeline .timeline-content {
              padding: 10px 0 10px 30px;
            }

            .main-timeline .timeline:nth-child(2n) .timeline-content {
              padding: 10px 30px 10px 0;
            }
          }

          @media only screen and (max-width: 767px) {
            .respMargin {
              margin-top: 30px;
            }
            .main-timeline:before {
              margin: 0;
              left: 7px;
            }
            .main-timeline .timeline {
              margin-bottom: 20px;
            }
            .main-timeline .timeline:last-child {
              margin-bottom: 0;
            }
            .main-timeline .icon {
              margin: auto 0;
            }
            .main-timeline .date-content {
              width: 95%;
              float: right;
              margin-top: 0;
            }
            .main-timeline .date-content:before {
              display: none;
            }
            .main-timeline .date-outer {
              width: 110px;
              height: 110px;
            }
            .main-timeline .date-outer:before,
            .main-timeline .date-outer:after {
              width: 110px;
              height: 110px;
            }
            .main-timeline .date {
              top: 30%;
            }
            .main-timeline .year {
              font-size: 24px;
            }
            .main-timeline .timeline-content,
            .main-timeline .timeline:nth-child(2n) .timeline-content {
              width: 95%;
              text-align: left;
              padding: 20px 0px 20px 50px;
            }
            .main-timeline .title {
              margin-bottom: 10px;
            }
            .main-timeline .timeline:nth-child(1n) .timeline-content {
              padding: 20px 0px 20px 20px !important;
              text-align: left;
          }
          .main-timeline .timeline:nth-child(2n) .timeline-content {
            padding: 20px 0px 20px 20px !important;
            text-align: left;
        }
          }
        `}
      </style>
    </div>
  )
}

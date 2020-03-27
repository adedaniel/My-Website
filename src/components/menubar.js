import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { colors } from "./styles/styles"
import LogoImage from "./ImageExports/LogoImage"

function Header({ siteTitle }) {
  const [active, setActive] = useState(1)
  const [topClass, setTopClass] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "past-main"
      if (window.scrollY === 0) {
        activeClass = ""
      }
      setTopClass(activeClass)
    })
  }, [])
  return (
    <>
      <div className="navbar">
        {
          <nav
            className={`navbar navbar-expand-md ${topClass} effect-main navbar-light bg-white fixed-top`}
          >
            <div className="container container-s menu-wrap">
              <a className="navbar-brand" href="#">
                <div className="w50">
                  <LogoImage />
                </div>
              </a>
              <input type="checkbox" id="toggler" className="toggler" />
              <div className="hamburger">
                <div></div>
              </div>
              <div className="menu">
                <div>
                  <div>
                    <LogoImage />
                    <hr className=" mt-4" />
                    <ul className="p-0 mb-4 mt-2">
                      <li
                        className={`sidebarList ${
                          active === 1 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(1)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5 className="">
                            <strong>HOME</strong>
                          </h5>
                        </a>
                      </li>
                      <li
                        className={`sidebarList ${
                          active === 2 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(2)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5>
                            <strong>ABOUT</strong>
                          </h5>
                        </a>
                      </li>
                      <li
                        className={`sidebarList ${
                          active === 3 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(3)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5>
                            <strong>TECHNOLOGIES</strong>
                          </h5>
                        </a>
                      </li>
                      <li
                        className={`sidebarList ${
                          active === 4 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(4)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5>
                            <strong>EXPERIENCE</strong>
                          </h5>
                        </a>
                      </li>
                      <li
                        className={`sidebarList ${
                          active === 5 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(5)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5>
                            <strong>CLIENTS</strong>
                          </h5>
                        </a>
                      </li>
                      <li
                        className={`sidebarList ${
                          active === 6 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(6)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5>
                            <strong>PORTFOLIO</strong>
                          </h5>
                        </a>
                      </li>
                      <li
                        className={`sidebarList ${
                          active === 7 ? "active" : "inactive"
                        }`}
                        onClick={() => {
                          setActive(7)
                          document.getElementById("toggler").checked = false
                        }}
                      >
                        <a href="#">
                          <h5>
                            <strong>CONTACT</strong>
                          </h5>
                        </a>
                      </li>
                      <hr />
                      <h5 className="textGrey">
                        Theme &nbsp;&nbsp;
                        <button className="darkModeToggler">
                          <i
                            className="fa fa-sun-o textGrey"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </h5>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        }
      </div>

      <div className="vh-100 sidebar bgPrimary">
        <LogoImage />
        <h6 className="my-4 textDarkGrey">
          Web Developer <br /> UI/UX Designer <br />
          Engineering Student <br />
        </h6>
        <hr />
        <ul className="p-0 mb-4">
          <li
            className={`sidebarList ${active === 1 ? "active" : "inactive"}`}
            onClick={() => setActive(1)}
          >
            <a href="#">
              <h5 className="">
                <strong>HOME</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 2 ? "active" : "inactive"}`}
            onClick={() => setActive(2)}
          >
            <a href="#">
              <h5>
                <strong>ABOUT</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 3 ? "active" : "inactive"}`}
            onClick={() => setActive(3)}
          >
            <a href="#">
              <h5>
                <strong>TECHNOLOGIES</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 4 ? "active" : "inactive"}`}
            onClick={() => setActive(4)}
          >
            <a href="#">
              <h5>
                <strong>EXPERIENCE</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 5 ? "active" : "inactive"}`}
            onClick={() => setActive(5)}
          >
            <a href="#">
              <h5>
                <strong>CLIENTS</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 6 ? "active" : "inactive"}`}
            onClick={() => setActive(6)}
          >
            <a href="#">
              <h5>
                <strong>PORTFOLIO</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 7 ? "active" : "inactive"}`}
            onClick={() => setActive(7)}
          >
            <a href="#">
              <h5>
                <strong>CONTACT</strong>
              </h5>
            </a>
          </li>
          <hr />
        </ul>

        <p className="textDarkGrey">
          For business or casual chatter, email me at
          adetoladaniel693@gmail.com.
        </p>
      </div>
      <style jsx>
        {`
          .textGrey {
            color: ${colors.darkGrey};
          }
          .darkModeToggler {
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1),
              0 1px 6px rgba(0, 0, 0, 0.1);
            background-color: transparent;
            padding: 5px 17px;
            border: none;
          }

          .menu-wrap .toggler {
            position: absolute;
            top: 0;
            left: calc(100vw - 80px);
            z-index: 2;
            cursor: pointer;
            width: 50px;
            height: 50px;
            opacity: 0;
          }

          .menu-wrap .hamburger {
            position: absolute;
            top: 0;
            left: calc(100vw - 80px);
            z-index: 1;
            width: 60px;
            height: 100%;
            padding: 1rem;
            background: ${colors.transparent};
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Hamburger Line */
          .menu-wrap .hamburger > div {
            position: relative;
            flex: none;
            width: 100%;
            height: 2px;
            background: ${colors.darkGrey};
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
          }

          /* Hamburger Lines - Top & Bottom */
          .menu-wrap .hamburger > div::before,
          .menu-wrap .hamburger > div::after {
            content: "";
            position: absolute;
            z-index: 1;
            top: -8px;
            width: 100%;
            height: 2px;
            background: inherit;
          }

          /* Moves Line Down */
          .menu-wrap .hamburger > div::after {
            top: 8px;
          }

          /* Toggler Animation */
          .menu-wrap .toggler:checked + .hamburger > div {
            transform: rotate(135deg);
          }

          /* Turns Lines Into X */
          .menu-wrap .toggler:checked + .hamburger > div:before,
          .menu-wrap .toggler:checked + .hamburger > div:after {
            top: 0;
            transform: rotate(90deg);
          }

          /* Rotate On Hover When Checked */
          .menu-wrap .toggler:checked:hover + .hamburger > div {
            transform: rotate(225deg);
          }

          /* Show Menu */
          .menu-wrap .toggler:checked ~ .menu {
            visibility: visible;
          }

          .menu-wrap .toggler:checked ~ .menu > div {
            transform: scale(1);
            transition-duration: 1s;
          }

          .menu-wrap .toggler:checked ~ .menu > div > div {
            opacity: 1;
            transition: opacity 0.4s ease 0.4s;
          }

          .menu-wrap .menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            visibility: hidden;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .menu-wrap .menu > div {
            background: ${colors.offWhite};
            border-radius: 50%;
            width: 292vw;
            height: 292vw;
            display: flex;
            flex: none;
            align-items: center;
            justify-content: center;
            transform: scale(0);
            transition: all 0.4s ease;
          }

          .menu-wrap .menu > div > div {
            text-align: center;
            max-width: 90vw;
            width: 240px;
            max-height: 100vh;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .menu-wrap .menu > div > div > ul > li {
            margin: 0 auto;
            list-style: none;
            color: ${colors.darkGrey};
            font-size: 1.5rem;
            padding: 10px 0;
          }

          .menu-wrap .menu > div > div > ul > li > a {
            text-decoration: none;
            transition: color 0.4s ease;
          }

          .textPrimary {
            color: ${colors.primary};
          }
          .textDarkGrey {
            color: ${colors.darkGrey};
          }
          .sidebar {
            width: 265px;
            padding: 35px 30px;
            position: fixed;
            border-right-width: 1px;
            border-right-color: lightgrey;
            border-right-style: solid;
          }
          .bgPrimary {
            background-color: #fbfbfb;
          }
          .sidebarList {
            width: fit-content;
            padding: 7px 0;
            list-style: none;
            border-bottom-width: 2px;
            border-bottom-color: transparent;
            border-bottom-style: solid;
            transition: all 0.5s;
          }
          .sidebarList a {
            text-decoration: none;
            color: ${colors.darkGrey};
          }
          .sidebarList a h5 {
            margin: 0;
          }
          .sidebarList:hover::after {
            width: 100%;
          }
          .sidebarList.inactive::after {
            content: ""; /* This is necessary for the pseudo element to work. */
            display: block; /* This will put the pseudo element on its own line. */
            width: 0%; /* Change this to whatever width you want. */
            padding-top: 0px; /* This creates some space between the element and the border. */
            border-bottom: 2px solid ${colors.darkGrey}; /* This creates the border. Replace black with whatever color you want. */
            transition: all 0.7s;
          }
          .sidebarList.active a {
            color: ${colors.primary};
          }
          .sidebarList.active {
            /* content: "";  This is necessary for the pseudo element to work. */
            display: block; /* This will put the pseudo element on its own line. */
            width: fit-content; /* Change this to whatever width you want. */
            padding-top: 0px; /* This creates some space between the element and the border. */
            border-bottom: 2px solid ${colors.primary}; /* This creates the border. Replace black with whatever color you want. */
            transition: all 0.7s;
          }
          @media (max-width: 991px) {
            .sidebar {
              display: none;
            }
          }
          @media (min-width: 992px) {
            .navbar {
              display: none;
            }
          }

          .flex {
            flex-direction: row !important;
          }
          .w50 {
            width: 200px;
          }
          .navButton {
            background-color: transparent;
            border: none;
            outline: none;
          }
          .navbar.past-main {
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: rgba(255, 255, 255, 0.99) !important;
            -webkit-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
            -moz-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
            box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
          }

          .navbar.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }

          .navbar.past-main .navbar-brand {
            color: #6d48e5 !important;
          }

          .nav-white.past-main .nav-item .nav-link {
            color: #364655;
            font-weight: 500;
          }

          .navbar.past-main .nav-item .nav-link {
            font-weight: 500;
          }

          .nav-white.past-main .navbar-brand {
            color: #364655;
          }

          .nav-white.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }
        `}
      </style>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

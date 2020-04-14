import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useLayoutEffect } from "react"
import { colors } from "./styles/styles"
import LogoImage from "./ImageExports/LogoImage"

import { ThemeToggler } from "gatsby-plugin-dark-mode"
function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}
function Menubar({ makeActive }) {
  const [width, height] = useWindowSize()
  const [active, setActive] = useState(makeActive || 1)
  const [topClass, setTopClass] = useState("")
  /* View in fullscreen */
  function openFullscreen() {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
      console.log('true');
    }
  }



  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "past-main"
      if (window.scrollY === 0) {
        activeClass = ""
      }
      setTopClass(activeClass)
    })
  }, [])

  const setToggle = (theme, toggleTheme) => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light")
  }
  return (
    <>
      <div className="navbar">
        {
          <nav
            className={`navbar navbar-expand-md ${topClass} effect-main tm-1 navbar-light bgColor fixed-top`}
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
                        <a href="/#">
                          <h5>
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
                        <a href="/#is">
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
                        <a href="/#because">
                          <h5>
                            <strong>SERVICES</strong>
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
                        <a href="/#uses">
                          <h5>
                            <strong>TECHNOLOGIES</strong>
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
                        <a href="/#made">
                          <h5>
                            <strong>PORTFOLIO</strong>
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
                        <a href="/#worked-with">
                          <h5>
                            <strong>CLIENTS</strong>
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
                        <a href="/#is-waiting">
                          <h5>
                            <strong>CONTACT</strong>
                          </h5>
                        </a>
                      </li>
                      <hr className="lineGrey" />
                      <h5 className="textGrey">
                        Theme &nbsp;&nbsp;
                        <ThemeToggler>
                          {({ theme, toggleTheme }) => (
                            // <input
                            //   type="checkbox"
                            //   onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            //   checked={theme === 'dark'}
                            // />
                            <button
                              className="darkModeToggler bgColor"
                              onClick={() => setToggle(theme, toggleTheme)}
                            >
                              {theme === "light" ? (
                                <i
                                  className="fa fa-sun-o textGrey"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                  <i
                                    className="fa fa-moon-o text-white"
                                    aria-hidden="true"
                                  ></i>
                                )}
                            </button>
                          )}
                        </ThemeToggler>
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
        <h6 className="my-4 textdarkTextGrey">
          Web Developer <br /> UI/UX Designer <br />
          Engineering Student <br />
        </h6>
        <hr className="lineGrey" />
        <ul className="p-0 mb-4">
          <li
            className={`sidebarList ${active === 1 ? "active" : "inactive"}`}
            onClick={() => setActive(1)}
          >
            <a href="/#">
              <h5>
                <strong>HOME</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 2 ? "active" : "inactive"}`}
            onClick={() => setActive(2)}
          >
            <a href="/#is">
              <h5>
                <strong>ABOUT</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 3 ? "active" : "inactive"}`}
            onClick={() => setActive(3)}
          >
            <a href="/#because">
              <h5>
                <strong>SERVICES</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 4 ? "active" : "inactive"}`}
            onClick={() => setActive(4)}
          >
            <a href="/#uses">
              <h5>
                <strong>TECHNOLOGIES</strong>
              </h5>
            </a>
          </li>

          <li
            className={`sidebarList ${active === 5 ? "active" : "inactive"}`}
            onClick={() => setActive(5)}
          >
            <a href="/#made">
              <h5>
                <strong>PORTFOLIO</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 6 ? "active" : "inactive"}`}
            onClick={() => setActive(6)}
          >
            <a href="/#worked-with">
              <h5>
                <strong>CLIENTS</strong>
              </h5>
            </a>
          </li>
          <li
            className={`sidebarList ${active === 7 ? "active" : "inactive"}`}
            onClick={() => setActive(7)}
          >
            <a href="/#is-waiting">
              <h5>
                <strong>CONTACT</strong>
              </h5>
            </a>
          </li>
          <hr className="lineGrey" />
          <h5 className="textGrey">
            Theme &nbsp;&nbsp;
            {width >= 992 ? (
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  // <input
                  //   type="checkbox"
                  //   onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  //   checked={theme === 'dark'}
                  // />
                  <button
                    className="darkModeToggler bgColor"
                    onClick={() => setToggle(theme, toggleTheme)}
                  >
                    {theme === "light" ? (
                      <i
                        className="fa fa-sun-o textGrey"
                        aria-hidden="true"
                      ></i>
                    ) : (
                        <i
                          className="fa fa-moon-o text-white"
                          aria-hidden="true"
                        ></i>
                      )}
                  </button>
                )}
              </ThemeToggler>
            ) : (
                ""
              )}
          </h5>
        </ul>

        <small className="textdarkTextGrey">
          For business or casual chatter, email me at
          adetoladaniel693@gmail.com.
        </small>
      </div>
      <style jsx>
        {`
          .bgColor {
            background-color: var(--bg);
          }
          .textGrey {
            color: var(--greyText);
          }
          .darkModeToggler {
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3),
              0 1px 6px rgba(0, 0, 0, 0.3);
            padding: 5px 17px;
            border: none;
            outline: 0 !important;
            border-radius: 40px;
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
            background: var(--greyText);
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
            background: var(--bgGrey);
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
            color: var(--greyText);
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
          .textdarkTextGrey {
            color: var(--greyText);
          }
          .lineGrey {
            background-color: var(--lineGrey);
          }
          .sidebar {
            width: 265px;
            padding: 35px 30px;
            position: fixed;
            border-right-width: 1px;
            border-right-color: var(--lineGrey);
            border-right-style: solid;
          }
          .bgPrimary {
            background-color: var(--bgGrey);
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
            color: var(--greyText);
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
            border-bottom: 2px solid var(--greyText); /* This creates the border. Replace black with whatever color you want. */
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
            /*background-color: rgba(255, 255, 255, 0.99) !important;*/
            -webkit-box-shadow: 0 4px 3px 0 rgba(96, 96, 96, 0.3);
            -moz-box-shadow: 0 4px 3px 0 rgba(96, 96, 96, 0.3);
            box-shadow: 0 4px 3px 0 rgba(96, 96, 96, 0.3);
          }
          .tm-1 {
            margin-top: -1px;
          }
          .navbar.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }

          .navbar.past-main .nav-item .nav-link {
            font-weight: 500;
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

Menubar.propTypes = {
  siteTitle: PropTypes.string,
}

Menubar.defaultProps = {
  siteTitle: ``,
}

export default Menubar

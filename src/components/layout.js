/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Menubar from "./menubar"
import { colors } from "./styles/styles"

const Layout = ({ children }) => {
  return (
    <>
      <>
        <Menubar />
        <div className="content">
          <main>{children}</main>
        </div>
      </>

      <style jsx>{`
        @media (max-width: 991px) {
          .content {
            margin-top: 33px;
          }
        }
        @media (min-width: 992px) {
          .content {
          position: relative;
          margin-left: 265px
          }
        }
        }
      `}</style>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          --bg: ${colors.white};
          --textNormal: #222;
          --primary: ${colors.primary};
          --neutral: ${colors.white};
          --greyText: ${colors.darkTextGrey};
          --inverseGreyText: ${colors.lightTextGrey};
          --bgGrey: ${colors.primaryGrey};
          --inverseNeutral: ${colors.dark};
          --scrollHover: #a5a5a5;
          --lineGrey: lightgrey;
          --textTitle: #222;
          --textLink: blue;
          --hr: hsla(0, 0%, 0%, 0.2);
        }

        body.dark {
          -webkit-font-smoothing: antialiased;
          --primary: ${colors.primary};
          --neutral: ${colors.dark};
          --inverseNeutral: ${colors.white};
          --bg: ${colors.secondary};
          --greyText: ${colors.lightTextGrey};
          --inverseGreyText: ${colors.darkTextGrey};
          --bgGrey: ${colors.secondaryGrey};
          --lineGrey: #5a5a5a;
          --scrollHover: #d0d0d0;
          --textNormal: rgba(255, 255, 255, 0.88);
          --textTitle: white;
          --textLink: yellow;
          --hr: hsla(0, 0%, 100%, 0.2);
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: var(--bgGrey);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--scrollHover);
          border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: var(--greyText);
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

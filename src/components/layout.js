/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { colors } from "./styles/styles"
import Menubar from "./menubar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Menubar siteTitle={data.site.siteMetadata.title} />
      <div className="content">
        <main>{children}</main>
        {
          // <footer>
          //   © {new Date().getFullYear()}, Built with
          //   {` `}
          //   <a href="https://www.gatsbyjs.org">Gatsby</a>
          // </footer>
        }
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
          .content {
            margin-top: 50px;
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
        body {
          --bg: ${colors.white};
          --textNormal: #222;
          --primary: ${colors.primary};
          --neutral: ${colors.white};
          --greyText: ${colors.darkTextGrey};
          --bgGrey: ${colors.primaryGrey};
          --textTitle: #222;
          --textLink: blue;
          --hr: hsla(0, 0%, 0%, 0.2);
          transition: all 2s linear;
        }

        body.dark {
          -webkit-font-smoothing: antialiased;
          --primary: ${colors.primary};
          --neutral: ${colors.dark};
          --bg: ${colors.secondary};
          --greyText: ${colors.lightTextGrey};
          --bgGrey: ${colors.secondaryGrey};
          --textNormal: rgba(255, 255, 255, 0.88);
          --textTitle: white;
          --textLink: yellow;
          --hr: hsla(0, 0%, 100%, 0.2);
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

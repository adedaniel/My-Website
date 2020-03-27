/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

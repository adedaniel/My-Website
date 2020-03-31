import React from "react"
import Intro from "./HomePages/Intro"
import { useStaticQuery, graphql } from "gatsby"
import About from "./HomePages/About"
import Services from "./HomePages/Services"
import Technologies from "./HomePages/Technologies"

export default function HomePage() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          facebook
          github
          linkedin
          twitter
          youtube
          phone
          email
        }
      }
    }
  `)
  const queryData = data.site.siteMetadata

  return (
    <>
      <Intro queryData={queryData} />
      <About />
      <Services />
      <Technologies />
    </>
  )
}

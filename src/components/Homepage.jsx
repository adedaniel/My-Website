import React from "react"
import Intro from "./HomePages/Intro"
import { useStaticQuery, graphql } from "gatsby"
import About from "./HomePages/About"
import Services from "./HomePages/Services"
import Technologies from "./HomePages/Technologies"
import Portfolio from "./HomePages/Portfolio"
import Clients from "./HomePages/Clients"
import Contact from "./HomePages/Contact"

export default function HomePage() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          whatsapp
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
    <div data-spy="scroll" data-target="menu" data-offset="0">
      <Intro queryData={queryData} />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Clients />
      <Contact />

    </div>
  )
}

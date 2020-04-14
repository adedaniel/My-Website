import React from "react"
import Homepage from "../components/Homepage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage />
  </Layout>
)

export default IndexPage

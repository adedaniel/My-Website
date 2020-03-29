import React from "react"
import { Link } from "gatsby"
import Homepage from "../components/Homepage"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage />
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InexistingPage from "../components/404Page"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Uh oh" />
    <InexistingPage />
  </Layout>
)

export default NotFoundPage

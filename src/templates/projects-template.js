import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDetails from "../components/ProjectDetails"

export default function Template({ data }) {
  const projects = data.markdownRemark
  return (
    <>
      <Layout>
        <SEO title="Projects" />
        <ProjectDetails html={projects.html} frontmatter={projects.frontmatter} />
      </Layout>

    </>

  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
              path 
              date 
              title 
              category 
              link
              code
      }
    }
  }
`

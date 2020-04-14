import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDetails from "../components/ProjectDetails"

export default function Template({ data }) {
  const projects = data.markdownRemark
  return (
    <>
      <Layout makeActive={5}>
        <SEO title="Projects" />
        <ProjectDetails html={projects.html} frontmatter={projects.frontmatter} />
      </Layout>


      {
        // <Link to="/blog">See more posts</Link>
        //   <hr />
        //   <h1>{post.frontmatter.title}</h1>
        //   <h6>
        //     By {post.frontmatter.author}. Published on {post.frontmatter.date}
        //   </h6>
        //   <div dangerouslySetInnerHTML={{ __html: post.html }} />
      }
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

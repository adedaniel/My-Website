import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { colors } from "../styles/styles"
import BackgroundImage from "gatsby-background-image"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const NotFoundImageBackground = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404-image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG 
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      // className={className}
      fluid={data.placeholderImage.childImageSharp.fluid}
      backgroundColor={colors.white}
      fadeIn={`soft`}
      style={{
        backgroundSize: "auto",
        backgroundPosition: "left",
        backgroundColor: 'transparent',
        backgroundSize: '60%'
        // backgroundRepeat: '',
      }}
    >
      {children}
    </BackgroundImage>
  )
}

export default NotFoundImageBackground

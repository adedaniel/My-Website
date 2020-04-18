import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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

const BGImageDarkBackground = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-dark-image.jpg" }) {
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
      // backgroundColor={colors.transparent}
      fadeIn={`soft`}

      style={{
        backgroundPosition: "right",
        backgroundColor: 'transparent',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed'

      }}
    >
      {children}
    </BackgroundImage>
  )
}

export default BGImageDarkBackground

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from "react"
import RootLayout from "./src/components/root-layout"

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
)

// You can delete this file if you're not using it

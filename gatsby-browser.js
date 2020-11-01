/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "bootstrap/dist/css/bootstrap.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"
import "animate.css"
import React from "react"
import RootLayout from "./src/components/root-layout"

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
)

// You can delete this file if you're not using it

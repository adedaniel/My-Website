import React from "react"
import PreloadAnimation from "./PreloadAnimation"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Provider } from "../components/Context"

export default function RootLayout({ children }) {
  const setToggle = (theme, toggleTheme) => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light")
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Provider
          value={{
            theme: theme,
            setToggle: () => setToggle(theme, toggleTheme),
          }}
        >
          <PreloadAnimation />
          {children}
        </Provider>
      )}
    </ThemeToggler>
  )
}

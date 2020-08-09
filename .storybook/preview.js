import React from "react"
import theme from "../src/theme"
import {ThemeProvider} from "styled-components"

import {addDecorator} from "@storybook/react" 

addDecorator((storyFn) => {
  <ThemeProvider theme={theme}></ThemeProvider>
})
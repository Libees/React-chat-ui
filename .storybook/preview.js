import React from "react"
import theme from "../src/theme"
import {ThemeProvider} from "styled-components"
import {addDecorator} from "@storybook/react"

addDecorator(storyFn => {
return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
})
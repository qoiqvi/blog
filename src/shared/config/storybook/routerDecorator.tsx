import type { Decorator } from "@storybook/react"
// import { StoreProvider } from "App/provider/StoreProvider"
import { BrowserRouter } from "react-router-dom"

export const RouterDecorator: Decorator = (Story) => (
	// <StoreProvider>
	<BrowserRouter>
		<Story />
	</BrowserRouter>
	// </StoreProvider>
)

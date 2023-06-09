import { render } from "react-dom"
import App from "./App/App"
// import "app/styles/index.scss"
import "App/styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "App/provider/ThemeProvider"
import "./shared/config/i18next/i18next"
import { ErrorBoundary } from "App/provider/ErrorBoundary"

render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById("root")
)

import { render } from "react-dom"
import App from "./App/App"
import "App/styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "App/provider/ThemeProvider"
import "./shared/config/i18next/i18next"
import { ErrorBoundary } from "App/provider/ErrorBoundary"
import { StoreProvider } from "App/provider/StoreProvider"

render(
	<BrowserRouter>
		<ThemeProvider>
			<StoreProvider>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</StoreProvider>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
)

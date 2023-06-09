import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/className"
import { useTheme } from "./provider/ThemeProvider"
import { AppRouter } from "./provider/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App

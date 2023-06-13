import { Suspense, useEffect } from "react"
import { classNames } from "shared/lib/classNames/className"
// import { useTheme } from "./provider/ThemeProvider"
import { AppRouter } from "./provider/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { useDispatch } from "react-redux"
import { UserSliceActions } from "entities/User"

const App = () => {
	// const { theme } = useTheme()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(UserSliceActions.initAuthData())
	}, [dispatch])
	return (
		<div className={classNames("app", {}, [])}>
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

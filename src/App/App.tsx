import { Suspense, useEffect } from "react"
import { classNames } from "shared/lib/classNames/className"
import { AppRouter } from "./provider/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { UserSliceActions, getUserInited } from "entities/User"

const App = () => {
	const inited = useSelector(getUserInited)
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
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}

export default App

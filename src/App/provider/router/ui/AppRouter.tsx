import { Suspense, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import { type AppRoutesProps, routeConfig } from "shared/config/routeConfig/routeConfig"
import { PageLoader } from "widgets/PageLoader"
import { RequireAuth } from "./requireAuth"

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<>{route.element}</>
			</Suspense>
		)

		return (
			<Route
				path={route.path}
				key={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	}, [])
	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default AppRouter

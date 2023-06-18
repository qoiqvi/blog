import { Suspense, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import { type AppRoutesProps, routeConfig } from "shared/config/routeConfig/routeConfig"
import { PageLoader } from "widgets/PageLoader"
import { RequireAuth } from "./requireAuth"

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">{route.element}</div>
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
	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
			{/* {Object.values(routeConfig).map(({ element, path }) => (
				<Route
					path={path}
					key={path}
					element={
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">{element}</div>
						</Suspense>
					}
				/>
			))} */}
		</Routes>
	)
}

export default AppRouter

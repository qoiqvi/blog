import { AboutPage } from "pages/About"
import { ErrorPage } from "pages/ErrorPage"
import { MainPage } from "pages/MainPage"
import { type RouteProps } from "react-router-dom"

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/main",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.ABOUT]: {
		element: <AboutPage />,
		path: AppRoutes.ABOUT,
	},
	[AppRoutes.MAIN]: {
		element: <MainPage />,
		path: AppRoutes.MAIN,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <ErrorPage />,
		path: AppRoutes.NOT_FOUND,
	},
}

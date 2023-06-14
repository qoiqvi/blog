import { AboutPage } from "pages/About"
import { ErrorPage } from "pages/ErrorPage"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { type RouteProps } from "react-router-dom"

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.ABOUT]: {
		element: <AboutPage />,
		path: RoutePath.about,
	},
	[AppRoutes.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
	},
	[AppRoutes.PROFILE]: {
		element: <ProfilePage />,
		path: RoutePath.profile,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <ErrorPage />,
		path: RoutePath.not_found,
	},
}

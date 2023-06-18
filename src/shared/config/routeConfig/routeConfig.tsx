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

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.ABOUT]: {
		element: <AboutPage />,
		path: RoutePath.about,
		authOnly: false,
	},
	[AppRoutes.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
		authOnly: false,
	},
	[AppRoutes.PROFILE]: {
		element: <ProfilePage />,
		path: RoutePath.profile,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <ErrorPage />,
		path: RoutePath.not_found,
		authOnly: false,
	},
}

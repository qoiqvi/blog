import { AboutPage } from "pages/About"
import { ArticleDetailsPage } from "pages/ArticleDetailsPage"
import { ArticlesPage } from "pages/ArticlesPage"
import { ErrorPage } from "pages/ErrorPage"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { type RouteProps } from "react-router-dom"

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES_PAGE = "articles",
	ARTICLE_DETAIL = "articles/",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.ARTICLES_PAGE]: "/articles",
	[AppRoutes.ARTICLE_DETAIL]: "/articles/",
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
	[AppRoutes.ARTICLES_PAGE]: {
		element: <ArticlesPage />,
		path: RoutePath.articles,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAIL]: {
		element: <ArticleDetailsPage />,
		path: RoutePath["articles/"] + ":id",
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <ErrorPage />,
		path: RoutePath.not_found,
		authOnly: false,
	},
}

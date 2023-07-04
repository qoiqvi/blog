import { AboutPage } from "pages/About"
import { ArticleDetailsPage } from "pages/ArticleDetailsPage"
import { ArticleEditPage } from "pages/ArticleEditPage"
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
	ARTICLE_DETAIL = "article/",
	ARTICLE_CREATE = "article_create",
	ARTICLE_EDIT = "article_edit",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile/",
	[AppRoutes.ARTICLES_PAGE]: "/articles",
	[AppRoutes.ARTICLE_DETAIL]: "/article/",
	[AppRoutes.ARTICLE_CREATE]: "/article/create",
	[AppRoutes.ARTICLE_EDIT]: "/article/:id/edit",
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
		path: `${RoutePath.profile}:id`,
		authOnly: true,
	},
	[AppRoutes.ARTICLES_PAGE]: {
		element: <ArticlesPage />,
		path: RoutePath.articles,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAIL]: {
		element: <ArticleDetailsPage />,
		path: RoutePath["article/"] + ":id",
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		element: <ArticleEditPage />,
		path: RoutePath.article_edit,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		element: <ArticleEditPage />,
		path: RoutePath.article_create,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <ErrorPage />,
		path: RoutePath.not_found,
		authOnly: false,
	},
}

import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticlesPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleList, ArticleView } from "entities/Article"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { ArticlesPageSliceActions, ArticlesPageSliceReducer, getArticles } from "../../model/slice/articlesPageSlice"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import {
	getArticlesListError,
	getArticlesListInited,
	getArticlesListIsLoading,
	getArticlesListView,
} from "../../model/selectors/articlesPageSelectors"
import { memo, useCallback } from "react"
import { ArticlePageViewSelector } from "../ArticlePageViewSelector/ArticlePageViewSelector"
import { Page } from "widgets/Page"
import { fetchNextArticles } from "pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles"
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage"
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList"
export interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlesPage: ArticlesPageSliceReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const error = useSelector(getArticlesListError)
	const isLoading = useSelector(getArticlesListIsLoading)
	const view = useSelector(getArticlesListView)
	const articles = useSelector(getArticles.selectAll)
	const inited = useSelector(getArticlesListInited)

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticles())
	}, [dispatch])

	useInitialEffect(() => {
		// dispatch(initArticlesPage())
		if (!inited) {
			dispatch(ArticlesPageSliceActions.initState)
			dispatch(fetchArticlesList({ page: 1 }))
		}
	})

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(ArticlesPageSliceActions.setView(view))
		},
		[dispatch]
	)

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={false}
		>
			<Page
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<ArticlePageViewSelector
					view={view}
					changeView={onChangeView}
					className={cls.viewSelector}
				/>
				<ArticleList
					view={view}
					isLoading={isLoading}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticlesPage)

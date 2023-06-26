import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticlesPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleList, ArticleView } from "entities/Article"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { ArticlesPageSliceActions, ArticlesPageSliceReducer, getArticles } from "../../model/slice/articlesPageSlice"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"
import { useSelector } from "react-redux"
import {
	getArticlesListError,
	getArticlesListIsLoading,
	getArticlesListView,
} from "../../model/selectors/articlesPageSelectors"
import { memo, useCallback } from "react"
import { ArticlePageViewSelector } from "../ArticlePageViewSelector/ArticlePageViewSelector"

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

	useInitialEffect(() => {
		dispatch(fetchArticlesList({ page: 1 }))
		dispatch(ArticlesPageSliceActions.initState())
	})

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(ArticlesPageSliceActions.setView(view))
		},
		[dispatch]
	)

	// стили вешаются раньше, чем происходит загрузка
	// нужен номральный лоадинг реализовать.

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.ArticlesPage, {}, [className])}>
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
			</div>
		</DynamicModuleLoader>
	)
}

export default memo(ArticlesPage)

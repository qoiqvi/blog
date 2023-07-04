import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticlesPage.module.scss"
import { ArticleList } from "entities/Article"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { ArticlesPageSliceReducer, getArticles } from "../../model/slice/articlesPageSlice"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import {
	getArticlesListError,
	getArticlesListIsLoading,
	getArticlesListView,
} from "../../model/selectors/articlesPageSelectors"
import { memo, useCallback } from "react"
import { Page } from "widgets/Page"
import { fetchNextArticles } from "../../model/services/fetchNextArticles/fetchNextArticles"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"
import { ArticlePageFilters } from "../ArticlePageFilters/ui/ArticlePageFilters"
import { useSearchParams } from "react-router-dom"
import { Text, TextTheme } from "shared/ui/Text"
export interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlesPage: ArticlesPageSliceReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const error = useSelector(getArticlesListError)
	const isLoading = useSelector(getArticlesListIsLoading)
	const view = useSelector(getArticlesListView)
	const articles = useSelector(getArticles.selectAll)
	const [params] = useSearchParams()

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticles())
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(initArticlesPage(params))
	})

	if (error) {
		return (
			<Text
				theme={TextTheme.ERROR}
				text="Произошла непредвиденная ошибка"
			/>
		)
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={false}
		>
			<Page
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<ArticlePageFilters />
				<ArticleList
					view={view}
					isLoading={isLoading}
					articles={articles}
					className={cls.list}
				/>
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticlesPage)

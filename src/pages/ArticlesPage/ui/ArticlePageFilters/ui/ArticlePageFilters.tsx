import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticlePageFilters.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { ArticlePageViewSelector } from "../../ArticlePageViewSelector/ArticlePageViewSelector"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import {
	getArticlesListOrder,
	getArticlesListSearch,
	getArticlesListSort,
	getArticlesListType,
	getArticlesListView,
} from "../../../model/selectors/articlesPageSelectors"
import { ArticleSortField, ArticleSortSelector, ArticleView } from "entities/Article"
import { ArticlesPageSliceActions } from "../../../model/slice/articlesPageSlice"
import { Card } from "shared/ui/Card"
import { Input } from "shared/ui/Input"
import { SortOrder } from "shared/types"
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { TabItem } from "shared/ui/Tabs/ui/Tabs"
import { ArticleType } from "entities/Article/model/types/article"
import { ArticlePageTabs } from "../../ArticlePageTabs/ui/ArticlePageTabs"

export interface ArticlePageFiltersProps {
	className?: string
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const view = useSelector(getArticlesListView)
	const sort = useSelector(getArticlesListSort)
	const order = useSelector(getArticlesListOrder)
	const search = useSelector(getArticlesListSearch)
	const type = useSelector(getArticlesListType)

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }))
	}, [dispatch])

	const debouncedFetchData = useDebounce(fetchData, 500)

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(ArticlesPageSliceActions.setView(view))
			dispatch(ArticlesPageSliceActions.setPage(1))
			fetchArticlesList({})
		},
		[dispatch]
	)

	const onChangeSort = useCallback(
		(newSort: ArticleSortField) => {
			dispatch(ArticlesPageSliceActions.setSort(newSort))
			dispatch(ArticlesPageSliceActions.setPage(1))
			fetchData()
		},
		[dispatch, fetchData]
	)

	const onChangeType = useCallback(
		(newType: TabItem) => {
			dispatch(ArticlesPageSliceActions.setType(newType.value as ArticleType))
			dispatch(ArticlesPageSliceActions.setPage(1))
			fetchData()
		},
		[dispatch, fetchData]
	)

	const onChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(ArticlesPageSliceActions.setOrder(newOrder))
			dispatch(ArticlesPageSliceActions.setPage(1))
			fetchData()
		},
		[dispatch, fetchData]
	)

	const onChangeSearch = useCallback(
		(value: string) => {
			dispatch(ArticlesPageSliceActions.setSearch(value))
			dispatch(ArticlesPageSliceActions.setPage(1))
			debouncedFetchData()
		},
		[debouncedFetchData, dispatch]
	)

	return (
		<div className={classNames(cls.ArticlePageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					changeSort={onChangeSort}
					changeOrder={onChangeOrder}
				/>
				<ArticlePageViewSelector
					changeView={onChangeView}
					view={view}
				/>
			</div>
			<Card className={cls.search}>
				<Input
					value={search}
					onChange={onChangeSearch}
					placeholder={t("search...")}
				/>
			</Card>
			<ArticlePageTabs
				type={type}
				onChangeType={onChangeType}
				className={cls.tabs}
			/>
		</div>
	)
})

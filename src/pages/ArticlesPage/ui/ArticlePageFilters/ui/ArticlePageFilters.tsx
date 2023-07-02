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
	getArticlesListView,
} from "../../../model/selectors/articlesPageSelectors"
import { ArticleSortField, ArticleSortSelector, ArticleView } from "entities/Article"
import { ArticlesPageSliceActions } from "../../../model/slice/articlesPageSlice"
import { Card } from "shared/ui/Card"
import { Input } from "shared/ui/Input"
import { SortOrder } from "shared/types"

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

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(ArticlesPageSliceActions.setView(view))
		},
		[dispatch]
	)

	const onChangeSort = useCallback(
		(newSort: ArticleSortField) => {
			dispatch(ArticlesPageSliceActions.setSort(newSort))
		},
		[dispatch]
	)

	const onChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(ArticlesPageSliceActions.setOrder(newOrder))
		},
		[dispatch]
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
					placeholder={t("search...")}
				/>
			</Card>
		</div>
	)
})

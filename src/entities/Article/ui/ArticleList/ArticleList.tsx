import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleList.module.scss"
import { useTranslation } from "react-i18next"
import { HTMLAttributeAnchorTarget, memo } from "react"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton"
import { useSelector } from "react-redux"
import { getArticlesListHasMore } from "pages/ArticlesPage/model/selectors/articlesPageSelectors"

export interface ArticleListProps {
	className?: string
	articles: Article[]
	isLoading?: boolean
	view: ArticleView
	target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) =>
	new Array(view === ArticleView.DETAIL ? 3 : 9).fill(0).map((i, index) => (
		<ArticleListItemSkeleton
			key={index}
			view={view}
			className={cls.card}
		/>
	))

export const ArticleList = memo((props: ArticleListProps) => {
	const { className, articles, isLoading, view, target } = props
	const { t } = useTranslation()
	const hasMore = useSelector(getArticlesListHasMore)
	const renderArticles = (article: Article) => (
		<ArticleListItem
			key={article.id}
			article={article}
			view={view}
			className={cls.card}
			target={target}
		/>
	)

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0 ? articles.map(renderArticles) : null}
			{isLoading && hasMore && getSkeletons(view)}
		</div>
	)
})

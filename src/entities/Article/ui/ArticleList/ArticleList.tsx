import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleList.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton"

export interface ArticleListProps {
	className?: string
	articles: Article[]
	isLoading?: boolean
	view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { className, articles, isLoading = false, view = ArticleView.LIST } = props
	const { t } = useTranslation()

	const mockedArr = () => {
		return new Array(9).fill(0).map((elem, ind) => (
			<ArticleListItemSkeleton
				view={view}
				key={ind}
				className={cls.card}
			/>
		))
	}

	const renderArticles = (article: Article) => (
		<ArticleListItem
			key={article.id}
			isLoading={isLoading}
			article={article}
			view={view}
			className={cls.card}
		/>
	)

	if (isLoading) {
		return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{mockedArr()}</div>
	}

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0 ? (
				articles.map(renderArticles)
			) : (
				<>
					<div>Посты </div>
				</>
			)}
		</div>
	)
})

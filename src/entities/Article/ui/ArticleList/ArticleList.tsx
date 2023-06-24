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
	// error?: string
	isLoading?: boolean
	view: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { className, articles, isLoading, view } = props
	const { t } = useTranslation()

	const renderArticles = (article: Article) => (
		<ArticleListItem
			key={article.id}
			article={article}
			view={view}
			className={cls.card}
		/>
	)

	// if (error) {
	// 	return <h1>{error}</h1>
	// }

	if (isLoading) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				{articles.map((article, ind) => (
					<ArticleListItemSkeleton
						view={view}
						key={ind}
						className={cls.card}
					/>
				))}
			</div>
		)
	}

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0 ? (
				articles.map(renderArticles)
			) : (
				<>
					<div>Посты</div>
				</>
			)}
		</div>
	)
})

// const mockedArr = () => {
// 	return new Array(9).fill(0).map((elem, ind) => (
// 		<ArticleListItemSkeleton
// 			view={view}
// 			key={ind}
// 			className={cls.card}
// 		/>
// 	))
// }

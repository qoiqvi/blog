import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleList.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"

export interface ArticleListProps {
	className?: string
	articles: Article[]
	isLoading?: boolean
	view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { className, articles, isLoading = false, view = ArticleView.DETAIL } = props
	const { t } = useTranslation()

	const renderArticles = (article: Article) => (
		<ArticleListItem
			article={article}
			view={view}
		/>
	)

	return (
		<div className={classNames(cls.ArticleList, {}, [className])}>
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

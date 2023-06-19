import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "entities/Article"
import { useParams } from "react-router-dom"

export interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation("article-details")
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("Article not found")}</div>
	}

	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<ArticleDetails id={id} />
		</div>
	)
}

export default ArticleDetailsPage

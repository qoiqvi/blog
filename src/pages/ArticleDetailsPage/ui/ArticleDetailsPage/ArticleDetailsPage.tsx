import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPage.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>DETAIL PAGE</div>
}

export default ArticleDetailsPage

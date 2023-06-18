import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticlesPage.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	return <div className={classNames(cls.ArticlesPage, {}, [className])}>ARTICLES PAGE</div>
}

export default ArticlesPage

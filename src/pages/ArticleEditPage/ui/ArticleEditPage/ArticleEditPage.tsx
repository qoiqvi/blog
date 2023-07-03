import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleEditPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"

export interface ArticleEditPageProps {
	className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.ArticleEditPage, {}, [className])}>
			<div>Article EDIT PAGE</div>
		</div>
	)
}

export default memo(ArticleEditPage)

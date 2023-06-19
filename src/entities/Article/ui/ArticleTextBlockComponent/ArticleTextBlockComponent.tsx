import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleTextBlockComponent.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticleTextBlockComponentProps {
	className?: string
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
	const { className } = props
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
			ArticleTextBlockComponentArticleTextBlockComponentArticleTextBlockComponent
		</div>
	)
}

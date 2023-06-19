import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleCodeBlockComponent.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticleCodeBlockComponentProps {
	className?: string
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
	const { className } = props
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			BLOCK COMPONENTNNTNTNODIWSOANCOISAIOCNSIAC
		</div>
	)
}

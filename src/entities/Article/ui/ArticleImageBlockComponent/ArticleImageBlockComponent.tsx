import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleImageBlockComponent.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticleImageBlockComponentProps {
	className?: string
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
	const { className } = props
	const { t } = useTranslation()
	return <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>IMAGE!11111111111111111111</div>
}

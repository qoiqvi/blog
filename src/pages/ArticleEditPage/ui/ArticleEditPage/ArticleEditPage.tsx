import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleEditPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Page } from "widgets/Page"
import { useParams } from "react-router-dom"

export interface ArticleEditPageProps {
	className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>()
	console.log(id)
	const isEdit = Boolean(id)
	return (
		<Page className={classNames(cls.ArticleEditPage, {}, [className])}>
			<div>{isEdit ? "Редактирование статьи" + id : "Создание"}</div>
		</Page>
	)
}

export default memo(ArticleEditPage)

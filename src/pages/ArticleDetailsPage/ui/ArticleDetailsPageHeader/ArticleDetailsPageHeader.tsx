import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPageHeader.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User"
import { getArticleDetailsData } from "entities/Article"
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article"

export interface ArticleDetailsPageHeaderProps {
	className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
	const { className } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const userData = useSelector(getUserAuthData)
	const article = useSelector(getArticleDetailsData)
	const canEdit = useSelector(getCanEditArticle)

	const onBackToArticles = useCallback(() => {
		navigate(RoutePath.articles)
	}, [navigate])

	return (
		<div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
			<AppButton
				onClick={onBackToArticles}
				theme={ButtonTheme.OUTLINED}
			>
				{t("All articles")}
			</AppButton>
			{canEdit && (
				<AppButton
					onClick={onBackToArticles}
					theme={ButtonTheme.OUTLINED}
					className={cls.editBtn}
				>
					{t("Edit article")}
				</AppButton>
			)}
		</div>
	)
})

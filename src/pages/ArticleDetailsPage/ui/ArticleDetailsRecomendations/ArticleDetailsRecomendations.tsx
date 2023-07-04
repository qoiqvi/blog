import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsRecomendations.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { ArticleList, ArticleView } from "entities/Article"
import { Text, TextTheme } from "shared/ui/Text"
import {
	getArticleDetailsPageRecomendationsIsLoading,
	getArticleDetailsPageRecomendationsErorr,
} from "pages/ArticleDetailsPage/model/selectors/recomendations"
import { fetchArticlesRecomendations } from "pages/ArticleDetailsPage/model/services/fetchArticleRecomendations/fetchArticleRecomendations"
import { getArticleRecomendations } from "pages/ArticleDetailsPage/model/slices/articleDetailsRecomendationsSlice"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"

export interface ArticleDetailsRecomendationsProps {
	className?: string
}

export const ArticleDetailsRecomendations = memo((props: ArticleDetailsRecomendationsProps) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const recomendations = useSelector(getArticleRecomendations.selectAll)
	const recomendationsIsLoading = useSelector(getArticleDetailsPageRecomendationsIsLoading)
	const recomendationsError = useSelector(getArticleDetailsPageRecomendationsErorr)

	useInitialEffect(() => {
		dispatch(fetchArticlesRecomendations())
	})
	if (recomendationsError) {
		return (
			<Text
				theme={TextTheme.ERROR}
				text={t("Recomendations not found")}
			/>
		)
	}
	return (
		<div className={cls.ArticleDetailsRecomendations}>
			<Text title={t("You may like")} />
			<ArticleList
				articles={recomendations}
				view={ArticleView.LIST}
				isLoading={recomendationsIsLoading}
				className={classNames(cls.ArticleDetailsRecomendations, {}, [className])}
				target={"_blank"}
			/>
		</div>
	)
})

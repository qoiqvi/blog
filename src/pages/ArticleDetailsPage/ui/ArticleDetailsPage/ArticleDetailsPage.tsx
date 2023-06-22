import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "entities/Article"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text"
import { CommentList } from "entities/Comment"
import { memo } from "react"
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader"
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slice/articleDetailsCommentsSlice"
import { useSelector } from "react-redux"
import {
	getArticleDetailsPageCommentErorr,
	getArticleDetailsPageCommentIsLoading,
} from "../../model/selectors/comments"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"

export interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation("article-details")
	const { id } = useParams<{ id: string }>()
	const comments = useSelector(getArticleComments.selectAll)
	const error = useSelector(getArticleDetailsPageCommentErorr)
	const commentsIsLoading = useSelector(getArticleDetailsPageCommentIsLoading)
	const dispatch = useAppDispatch()

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	if (!id) {
		return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("Article not found")}</div>
	}

	const ReducersList = {
		articleDetailsComments: articleDetailsCommentsReducer,
	}

	return (
		<DynamicModuleLoader
			reducers={ReducersList}
			removeAfterUnmount
		>
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetails id={id} />
				<Text
					className={cls.commentTitle}
					title={t("Comments")}
				/>
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)

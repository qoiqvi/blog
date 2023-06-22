import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "entities/Article"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text"
import { CommentList } from "entities/Comment"
import { memo, useCallback } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slice/articleDetailsCommentsSlice"
import { useSelector } from "react-redux"
import {
	getArticleDetailsPageCommentErorr,
	getArticleDetailsPageCommentIsLoading,
} from "../../model/selectors/comments"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { AddNewComment } from "features/AddNewComment"
import { sendArticleComment } from "pages/ArticleDetailsPage/model/services/sendArticleComment/sendArticleComment"

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

	const reducers: ReducersList = {
		articleDetailsComments: articleDetailsCommentsReducer,
	}

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(sendArticleComment(text))
		},
		[dispatch]
	)

	if (!id) {
		return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("Article not found")}</div>
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetails id={id} />
				<Text
					className={cls.commentTitle}
					title={t("Comments")}
				/>
				<AddNewComment onSendComment={onSendComment} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)

import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "entities/Article"
import { useNavigate, useParams } from "react-router-dom"
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
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { AddNewComment } from "features/AddNewComment"
import { sendArticleComment } from "../../model/services/sendArticleComment/sendArticleComment"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Page } from "widgets/Page"
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"

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
	const navigate = useNavigate()

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
		return <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("Article not found")}</Page>
	}

	if (error) {
		return <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("Article not found")}</Page>
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetailsPageHeader />
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
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)

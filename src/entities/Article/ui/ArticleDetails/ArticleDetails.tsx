import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetails.module.scss"
import { useTranslation } from "react-i18next"
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice"
import { memo, useCallback, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById"
import { useSelector } from "react-redux"
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetailsData"
import { Text } from "shared/ui/Text"
import { TextAlingn, TextSize } from "shared/ui/Text/ui/Text"
import { Skeleton } from "shared/ui/Skeleton"
import { Avatar } from "shared/ui/Avatar"
import { Icon } from "shared/ui/Icon"
import EyeIcon from "shared/assets/icons/EyeIcon.svg"
import CalendarIcon from "shared/assets/icons/calendar-samsung-16-svgrepo-com.svg"
import { ArticleBlock, ArticleBlockType } from "../../model/types/article"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"

export interface ArticleDetailsProps {
	className?: string
	id?: string
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { className, id } = props
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const isLoading = useSelector(getArticleDetailsIsLoading)
	const article = useSelector(getArticleDetailsData)
	const error = useSelector(getArticleDetailsError)
	useEffect(() => {
		if (_PROJECT_ !== "storybook") {
			dispatch(fetchArticleById(id))
		}
	}, [dispatch, id])

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.CODE:
				return (
					<ArticleCodeBlockComponent
						key={block.id}
						className={cls.block}
						block={block}
					/>
				)
			case ArticleBlockType.IMAGE:
				return (
					<ArticleImageBlockComponent
						key={block.id}
						block={block}
						className={cls.block}
					/>
				)
			case ArticleBlockType.TEXT:
				return (
					<ArticleTextBlockComponent
						key={block.id}
						className={cls.block}
						block={block}
					/>
				)
			default:
				return null
		}
	}, [])

	let content

	if (isLoading) {
		content = (
			<div>
				<Skeleton
					className={cls.avatar}
					height={200}
					width={200}
					border="50%"
				/>
				<Skeleton
					height={32}
					width={300}
				/>
				<Skeleton
					height={24}
					width={200}
				/>
				<Skeleton
					height={200}
					width="100%"
				/>
				<Skeleton
					height={200}
					width="100%"
				/>
			</div>
		)
	} else if (error) {
		content = (
			<Text
				align={TextAlingn.CENTER}
				title={error}
			></Text>
		)
	} else {
		content = (
			<>
				<div className={cls.avatarWrapper}>
					<Avatar
						size={200}
						className={cls.avatar}
						src={article?.img}
					/>
				</div>
				<div>
					<Text
						title={article?.title}
						size={TextSize.L}
					/>
				</div>
				<div>
					<Text text={article?.subtitle} />
				</div>
				<div className={cls.articleDetails}>
					<Icon Svg={EyeIcon} />
					<span>{article?.views}</span>
				</div>
				<div className={cls.articleDetails}>
					<Icon Svg={CalendarIcon} />
					<span>{article?.createdAt}</span>
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		)
	}
	return (
		<DynamicModuleLoader
			removeAfterUnmount
			reducers={reducers}
		>
			<div
				// unselectable
				className={classNames(cls.ArticleDetails, {}, [className])}
			>
				{content}
			</div>
		</DynamicModuleLoader>
	)
})

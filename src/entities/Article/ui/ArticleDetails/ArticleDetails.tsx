import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetails.module.scss"
import { useTranslation } from "react-i18next"
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice"
import { memo, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById"

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

	useEffect(() => {
		dispatch(fetchArticleById(id))
	}, [dispatch, id])

	return (
		<DynamicModuleLoader
			removeAfterUnmount
			reducers={reducers}
		>
			<div className={classNames(cls.ArticleDetails, {}, [className])}>
				ArticleDetailsArticleDetailsArticleDetails
			</div>
		</DynamicModuleLoader>
	)
})

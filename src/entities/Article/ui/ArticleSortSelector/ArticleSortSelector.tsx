import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleSortSelector.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useMemo } from "react"
import { Select } from "shared/ui/Select"
import { SelectOptions } from "shared/ui/Select/ui/Select"
import { ArticleSortField } from "entities/Article/model/types/article"
import { SortOrder } from "shared/types"

export interface ArticleSortSelectorProps {
	className?: string
	order?: SortOrder
	sort: ArticleSortField
	changeOrder: (newOrder: SortOrder) => void
	changeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { className, changeOrder, changeSort, sort, order } = props
	const { t } = useTranslation()

	const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(
		() => [
			{
				value: "asc",
				content: t("Ascending"),
			},
			{
				value: "desc",
				content: t("Descending"),
			},
		],
		[t]
	)

	const sortFieldOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(
		() => [
			{
				value: ArticleSortField.TITLE,
				content: t("Title"),
			},
			{
				value: ArticleSortField.CREATED,
				content: t("Created"),
			},
			{
				value: ArticleSortField.VIEWS,
				content: t("Views"),
			},
		],
		[t]
	)

	return (
		<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
			<Select
				options={sortFieldOptions}
				placeholder={t("Sort")}
				value={sort}
				onChange={changeSort}
			/>
			<Select
				options={orderOptions}
				placeholder={t("By")}
				value={order}
				onChange={changeOrder}
				className={cls.order}
			/>
		</div>
	)
})

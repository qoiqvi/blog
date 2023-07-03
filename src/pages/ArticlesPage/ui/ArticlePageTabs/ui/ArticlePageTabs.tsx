import { classNames } from "shared/lib/classNames/className"
import { useTranslation } from "react-i18next"
import { memo, useCallback, useMemo } from "react"
import { Tabs } from "shared/ui/Tabs"
import { ArticleType } from "entities/Article/model/types/article"
import { TabItem } from "shared/ui/Tabs/ui/Tabs"

export interface ArticlePageTabsProps {
	className?: string
	onChangeType: (newTab: TabItem) => void
	type: ArticleType
}

export const ArticlePageTabs = memo((props: ArticlePageTabsProps) => {
	const { className, onChangeType, type } = props
	const { t } = useTranslation()

	const typeTabs = useMemo<TabItem[]>(
		() => [
			{
				value: ArticleType.ALL,
				content: t("All"),
			},
			{
				value: ArticleType.ECONIMIC,
				content: t("Economic"),
			},
			{
				value: ArticleType.IT,
				content: t("IT"),
			},
			{
				value: ArticleType.SCIENCE,
				content: t("Science"),
			},
		],
		[t]
	)

	const onTabClick = useCallback(
		(newTab: TabItem) => {
			onChangeType(newTab)
		},
		[onChangeType]
	)

	return (
		<Tabs
			className={classNames("", {}, [className])}
			tabs={typeTabs}
			onTabClick={onTabClick}
			value={type}
		/>
	)
})

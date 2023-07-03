import { classNames } from "shared/lib/classNames/className"
import cls from "./Tabs.module.scss"
import { useTranslation } from "react-i18next"
import { ReactNode, memo, useCallback } from "react"
import { Card } from "shared/ui/Card"
import { CardTheme } from "shared/ui/Card/ui/Card"

export interface TabItem {
	value: string
	content: ReactNode
}

export interface TabsProps {
	className?: string
	tabs: TabItem[]
	value: string
	onTabClick: (newTab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
	const { className, onTabClick, tabs, value } = props
	const { t } = useTranslation()

	const clickHandle = useCallback(
		(tab: TabItem) => {
			return () => {
				onTabClick(tab)
			}
		},
		[onTabClick]
	)

	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((tab) => (
				<Card
					theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
					key={tab.value}
					className={cls.tab}
					onClick={clickHandle(tab)}
				>
					{tab.content}
				</Card>
			))}
		</div>
	)
})

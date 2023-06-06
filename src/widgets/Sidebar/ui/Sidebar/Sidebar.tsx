import { classNames } from "shared/lib/classNames/className"
import cls from "./Sidebar.module.scss"
import { type FC, useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LanguageSwitcher } from "widgets/LanguageSwitcher"

export interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollaped] = useState<boolean>(false)
	const onToggle = () => {
		setCollaped(!collapsed)
	}
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button
				data-testid="sb-button"
				onClick={onToggle}
			>
				TOGGLE
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher className={cls.lang} />
			</div>
		</div>
	)
}

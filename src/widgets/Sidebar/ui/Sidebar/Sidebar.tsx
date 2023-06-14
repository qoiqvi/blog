import cls from "./Sidebar.module.scss"
import { classNames } from "shared/lib/classNames/className"
import { type FC, useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LanguageSwitcher } from "widgets/LanguageSwitcher"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { ButtonSize } from "shared/ui/AppButton/ui/AppButton"
import { SidebarItem } from "../SidebarItem/SidebarItem"

export interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollaped] = useState<boolean>(true)
	const onToggle = () => {
		setCollaped(!collapsed)
	}

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<SidebarItem
				collapsed={collapsed}
				className={cls.items}
			/>
			<AppButton
				data-testid="sb-button"
				onClick={onToggle}
				square={true}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
			>
				{collapsed ? ">" : "<"}
			</AppButton>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	)
}

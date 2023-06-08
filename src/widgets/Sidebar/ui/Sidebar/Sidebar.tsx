import { classNames } from "shared/lib/classNames/className"
import cls from "./Sidebar.module.scss"
import { type FC, useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LanguageSwitcher } from "widgets/LanguageSwitcher"
import { useTranslation } from "react-i18next"

export interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollaped] = useState<boolean>(false)
	const { t } = useTranslation()
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
				{t('TOGGLE')}
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
